import UrlModel from './url';
import { Url } from '../../types/generated-gql';

export const createUrl = async (url: Url): Promise<Url | null> => {
  try {
    return (await UrlModel.create(url)).toObject();
  } catch (e) {
    throw new Error('There was an error creating a new Url object in mongo');
  }
};

export const getUrls = async (): Promise<Url[]> => await UrlModel.find({}).lean().exec();

export const getUrlFromOriginalValue = (originalUrl: string): Promise<Url | null> =>
  UrlModel.findOne({ originalUrl }).lean().exec();
