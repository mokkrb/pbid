import React from 'react';
import UrlItem from '../UrlItem';
import { Url } from '../../types';

interface MinifiedUrlsProps {
  urls: Url[];
}

const MinifiedUrls = ({ urls }: MinifiedUrlsProps): JSX.Element => {
  return (
    <div data-testid="minifiedUrls">
      <ul>
        {urls.map((url) => (
          <li key={url.originalUrl}>
            <UrlItem url={url} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MinifiedUrls;
