import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import ScalarApiReference from '@scalar/fastify-api-reference'
import { fastify } from 'fastify'
import {
	jsonSchemaTransform,
	serializerCompiler,
	validatorCompiler,
	type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { env } from './env'
import { deleteWebhokks } from './routers/delete-webhooks'
import { getWebhokks } from './routers/get-webhooks'
import { listWebhokks } from './routers/list-webhooks'
import { captureWebhokks } from './routers/capture-webhooks'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

// config Cors
app.register(fastifyCors, {
	origin: true, // permite que qualquer endereço acesse o backend
	methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
	credentials: true, // envia os cookies via auth
})

// config swagger
app.register(fastifySwagger, {
	openapi: {
		info: {
			title: 'Webhook Inpector API',
			description: 'API for capturing and inspecting webhook requests',
			version: '1.0.0',
		},
	},
	transform: jsonSchemaTransform,
})

// config Scalar
app.register(ScalarApiReference, {
	routePrefix: '/docs',
})

// import routes
app.register(listWebhokks)
app.register(getWebhokks)
app.register(deleteWebhokks)
app.register(captureWebhokks)

// start server)

app.listen({ port: env.PORT, host: '0.0.0.0' }).then(() => {
	console.log('🔥 Server running on http://localhost:3333')
	console.log('📚 Docs available at http://localhost:3333/docs')
})
