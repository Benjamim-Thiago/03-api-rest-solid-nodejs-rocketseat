import { FastifyInstance } from 'fastify'

import { verifyJwt } from '@/http/middlewares/verify-jwt'

import { search } from '@/http/controllers/gyms/search.controller'
import { nearby } from '@/http/controllers/gyms/nearby.controller'
import { create } from '@/http/controllers/gyms/create.controller'
import { verifyUserRole } from '@/http/middlewares/verify-user-role'

export async function gymsRoutes(app: FastifyInstance) {
  // Tudo que vir apos  esse hook deverá está auteticado.
  app.addHook('onRequest', verifyJwt)

  app.get('/gyms/search', search)
  app.get('/gyms/nearby', nearby)

  app.post('/gyms', { onRequest: [verifyUserRole('ADMIN')] }, create)
}
