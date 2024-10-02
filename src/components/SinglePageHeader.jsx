import "./SinglePageHeader.css";
import { Link } from "react-router-dom";

const SinglePageHeader = () => {
  return (
    <div className="container-fluid page-header py-5">
      <h1 className="text-center text-white display-6">Cart</h1>
      <ol className="breadcrumb justify-content-center mb-0">
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/cart">Cart</Link>
        </li>
        <li className="breadcrumb-item active text-white">Cart</li>
      </ol>
    </div>
  );
};

export default SinglePageHeader;
