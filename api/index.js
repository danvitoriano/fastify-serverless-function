import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify({
  logger: true,
})
await fastify.register(cors, { 
  origin: 'https://sites-orgulho-tech--staging.decocdn.com/?__cb=W%2Fqknjyflykz%40qknjyflykz',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
})

app.get('/', async (req, reply) => {
  return reply.status(200).type('text/html').send()
})

app.post('/api/email/subscribe', async (req, reply) => {
  return { email: req.body.email }
})

export default async function handler(req, reply) {
  await app.ready()
  app.server.emit('request', req, reply)
}
