import { gql } from 'apollo-server-express';

const Mutation = gql`
  type Url {
    _id: String!
    minifiedUrl: String!
    originalUrl: String!
  }
  type Mutation {
    createUrl(url: String!): Url
  }
`;

export default Mutation;
