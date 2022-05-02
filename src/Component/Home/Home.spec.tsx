import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test('Renders Home component', () => {
    render(<Home />);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toBeInTheDocument();
    const textElement = screen.getByText('Bluebeam Assessment!');
    expect(textElement).toBeInTheDocument();
    const buttonElement = screen.getAllByRole('button');
    expect(buttonElement.length).toBe(2);
});
