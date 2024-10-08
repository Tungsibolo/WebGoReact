import BodyShopDetail from "../components/BodyShopDetail";
import { Link } from "react-router-dom";

function ShopDetail() {
  return (
    <>
      <div className="cart">
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Shop Detail</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/cart">Cart</Link>
            </li>

            <li className="breadcrumb-item active text-white">Shop Detail</li>
          </ol>
        </div>
      </div>
      <BodyShopDetail />
    </>
  );
}

export default ShopDetail;
