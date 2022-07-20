/*import IndexBreakfast from '../components/Mesero/Breakfast/IndexBreakfast.js'
import ProductSelection from '../components/Mesero/Breakfast/ProductSelection.js'

describe('[components] - Cart', () => {
  const setup = () => {
    return (
      <IndexBreakfast>
        <ProductSelection />
      </IndexBreakfast>
    );
  };
  test('should render correctly', () => {
    const view = setup();
    expect(view).toMatchSnapshot();
  });
});*/



import {render, screen } from '@testing-library/react';
import ProductSelection from '../components/Mesero/Breakfast/ProductSelection.js'


test('buscamos el input por su placeholder', () => {
  render(<ProductSelection />);
  
  const placeholderClient = screen.getByPlaceholderText(/CLIENTE/i)
  const placeholderTable = screen.getByPlaceholderText(/MESA/i)

  expect(placeholderClient).toBeInTheDocument()
  expect(placeholderTable).toBeInTheDocument()

});

test('buscamos el boton que envia la informacion', () => {
  render(<ProductSelection />);
  const btn = screen.getByText(/ENVIAR/i)
  expect(btn).toBeInTheDocument()
});



