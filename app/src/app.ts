import fastify from 'fastify'
import { z } from 'zod'
import { prisma } from './lib/prisma'
import { register } from './http/controllers/register.controller'

export const app = fastify()

app.post('/users', register)
