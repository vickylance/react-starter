import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

describe('render button', () => {
  it('shows the text in the button', () => {
    const testMessage = 'Test Message';
    const { getByText } = render(<Button text={testMessage} />);
    expect(getByText(testMessage)).toBeInTheDocument();
  });
});
