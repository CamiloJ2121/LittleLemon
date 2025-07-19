import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ReservationForm from './index';
import { fetchAPI, submitAPI } from '../../utils/api';

jest.mock('../../utils/api', () => ({
  fetchAPI: jest.fn(() => ["17:00", "18:00"]),
  submitAPI: jest.fn(() => true)
}));

beforeEach(() => {
  jest.clearAllMocks();
});

test('renderiza todos los campos del formulario', () => {
  render(<ReservationForm />);

  expect(screen.getByLabelText(/Choose date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Choose time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Number of guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Make Your reservation/i })).toBeInTheDocument();
});

test('actualiza el estado cuando cambia el campo date', async () => {
  render(<ReservationForm />);

  const dateInput = screen.getByLabelText(/Choose date/i);
  fireEvent.change(dateInput, { target: { value: '2025-07-20' } });

  await waitFor(() => {
    expect(fetchAPI).toHaveBeenCalled();
  });
});

test('envía el formulario correctamente', () => {
  window.alert = jest.fn();
  render(<ReservationForm />);

  fireEvent.change(screen.getByLabelText(/Choose date/i), { target: { value: '2025-07-20' } });
  fireEvent.change(screen.getByLabelText(/Choose time/i), { target: { value: '17:00' } });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), { target: { value: 2 } });
  fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: 'Anniversary' } });

  fireEvent.click(screen.getByRole('button', { name: /Make Your reservation/i }));

  expect(submitAPI).toHaveBeenCalledWith({
    date: '2025-07-20',
    time: '17:00',
    guests: 2,
    occasion: 'Anniversary'
  });

  expect(window.alert).toHaveBeenCalledWith('Reservation confirmed!');
});
