import { useState } from "react";
import ProductTable from "./ProductTable";

const BillingForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    city: "",
    country: "",
    postcode: "",
    mobile: "",
    email: "",
    createAccount: false,
    shipToDifferentAddress: false,
    orderNotes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="mb-4">Billing details</h1>
        <form>
          <div className="row g-5">
            <div className="col-md-12 col-lg-6 col-xl-7">
              <div className="row">
                <div className="col-md-12 col-lg-6">
                  <div className="form-item w-100">
                    <label className="form-label my-3">
                      First Name<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-6">
                  <div className="form-item w-100">
                    <label className="form-label my-3">
                      Last Name<sup>*</sup>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Company Name<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="companyName"
                  className="form-control"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Address<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="House Number Street Name"
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Town/City<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Country<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="country"
                  className="form-control"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Postcode/Zip<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="postcode"
                  className="form-control"
                  value={formData.postcode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Mobile<sup>*</sup>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  className="form-control"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item">
                <label className="form-label my-3">
                  Email Address<sup>*</sup>
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-check my-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Account-1"
                  name="createAccount"
                  checked={formData.createAccount}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="Account-1">
                  Create an account?
                </label>
              </div>
              <hr />
              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="Address-1"
                  name="shipToDifferentAddress"
                  checked={formData.shipToDifferentAddress}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="Address-1">
                  Ship to a different address?
                </label>
              </div>
              <div className="form-item">
                <textarea
                  name="orderNotes"
                  className="form-control"
                  spellCheck="false"
                  cols="30"
                  rows="11"
                  value={formData.orderNotes}
                  onChange={handleChange}
                  placeholder="Order Notes (Optional)"
                />
              </div>
            </div>
            {/* Insert ProductTable component here */}
            <ProductTable />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BillingForm;
