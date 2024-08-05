import Fastify from 'fastify'


const app = Fastify({
  logger: true,
})

app.route({
  method: 'POST',
  url: '/api/email/subscribe',
  handler: (request, reply) => {
    reply.header('Access-Control-Allow-Origin', 'https://sites-orgulho-tech--staging.decocdn.com');  // Replace with allowed origin(s)
    reply.header('Access-Control-Allow-Methods', 'POST'); // Specify allowed methods

    
    return { email: request.body.email }
    
  }
});

app.get('/', async (req, reply) => {
  return reply.status(200).type('text/html').send()
})

export default async function handler(req, reply) {
  await app.ready()
  app.server.emit('request', req, reply)
}
