import { model, Schema } from 'mongoose';
import { Url } from '../../types/generated-gql';

export const UrlSchema = new Schema<Url>({
  originalUrl: String,
  minifiedUrl: String,
});

const UrlModel = model<Url>('Url', UrlSchema);

export default UrlModel;
