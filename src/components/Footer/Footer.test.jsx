import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './index';

describe('Footer', () => {
  test('renderiza el footer con secciones y navegación', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(screen.getByAltText(/restaurant/i)).toBeInTheDocument();

    expect(screen.getByText(/Doormat Navigation/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
    expect(screen.getByText(/Social Media Links/i)).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /facebook/i })).toHaveAttribute('href', 'https://www.facebook.com');
    expect(screen.getByRole('link', { name: /instagram/i })).toHaveAttribute('href', 'https://www.instagram.com/');
    expect(screen.getByRole('link', { name: /^x$/i })).toHaveAttribute('href', 'https://x.com/');
  });
});
