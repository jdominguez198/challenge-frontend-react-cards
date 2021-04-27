import { render, screen } from '@testing-library/react';
import Image from './Image';

const dummyImageProps  = {
  src: 'https://via.placeholder.com/600',
  alt: 'random',
  title: 'random',
};

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnect: () => null
});

test('renders component', () => {
  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  const { container: component } = render(<Image {...dummyImageProps} />);
  expect(component.getElementsByClassName('image').length).toBe(1);
});

test('renders component with alt and title', () => {
  window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
  const { container: component } = render(<Image {...dummyImageProps} />);
  expect(component.getElementsByClassName('image').length).toBe(1);
  expect(component.getElementsByClassName('image')[0].getAttribute('alt')).toEqual('random');
  expect(component.getElementsByClassName('image')[0].getAttribute('title')).toEqual('random');
});
