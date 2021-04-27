import { BrowserRouter as Router } from 'react-router-dom';
import {fireEvent, render, screen} from '@testing-library/react';
import Header from './Header';

test('renders navigation links', () => {
  const { container: component } = render(<Router><Header /></Router>);
  expect(component.getElementsByClassName('header-navigation-item').length).toBe(2);
});

test('renders collapsed menu by default', () => {
  const { container: component } = render(<Router><Header /></Router>);
  expect(component.getElementsByClassName('header-navigation__open').length).toBe(0);
});

test('extend menu by clicking on toggle', () => {
  const { container: component } = render(<Router><Header /></Router>);
  const burgerMenu = component.getElementsByClassName('header-burger');
  const navigation = component.getElementsByClassName('header-navigation');

  fireEvent.click(burgerMenu[0]);

  expect(burgerMenu.length).toBe(1);
  expect(navigation.length).toBe(1);
  expect(burgerMenu[0]).toContainHTML('header-burger__open');
  expect(navigation[0]).toContainHTML('header-navigation__open');
});
