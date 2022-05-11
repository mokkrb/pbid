import { gql } from '@apollo/client';
import { Url } from '../types';

export interface UrlsResponse {
  getUrls: Url[];
}

export const GET_URLS = gql`
  query GET_URLS {
    getUrls {
      _id
      minifiedUrl
      originalUrl
    }
  }
`;
