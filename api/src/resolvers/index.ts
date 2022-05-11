import { Resolvers } from '../types/generated-gql';
import { getUrls, createUrl } from '../services';

const resolvers: Resolvers = {
  Query: {
    getUrls,
  },
  Mutation: {
    createUrl: (_, { url }) => createUrl(url),
  },
};

export default resolvers;
