//import BreakfastOverview from "./Breakfast/BreakfastOverview.js";
import BreakfastOverview from "../Breakfast/BreakfastOverview.js";
import { CartProvider } from "react-use-cart";

const IndexBreakfast =() => {
  return (
    <div>
      <CartProvider>
        <BreakfastOverview />
      </CartProvider>
    </div>
  );
}
export default IndexBreakfast;