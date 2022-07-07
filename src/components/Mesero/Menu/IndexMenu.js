/*import ViewMesero from './ViewMesero.js'*/
import MenuOverview from "./MenuOverview.js";
//import BreakfastOverview from "./Breakfast/BreakfastOverview.js";
import { CartProvider } from "react-use-cart";

const IndexMenu =() => {
  return (
    <div>
      <CartProvider>
        <MenuOverview />
      </CartProvider>
    </div>
  );
}
export default IndexMenu;