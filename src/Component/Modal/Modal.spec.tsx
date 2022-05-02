import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

test('Render Modal component', () => {
    render(<Modal modalOpen />);
    const buttonElement = screen.getAllByRole('button');
    expect(buttonElement.length).toBe(3);
});
