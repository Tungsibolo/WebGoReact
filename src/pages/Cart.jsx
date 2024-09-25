import CartPage from "../components/CartPage";
import SinglePageHeader from "../components/SinglePageHeader";

function Cart() {
  return (
    <>
      <div className="cart">
        <SinglePageHeader />
        <CartPage />
      </div>
    </>
  );
}

export default Cart;
