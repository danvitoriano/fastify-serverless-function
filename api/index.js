import Fastify from 'fastify'

const app = Fastify({
  logger: true,
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
