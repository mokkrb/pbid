import React from 'react';
import { render, screen } from '@testing-library/react';
import MinifiedUrls from './';

const minifiedUrls = [
  {
    id: '123',
    minifiedUrl: 'https://pbid.io/12345678',
    originalUrl: 'https://www.foo.bar',
  },
  {
    id: '321',
    minifiedUrl: 'https://pbid.io/87654321',
    originalUrl: 'https://www.bar.baz',
  },
];

describe('MinifiedUrls', () => {
  it('should render', () => {
    render(<MinifiedUrls urls={minifiedUrls} />);
    expect(screen.getByTestId('minifiedUrls')).toMatchSnapshot();
  });

  it('should handle an empty list', () => {
    render(<MinifiedUrls urls={[]} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  it('should display a list of one url', () => {
    render(<MinifiedUrls urls={[minifiedUrls[0]]} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(1);
  });

  it('should display a list of multiple urls', () => {
    render(<MinifiedUrls urls={minifiedUrls} />);
    expect(screen.queryAllByRole('listitem')).toHaveLength(2);
  });
});
