import Fastify from 'fastify'


const app = Fastify({
  logger: true,
})

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.orgulhotech.com.br'); 
  // Or res.setHeader('Access-Control-Allow-Origin', '*'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

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
