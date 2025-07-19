import { render, screen } from '@testing-library/react';
import About from './index';

jest.mock('../../../../components/Card/Hero/heroCard', () => ({ className }) => (
  <div data-testid="hero-card" className={className}>HeroCard</div>
));

describe('About', () => {
  test('renderiza el HeroCard con la clase adecuada', () => {
    render(<About />);
    const heroCard = screen.getByTestId('hero-card');
    expect(heroCard).toBeInTheDocument();
    expect(heroCard).toHaveClass('app-about');
  });

  test('renderiza la primera imagen con alt="food1"', () => {
    render(<About />);
    const img1 = screen.getByAltText('food1');
    expect(img1).toBeInTheDocument();
    expect(img1).toHaveClass('app-about__image1');
  });

  test('renderiza la segunda imagen con alt="food2"', () => {
    render(<About />);
    const img2 = screen.getByAltText('food2');
    expect(img2).toBeInTheDocument();
    expect(img2).toHaveClass('app-about__image2');
  });
});
