import { render, screen } from '@testing-library/react';
import Highlights from './index';
import mock from './mock';

jest.mock('../../../../components/Card/Highlights/highlightsCard', () => (props) => (
  <div data-testid="highlight-card">{props.title}</div>
));

describe('Highlights', () => {
  test('renderiza el título por defecto', () => {
    render(<Highlights />);
    expect(screen.getByRole('heading', { name: /This weeks specials!/i })).toBeInTheDocument();
  });

  test('renderiza el botón con el texto por defecto', () => {
    render(<Highlights />);
    expect(screen.getByRole('button', { name: /Online Menu/i })).toBeInTheDocument();
  });

  test('renderiza todas las tarjetas del mock', () => {
    render(<Highlights />);
    const cards = screen.getAllByTestId('highlight-card');
    expect(cards.length).toBe(mock.length);
  });

  test('permite personalizar el título y el texto del botón', () => {
    render(<Highlights title="Especiales" btnTitle="Ver más" />);
    expect(screen.getByRole('heading', { name: /Especiales/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Ver más/i })).toBeInTheDocument();
  });
});
