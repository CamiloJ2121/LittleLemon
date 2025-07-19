import { render, screen } from '@testing-library/react';
import Home from './index';
import { BrowserRouter } from 'react-router-dom';

test.skip('renders learn react link', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Hero/i);
  expect(linkElement).toBeInTheDocument();
});
