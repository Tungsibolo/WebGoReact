import { useState } from "react";
const ProductTable = () => {
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const products = [
    {
      name: "Awesome Broccoli",
      price: 69,
      quantity: 2,
      total: 138,
      image: "img/vegetable-item-2.jpg",
    },
    {
      name: "Potatoes",
      price: 69,
      quantity: 2,
      total: 138,
      image: "img/vegetable-item-5.jpg",
    },
    {
      name: "Big Banana",
      price: 69,
      quantity: 2,
      total: 138,
      image: "img/vegetable-item-3.png",
    },
  ];

  return (
    <div className="col-md-12 col-lg-6 col-xl-5">
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <th scope="row">
                  <div className="d-flex align-items-center mt-2">
                    <img
                      src={product.image}
                      className="img-fluid rounded-circle"
                      style={{ width: "90px", height: "90px" }}
                      alt=""
                    />
                  </div>
                </th>
                <td className="py-5">{product.name}</td>
                <td className="py-5">${product.price.toFixed(2)}</td>
                <td className="py-5">{product.quantity}</td>
                <td className="py-5">${product.total.toFixed(2)}</td>
              </tr>
            ))}
            <tr>
              <th scope="row"></th>
              <td className="py-5"></td>
              <td className="py-5"></td>
              <td className="py-5">
                <p className="mb-0 text-dark py-3">Subtotal</p>
              </td>
              <td className="py-5">
                <div className="py-3 border-bottom border-top">
                  <p className="mb-0 text-dark">$414.00</p>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td className="py-5">
                <p className="mb-0 text-dark py-4">Shipping</p>
              </td>
              <td colSpan="3" className="py-5">
                <div className="form-check text-start">
                  <input
                    type="checkbox"
                    className="form-check-input bg-primary border-0"
                    id="Shipping-1"
                  />
                  <label className="form-check-label" htmlFor="Shipping-1">
                    Free Shipping
                  </label>
                </div>
                <div className="form-check text-start">
                  <input
                    type="checkbox"
                    className="form-check-input bg-primary border-0"
                    id="Shipping-2"
                  />
                  <label className="form-check-label" htmlFor="Shipping-2">
                    Flat rate: $15.00
                  </label>
                </div>
                <div className="form-check text-start">
                  <input
                    type="checkbox"
                    className="form-check-input bg-primary border-0"
                    id="Shipping-3"
                  />
                  <label className="form-check-label" htmlFor="Shipping-3">
                    Local Pickup: $8.00
                  </label>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row"></th>
              <td className="py-5">
                <p className="mb-0 text-dark text-uppercase py-3">TOTAL</p>
              </td>
              <td className="py-5"></td>
              <td className="py-5"></td>
              <td className="py-5">
                <div className="py-3 border-bottom border-top">
                  <p className="mb-0 text-dark">$135.00</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Payment options */}
      <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
        <div className="col-12">
          <div className="form-check text-start my-3">
            <input
              type="checkbox"
              className="form-check-input bg-primary border-0"
              id="Transfer-1"
              name="Transfer"
              value="Transfer"
              checked={selectedPayment === "Transfer"}
              onChange={handlePaymentChange}
            />
            <label className="form-check-label" htmlFor="Transfer-1">
              Direct Bank Transfer
            </label>
          </div>
          <p className="text-start text-dark">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>
        </div>
      </div>
      <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
        <div className="col-12">
          <div className="form-check text-start my-3">
            <input
              type="checkbox"
              className="form-check-input bg-primary border-0"
              id="Payments-1"
              name="Payments"
              value="Payments"
              checked={selectedPayment === "Payments"}
              onChange={handlePaymentChange}
            />
            <label className="form-check-label" htmlFor="Payments-1">
              Check Payments
            </label>
          </div>
        </div>
      </div>
      <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
        <div className="col-12">
          <div className="form-check text-start my-3">
            <input
              type="checkbox"
              className="form-check-input bg-primary border-0"
              id="Delivery-1"
              name="Delivery"
              value="Delivery"
              checked={selectedPayment === "Delivery"}
              onChange={handlePaymentChange}
            />
            <label className="form-check-label" htmlFor="Delivery-1">
              Cash On Delivery
            </label>
          </div>
        </div>
      </div>
      <div className="row g-4 text-center align-items-center justify-content-center border-bottom py-3">
        <div className="col-12">
          <div className="form-check text-start my-3">
            <input
              type="checkbox"
              className="form-check-input bg-primary border-0"
              id="Paypal-1"
              name="Paypal"
              value="Paypal"
              checked={selectedPayment === "Paypal"}
              onChange={handlePaymentChange}
            />
            <label className="form-check-label" htmlFor="Paypal-1">
              Paypal
            </label>
          </div>
        </div>
      </div>
      <div className="row g-4 text-center align-items-center justify-content-center pt-4">
        <button
          type="button"
          className="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
          onClick={() => alert(`You selected: ${selectedPayment}`)}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default ProductTable;
