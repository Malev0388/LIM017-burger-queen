import { render, screen } from '@testing-library/react';
import BreakfastOverview from '../src/components/Mesero/Breakfast/BreakfastOverview.js';

test('renders learn react link', () => {
  render(<BreakfastOverview />);
  screen.debug()
  const linkElement = screen.getByText(/DESAYUNO/i);
  expect(linkElement).toBeInTheDocument();
});