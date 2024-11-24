import fastify from 'fastify';

// Create Fastify instance
const server = fastify();

// Default route for testing
server.get('/', async (request, reply) => {
  return { message: 'Hello from Fastify!' };
});

// Server Port (3001 or any other port)
const PORT = process.env.PORT || 3001;

console.log("Server setup complete, attempting to start...");
console.log("Starting the server...");
server.listen(PORT, (err, address) => {
  if (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

