import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { db } from '@/db'
import { webhooks } from '@/db/schema'

// usando uma const, é a unica forma de conseguir tipar a função
export const captureWebhokks: FastifyPluginAsyncZod = async (app) => {
	// obter um unico webhook
	app.all(
		'/capture/*',
		{
			schema: {
				// descrevendo a rota
				summary: 'Capture incoming webhooks request',
				description: 'Capture',
				tags: ['External'],
				response: {
					201: z.object({
						id: z.uuidv7(),
					}),
				},
			},
		},
		async (request, reply) => {
			const method = request.method
			const ip = request.ip
			const contentType = request.headers['content-type']
			const contentLength = request.headers['content-length']
				? Number(request.headers['content-length'])
				: null

			let body: string | null = null

			if (request.body) {
				body =
					typeof request.body === 'string'
						? request.body
						: JSON.stringify(request.body, null, 2)
			}

			const pathname = new URL(request.url).pathname.replace('/capture', '')
			const headers = Object.fromEntries(
				Object.entries(request.headers).map((key, value) => [
					key,
					Array.isArray(value) ? value.join(',') : value || '',
				]),
			)

			const result = await db
				.insert(webhooks)
				.values({
					pathname,
					method,
					ip,
					contentType,
					contentLength,
					body,
					headers,
				})
				.returning()

			return reply.send({ id: result[0].id })
		},
	)
}
