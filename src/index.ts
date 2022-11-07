import fastify from 'fastify';
import mongoose from 'mongoose';
import UserController from './controller/UserController';

/** Connect to mongoDB */
mongoose.connect('mongodb://root:root@mongo:27017/?authSource=admin&readPreference=primary&directConnection=true&ssl=false');

/** Starting HTTP server */
const server = fastify();

server.listen({ port: 8080, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening ${address}`);
});

/** Registering all controllers */
server.register(UserController, { prefix: '/user' });
