import { render, screen } from '@testing-library/react';
import Testimonials from './index';
import mockData from './mock';

describe('Testimonials', () => {
  test('renderiza el título principal', () => {
    render(<Testimonials />);
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument();
  });

  test('renderiza todas las tarjetas de testimonios', () => {
    render(<Testimonials />);
    const cards = screen.getAllByText(/Rating:/i);
    expect(cards.length).toBe(mockData.length);
  });

  test('renderiza nombre e imagen en cada tarjeta', () => {
    render(<Testimonials />);

    mockData.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      const images = screen.getAllByAltText(/profile/i);
      expect(images.length).toBeGreaterThan(0);
      expect(screen.getByText(item.review)).toBeInTheDocument();
    });
  });
});
