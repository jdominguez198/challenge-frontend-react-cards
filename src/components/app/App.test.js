import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home with welcome text', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
