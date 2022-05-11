import { Url } from '../types/generated-gql';
import {
  getUrlFromOriginalValue as getMongoUrlFromOriginalValue,
  createUrl as createMongoUrl,
  getUrls as getMongoUrls,
} from '../repositories/mongo';
import { minifyUrl } from '../utils/minifier'

export const getUrls = async (): Promise<Url[]> => {
  try {
    return getMongoUrls();
  } catch (e: any) {
    throw new Error(e);
  }
};

export const createUrl = async (originalUrl: string): Promise<Url | null> => {
  const existingUrl = await getMongoUrlFromOriginalValue(originalUrl);
  if (existingUrl) {
    return existingUrl;
  }
  const minifiedUrl = minifyUrl();
  const newUrl = {
    minifiedUrl,
    originalUrl,
  };
  return createMongoUrl(newUrl);
};
