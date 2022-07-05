import ViewMesero from './ViewMesero.js'
import BreakfastOverview from "./BreakfastOverview.js";
import { CartProvider } from "react-use-cart";

const Index =() => {
  return (
    <div>
      <CartProvider>
        <ViewMesero />
        <BreakfastOverview />
      </CartProvider>
    </div>
  );
}
export default Index;