import { eq } from 'drizzle-orm'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { db } from '@/db'
import { webhooks } from '@/db/schema'

// usando uma const, é a unica forma de conseguir tipar a função
export const deleteWebhokks: FastifyPluginAsyncZod = async (app) => {
	// obter um unico webhook
	app.delete(
		'/api/webhooks/:id',
		{
			schema: {
				// descrevendo a rota
				summary: 'Delete specific Webhooks by ID',
				description: 'Delete only one Webhooks',
				tags: ['Webhooks'],
				params: z.object({
					id: z.uuidv7(),
				}),
				response: {
					204: z.void(),
					404: z.object({
						message: z.string(),
					}),
				},
			},
		},
		async (request, reply) => {
			const { id } = request.params

			const result = await db
				.delete(webhooks)
				.where(eq(webhooks.id, id))
				.returning()

			if (result.length === 0) {
				return reply.status(404).send({
					message: 'Webhook not found',
				})
			}

			return reply.status(204).send()
		},
	)
}
