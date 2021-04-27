import { render, screen } from '@testing-library/react';
import Input from './Input';

test('renders component', () => {
  const { container: component } = render(<Input/>);
  expect(component.getElementsByClassName('input-wrapper').length).toBe(1);
});

test('renders component with validation ok', () => {
  const mockOkInputProps = {
    value: 'random',
    validations: [ 'required '],
    onChange: () => null
  };
  const { container: component } = render(<Input {...mockOkInputProps} />);
  expect(component.getElementsByClassName('input-wrapper').length).toBe(1);
  expect(component.getElementsByClassName('form-group-error').length).toBe(0);
});

test('renders component with validation error', () => {
  const mockErrorInputProps = {
    value: '',
    validations: [
      { type: 'required', error: 'Dummy error text' }
    ],
    onChange: () => null
  };
  const { container: component } = render(<Input {...mockErrorInputProps} />);
  expect(component.getElementsByClassName('input-wrapper').length).toBe(1);
  expect(component.getElementsByClassName('form-group-error').length).toBe(1);
  expect(screen.getByText('Dummy error text')).toBeInTheDocument();
});
