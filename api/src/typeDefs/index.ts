import { mergeTypeDefs } from '@graphql-tools/merge';
import Query from './Query.gql';
import Mutation from './Mutation.gql';

const typeDefs = [Query, Mutation];

export default mergeTypeDefs(typeDefs);