import React from 'react';
import './style.css';

interface ErrorProps {
  message: string;
}

const Error = ({ message }: ErrorProps): JSX.Element => {
  return <div data-testid="error" className="error">{message}</div>;
};

export default Error;
