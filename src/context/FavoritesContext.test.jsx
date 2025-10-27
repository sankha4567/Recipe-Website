import { render, screen, fireEvent } from '@testing-library/react';
import { FavoritesProvider, useFavorites } from './FavoritesContext';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('FavoritesContext', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  test('provides favorites context', () => {
    const TestComponent = () => {
      const { favorites } = useFavorites();
      return <div>Favorites: {favorites.length}</div>;
    };

    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    expect(screen.getByText('Favorites: 0')).toBeInTheDocument();
  });

  test('loads favorites from localStorage on mount', () => {
    const mockFavorites = [{ idMeal: '1', strMeal: 'Test Meal' }];
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockFavorites));

    const TestComponent = () => {
      const { favorites } = useFavorites();
      return <div>Favorites: {favorites.length}</div>;
    };

    render(
      <FavoritesProvider>
        <TestComponent />
      </FavoritesProvider>
    );

    expect(localStorageMock.getItem).toHaveBeenCalledWith('favorites');
    expect(screen.getByText('Favorites: 1')).toBeInTheDocument();
  });
});