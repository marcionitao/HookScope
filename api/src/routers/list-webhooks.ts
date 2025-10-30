import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

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
				}), // usando para paginação
				response: {
					200: z.array(
						z.object({
							id: z.string(),
							method: z.string(),
						}),
					),
				},
			},
		},
		async (request, reply) => {
			const { limit } = request.query

			return [
				{
					id: '1',
					method: 'GET',
				},
			]
		},
	)
}
