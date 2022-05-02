import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome1 from './Welcome1';

test('Renders Welcome1 component', () => {
    render(<Welcome1 />);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toBeInTheDocument();
    const textElement = screen.getByText('Welcome!');
    expect(textElement).toBeInTheDocument();
    const buttonElement = screen.getAllByRole('button');
    expect(buttonElement.length).toBe(1);
});
