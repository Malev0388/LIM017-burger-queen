import MenuOverview from "./MenuOverview.js";
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