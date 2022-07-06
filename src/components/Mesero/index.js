/*import ViewMesero from './ViewMesero.js'*/
//import MenuOverview from "./Menu/MenuOverview.js";
import BreakfastOverview from "./Breakfast/BreakfastOverview.js";
import { CartProvider } from "react-use-cart";

const Index =() => {
  return (
    <div>
      <CartProvider>
        <BreakfastOverview />
      </CartProvider>
    </div>
  );
}
export default Index;