import { render, screen } from '@testing-library/react';
import HighlightsCard from './highlightsCard';

const mockProps = {
  title: 'Greek Salad',
  price: '$12.99',
  description: 'A fresh salad with feta cheese and olives.',
  footer: 'Order Now',
  src: 'https://example.com/salad.jpg',
};

describe('HighlightsCard', () => {
  test('renderiza todos los textos y la imagen correctamente', () => {
    render(<HighlightsCard {...mockProps} />);

    expect(screen.getByRole('heading', { name: /Greek Salad/i })).toBeInTheDocument();
    expect(screen.getByText('$12.99')).toBeInTheDocument();
    expect(screen.getByText(/A fresh salad/i)).toBeInTheDocument();
    expect(screen.getByText(/Order Now/i)).toBeInTheDocument();

    const img = screen.getByRole('img', { name: /Greek Salad/i });
    expect(img).toHaveAttribute('src', mockProps.src);
  });
});
