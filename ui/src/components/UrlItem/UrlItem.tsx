import React from 'react';
import { Url } from '../../types';
import './style.css';

const UrlItem = ({ url }: { url: Url }): JSX.Element => {
  return (
    <div className="urlItem">
      <span className="originalUrl">{url.originalUrl}:</span>{' '}
      <a target="_blank" rel="noreferrer" href={url.minifiedUrl} className="minifiedUrl">
        {url.minifiedUrl}
      </a>
    </div>
  );
};

export default UrlItem;
