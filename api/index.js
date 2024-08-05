import Fastify from 'fastify'
import cors from '@fastify/cors'

const app = Fastify({
  logger: true,
})
await fastify.register(cors, { 
  origin: ['https://sites-orgulho-tech--staging.decocdn.com'], // Replace with allowed origin(s)
  methods: ['POST'], // Specify allowed methods (e.g., GET, POST)
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
