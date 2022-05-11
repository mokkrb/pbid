import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UrlForm from './UrlForm';

const submitUrl = jest.fn();

describe('UrlForm', () => {
  it('renders the UrlFormComponent', () => {
    render(<UrlForm submitUrl={submitUrl} />);
    expect(screen.getByTestId('urlForm')).toMatchSnapshot();
  });

  it('should update the input on change', () => {
    render(<UrlForm submitUrl={submitUrl}/>);
    fireEvent.change(screen.getByTestId('urlFormInput'), {
      target: { value: 'http://some.value' },
    });
    expect(screen.getByTestId('urlFormInput').value).toBe('http://some.value');
  });

  it('should display an error when submitting an empty url', () => {
    render(<UrlForm submitUrl={submitUrl}/>);
    fireEvent.click(screen.getByText('Shorten Me!'));
    expect(screen.getByText('Please set a url!')).toBeDefined();
  });

  it('should remove the error when submitting a valid url', () => {
    render(<UrlForm submitUrl={submitUrl}/>);
    fireEvent.click(screen.getByText('Shorten Me!'));
    expect(screen.getByText('Please set a url!')).toBeDefined();
    fireEvent.change(screen.getByTestId('urlFormInput'), {
      target: { value: 'http://some.value' },
    });
    fireEvent.click(screen.getByText('Shorten Me!'));
    expect(screen.queryAllByText('Please set a url!')).toHaveLength(0);
  });

  it('should call `submitUrl` with the url when the form is valid', () => {
    render(<UrlForm submitUrl={submitUrl}/>);
    fireEvent.change(screen.getByTestId('urlFormInput'), {
      target: { value: 'http://some.value' },
    });
    fireEvent.click(screen.getByText('Shorten Me!'));
    expect(submitUrl).toHaveBeenCalledWith('http://some.value');
  });
});
