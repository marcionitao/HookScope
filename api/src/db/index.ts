// Conexão com a Base de Dados
import { drizzle } from 'drizzle-orm/node-postgres'
import { env } from '@/env'
import * as schema from './schema'

export const db = drizzle(env.DATABASE_URL, {
  schema,
  casing: 'snake_case',
})
