import { gql } from 'apollo-server-express';

const Query = gql`
  type Url {
    _id: String!
    minifiedUrl: String!
    originalUrl: String!
  }

  type Query {
    getUrls: [Url]!
  }
`;

export default Query;
