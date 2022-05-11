import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './';

describe('MinifiedUrls', () => {
  it('should render', () => {
    render(<Error message={'this is an error'} />);
    expect(screen.getByTestId('error')).toMatchSnapshot();
  });
});
