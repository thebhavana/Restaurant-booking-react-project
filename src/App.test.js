// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders restaurant booking heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/restaurant booking/i);
  expect(headingElement).toBeInTheDocument();
});
