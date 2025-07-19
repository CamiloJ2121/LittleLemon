import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navigation from './index';

describe('Navigation', () => {
  test('renderiza todos los enlaces de navegación', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const links = [
      { text: 'Home', href: '/' },
      { text: 'About', href: '/About' },
      { text: 'Menu', href: '/Menu' },
      { text: 'Reservations', href: '/Reservations' },
      { text: 'Order online', href: '/Order' },
      { text: 'Login', href: '/Login' },
    ];

    links.forEach(({ text, href }) => {
      const link = screen.getByRole('link', { name: text });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', href);
    });
  });
});
