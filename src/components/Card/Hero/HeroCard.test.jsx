import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroCard from './heroCard';

describe('HeroCard', () => {
  test('renderiza con valores por defecto', () => {
    render(
      <MemoryRouter>
        <HeroCard />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /LITTLE LEMON/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Chicago/i })).toBeInTheDocument();
    expect(screen.getByText(/We are a family owned Mediterranean/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Reservations/i })).toHaveAttribute('href', '/Reservations');
  });

  test('renderiza con props personalizados', () => {
    render(
      <MemoryRouter>
        <HeroCard
          title="TEST RESTAURANT"
          subtitle="Montevideo"
          description="Un lugar increíble para disfrutar"
          btnTitle="Hacé tu reserva"
        />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /TEST RESTAURANT/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Montevideo/i })).toBeInTheDocument();
    expect(screen.getByText(/increíble para disfrutar/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /reservations/i })).toBeInTheDocument();
  });
});
