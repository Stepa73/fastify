import { FastifyPluginAsync } from 'fastify';
import UserModel from '../model/UserModel';

const userController: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.get('/', async (req, reply) => {
    const authors = await UserModel.find();

    reply
      .code(200)
      .send({ authors });
  });

  fastify.post('/create', async (req, reply) => {
    const { age, name } = req.body as unknown as {age: number, name: string};

    const user = new UserModel({ age, name });
    await user.save();

    reply
      .code(201)
      .send(user);
  });
};

export default userController;
