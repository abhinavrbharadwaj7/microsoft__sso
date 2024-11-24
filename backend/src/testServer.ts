import fastify from 'fastify';

const server = fastify();

server.get('/', async (request, reply) => {
  return { message: 'Hello World' };
});

server.listen(3001, (err, address) => {
  if (err) {
    console.error('Error starting the server:', err);
    process.exit(1);
  }
  console.log(`Server running at ${address}`);
});
