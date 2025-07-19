import { render, screen } from '@testing-library/react';
import Hero from './index';

jest.mock('../../../../components/Card/Hero/heroCard', () => () => (
  <div data-testid="hero-card">HeroCard</div>
));

describe('Hero', () => {
  test('renderiza el HeroCard', () => {
    render(<Hero />);
    expect(screen.getByTestId('hero-card')).toBeInTheDocument();
  });

  test('renderiza la imagen con alt="food"', () => {
    render(<Hero />);
    const image = screen.getByAltText('food');
    expect(image).toBeInTheDocument();
    expect(image.tagName).toBe('IMG');
    expect(image.src).toContain('restauranfood');
  });
});
