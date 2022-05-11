import React, { useState } from 'react';
import Error from '../Error';
import './style.css';

interface UrlFormProps {
  submitUrl: (url: string) => void;
}

const UrlForm = (props: UrlFormProps): JSX.Element => {
  const [url, setUrl] = useState<string>('');
  const [error, setError] = useState<string>('');
  const { submitUrl } = props;

  const handleUrlChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setUrl(e.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    setError('');
    if (url === '') {
      setError('Please set a url!');
      return;
    }
    
    if (!/^(http|https):\/\/[^ "]+$/.test(url)) {
      setError('Please enter a valid url (starting with http:// or https://)');
      return;
    }
    submitUrl(url);
  };

  return (
    <div data-testid="urlForm">
      <form onSubmit={handleSubmit}>
        <h2>Minify your URL!</h2>
        <input data-testid="urlFormInput" type="text" value={url} onChange={handleUrlChange} />
        {error !== '' && <Error message={error} />}
        <button type="submit">Shorten Me!</button>
      </form>
    </div>
  );
};

export default UrlForm;
