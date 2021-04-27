import { render, screen } from '@testing-library/react';
import Icon from './Icon';

test('renders component', () => {
  const { container: component } = render(<Icon/>);
  expect(component.getElementsByClassName('icon').length).toBe(1);
});

test('renders component with svg and path', () => {
  const { container: component } = render(<Icon icon="times"/>);
  const svg = component.getElementsByClassName('icon');
  expect(svg.length).toBe(1);
  expect(svg[0].children.length).toBe(1);
  expect(svg[0].children[0].tagName).toEqual('path');
});

test('renders component without path on incorrect icon key', () => {
  const { container: component } = render(<Icon icon="random"/>);
  const svg = component.getElementsByClassName('icon');
  expect(svg.length).toBe(1);
  expect(svg[0].children.length).toBe(0);
});
