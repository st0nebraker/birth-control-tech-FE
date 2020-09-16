import React from 'react';
import { render, getByAltText } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from './App';

describe('App', () => {
  it('should display a login page', () => {
    const { getByText, getByPlaceholderText, getByAltText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const logo = getByAltText('Logo');
    const nameInput = getByPlaceholderText('username')
    const login = getByText('LOGIN');
    
    expect(logo).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(login).toBeInTheDocument();
  });
});
