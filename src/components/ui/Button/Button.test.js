import { render, screen } from '@testing-library/react';
import Button from './Button';

test('renders component', () => {
  const { container: component } = render(<Button />);
  expect(component.getElementsByClassName('button').length).toBe(1);
});

test('renders component with inner text', () => {
  const { container: component } = render(<Button>Dummy text</Button>);
  expect(screen.getByText(/Dummy text/)).toBeInTheDocument();
});
