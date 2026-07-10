import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Citadel brand mark', () => {
  render(<App />);
  const brand = screen.getAllByText(/Citadel/i)[0];
  expect(brand).toBeInTheDocument();
});
