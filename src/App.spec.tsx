import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Render App component', () => {
  render(<App />);
  const headerElement = screen.getByRole('heading');
  expect(headerElement).toBeInTheDocument();
  const textElement = screen.getByText('Bluebeam Assessment!');
  expect(textElement).toBeInTheDocument();
  const buttonElement = screen.getAllByRole('button');
  expect(buttonElement.length).toBe(2);
});
