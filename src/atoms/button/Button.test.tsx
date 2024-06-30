import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom/vitest';
import Button from './Button';

describe(Button, () => {
  it('should render with initial value of 0', () => {
    const { container } = render(<Button />);
    expect(container.querySelector('p')?.textContent).toBe('Count: 0');
  });
});
