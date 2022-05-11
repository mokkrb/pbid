import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import resolvers from './resolvers';
import typeDefs from './typeDefs';
import { connectToDatabase } from './connectDb';

connectToDatabase();

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

process.on('SIGTERM', async () => {
  await server.stop();
  await mongoose.connection.close();
  process.exit(0);
});
