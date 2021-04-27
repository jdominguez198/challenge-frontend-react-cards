import { render, screen } from '@testing-library/react';
import Card from './Card';

const dummyCardProps  = {
  id: 'random',
  name: 'Card',
  imgUrl: 'https://via.placeholder.com/600',
  total: 1,
  editHandler: () => {},
  deleteHandler: () => {}
};

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null
});

test('renders component in waiting mode', () => {
  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  const { container: component } = render(<Card {...dummyCardProps} />);
  expect(component.getElementsByClassName('card__waiting').length).toBe(1);
});

