import { webhooks } from './../db/schema/webhooks';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { createSelectSchema } from 'drizzle-zod'
import { z } from 'zod'
import { db } from '@/db';
import { eq } from 'drizzle-orm';

// usando uma const, é a unica forma de conseguir tipar a função
export const getWebhokks: FastifyPluginAsyncZod = async (app) => {
  // obter um unico webhook
  app.get(
    '/api/webhooks/:id',
    {
      schema: {
        // descrevendo a rota
        summary: 'Get specific Webhooks by ID',
        description: 'Get only one Webhooks',
        tags: ['Webhooks'],
        params: z.object({
          id: z.uuidv7(),
        }),
        response: {
          200: createSelectSchema(webhooks),
          404: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { id } = request.params

      const result = await db
        .select()
        .from(webhooks)
        .where(eq(webhooks.id, id))
        .limit(1)

      if (result.length === 0) {
        return reply.status(404).send({
          message: 'Webhook not found',
        })
      }

      return reply.send(result[0])
    },
  )
}
