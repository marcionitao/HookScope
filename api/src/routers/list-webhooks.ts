import { lt } from 'drizzle-orm'
import { createSelectSchema } from 'drizzle-zod'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { db } from '@/db'
import { webhooks } from '@/db/schema'

// usando uma const, é a unica forma de conseguir tipar a função
export const listWebhokks: FastifyPluginAsyncZod = async (app) => {
	// create route
	app.get(
		'/api/webhooks',
		{
			schema: {
				// descrevendo a rota
				summary: 'List Webhooks',
				description: 'List Webhooks',
				tags: ['Webhooks'],
				querystring: z.object({
					limit: z.coerce.number().min(1).max(100).default(20), // vai trazer 20 resultados
					cursor: z.string().optional(), // usado para paginação
				}),
				response: {
					200: z.object({
						webhooks: z.array(
							createSelectSchema(webhooks).pick({
								id: true,
								method: true,
								pathname: true,
								createdAt: true,
							}),
						),
						nextCursor: z.string().nullable(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { limit, cursor } = request.query

			const result = await db
				.select({
					id: webhooks.id,
					method: webhooks.method,
					pathname: webhooks.pathname,
					createdAt: webhooks.createdAt,
				})
				.from(webhooks)
				.where(cursor ? lt(webhooks.id, cursor) : undefined)
				.orderBy(webhooks.id)
				.limit(limit + 1)

			const hasMore = result.length > limit
			const items = hasMore ? result.slice(0, limit) : result
			const nextCursor = hasMore ? items[items.length - 1].id : null

			return reply.send({
				webhooks: items,
				nextCursor,
			})
		},
	)
}
