import fastify from 'fastify';
import User from './model/User';

const server = fastify();

server.get('/ping', async () => (new User('hi')).name);

server.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening ${address}`);
});
