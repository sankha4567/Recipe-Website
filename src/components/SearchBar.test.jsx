import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar Component', () => {
  test('renders input and button', () => {
    const mockOnSearch = vi.fn();
    render(<SearchBar onSearch={mockOnSearch} />);

    expect(screen.getByPlaceholderText(/Search by ingredient/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Search/ })).toBeInTheDocument();
  });

  test('calls onSearch with trimmed input on form submit', async () => {
    const mockOnSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchBar onSearch={mockOnSearch} />);

    const input = screen.getByPlaceholderText(/Search by ingredient/);
    const button = screen.getByRole('button', { name: /Search/ });

    await user.type(input, '  chicken  ');
    await user.click(button);

    expect(mockOnSearch).toHaveBeenCalledWith('chicken');
  });

  test('does not call onSearch with empty input', async () => {
    const mockOnSearch = vi.fn();
    const user = userEvent.setup();

    render(<SearchBar onSearch={mockOnSearch} />);

    const button = screen.getByRole('button', { name: /Search/ });

    await user.click(button);

    expect(mockOnSearch).not.toHaveBeenCalled();
  });
});