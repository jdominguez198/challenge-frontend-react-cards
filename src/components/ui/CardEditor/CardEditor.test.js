import { render, screen } from '@testing-library/react';
import CardEditor from './CardEditor';

const mockCard = {
  id: 'random',
  name: 'random',
  imgUrl: 'random',
  userCount: 0
};

test('renders component', () => {
  const { container: component } = render(<CardEditor card={mockCard} />);
  expect(component.getElementsByClassName('card-editor').length).toBe(1);
});

test('renders component with dummy card', () => {
  const { container: component } = render(<CardEditor card={mockCard} />);
  expect(screen.getByPlaceholderText(/Type a Card name/)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Type a Card name/).getAttribute('value')).toEqual(mockCard.name);
  expect(screen.getByPlaceholderText(/Type a Image url/)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Type a Image url/).getAttribute('value')).toEqual(mockCard.name);
});

test('renders component with dummy card and success field validations', () => {
  const { container: component } = render(<CardEditor card={mockCard} />);
  expect(screen.getByText(/The url introduced is wrong./)).toBeInTheDocument();
});
