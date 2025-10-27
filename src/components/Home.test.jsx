import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';

describe('Home Component', () => {
  test('renders welcome message', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText('🍳 Welcome to Recipe Ideas')).toBeInTheDocument();
  });

  test('renders description text', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText(/Discover delicious meals/)).toBeInTheDocument();
  });

  test('renders Get Started button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const button = screen.getByRole('link', { name: /Get Started/ });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/search');
  });
});