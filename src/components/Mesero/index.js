/*import ViewMesero from './ViewMesero.js'*/
import BreakfastOverview from "./Breakfast/BreakfastOverview.js";
import { CartProvider } from "react-use-cart";
import MenuOverview from "./Menu/MenuOverview.js"

const Index =() => {
  return (
    <div>
      <CartProvider>
        <BreakfastOverview />
        <MenuOverview />
      </CartProvider>
    </div>
  );
}
export default Index;