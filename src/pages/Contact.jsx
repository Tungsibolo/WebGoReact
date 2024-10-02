import { Link } from "react-router-dom";
import BodyContact from "../components/BodyContact";
function Contact() {
  return (
    <>
      <div className="cart">
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Contact</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="breadcrumb-item active text-white">Contact</li>
          </ol>
        </div>
      </div>
      <BodyContact />
    </>
  );
}

export default Contact;
