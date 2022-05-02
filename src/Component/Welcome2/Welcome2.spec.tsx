import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome2 from './Welcome2';

test('Render Welcome2 component', () => {
    render(<Welcome2 />);
    const headerElement = screen.getByRole('heading');
    expect(headerElement).toBeInTheDocument();
    const textElement = screen.getByText('Welcome!');
    expect(textElement).toBeInTheDocument();
    const buttonElement = screen.getAllByRole('button');
    expect(buttonElement.length).toBe(3);
});
