import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from '../context/FavoritesContext';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  test('renders brand name', () => {
    render(
      <BrowserRouter>
        <FavoritesProvider>
          <Navbar />
        </FavoritesProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('🍽️ Recipe Ideas')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <BrowserRouter>
        <FavoritesProvider>
          <Navbar />
        </FavoritesProvider>
      </BrowserRouter>
    );

    expect(screen.getByRole('link', { name: /Home/ })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Search/ })).toBeInTheDocument();
  });

  test('displays favorites count', () => {
    render(
      <BrowserRouter>
        <FavoritesProvider>
          <Navbar />
        </FavoritesProvider>
      </BrowserRouter>
    );

    expect(screen.getByText('Favorites (0)')).toBeInTheDocument();
  });
});