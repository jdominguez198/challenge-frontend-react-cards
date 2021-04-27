import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Filter from './Filter';

const middlewares = []
const mockStore = configureStore(middlewares);

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: ''
  })
}));

test('renders component with empty search term', () => {
  const initialState = {
    cardState: {
      filter: ''
    }
  }
  const store = mockStore(initialState)

  const { container: component } = render(<Provider store={store}><Filter/></Provider>);
  expect(component.getElementsByClassName('filter').length).toBe(1);
});

test('renders component with a search term', () => {
  const randomSearchTerm = 'random';
  const initialState = {
    cardState: {
      filter: randomSearchTerm
    }
  }
  const store = mockStore(initialState)

  const { container: component } = render(<Provider store={store}><Filter/></Provider>);
  expect(component.getElementsByClassName('filter').length).toBe(1);
  expect(component.getElementsByClassName('filter-button').length).toBe(1);
  expect(screen.getByPlaceholderText(/Type a name to search.../).getAttribute('value')).toEqual(randomSearchTerm);
});
