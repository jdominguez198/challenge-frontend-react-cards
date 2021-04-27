import { render, screen } from '@testing-library/react';
import CardsList from './CardsList';

const dummyCardsListProps = {
  cards: [
    {
      id: 'random',
      name: 'Card',
      imgUrl: 'https://via.placeholder.com/600',
      total: 1,
      editHandler: () => {
      },
      deleteHandler: () => {
      }
    }
  ],
  editCardHandler: () => null,
  deleteCardHandler: () => null
};

const dummyCardsListEmptyProps = {
  cards: [],
  editCardHandler: () => null,
  deleteCardHandler: () => null
};

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null
});

test('renders component', () => {
  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  const { container: component } = render(<CardsList {...dummyCardsListProps} />);
  expect(component.getElementsByClassName('cards-list').length).toBe(1);
});

test('renders component with a card', () => {
  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  const { container: component } = render(<CardsList {...dummyCardsListProps} />);
  expect(component.getElementsByClassName('card__waiting').length).toBe(1);
});

test('renders component without cards', () => {
  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  const { container: component } = render(<CardsList {...dummyCardsListEmptyProps} />);
  expect(component.getElementsByClassName('cards-list__empty').length).toBe(1);
});
