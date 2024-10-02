import BodyShop from "../components/BodyShop";
import { Link } from "react-router-dom";
function Shop() {
  return (
    <>
      <div className="cart">
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Shop</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="breadcrumb-item active text-white">Shop</li>
          </ol>
        </div>
      </div>
      <BodyShop />
    </>
  );
}

export default Shop;
