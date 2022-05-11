import { gql } from '@apollo/client';
import { Url } from '../types';

export interface UrlsResponse {
  createUrl: Url;
}

export const CREATE_URL = gql`
  mutation CREATE_URL($url: String!) {
    createUrl(url: $url) {
      _id
      minifiedUrl
      originalUrl
    }
  }
`;
