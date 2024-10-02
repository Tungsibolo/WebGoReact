import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        phoneNumber,
        email,
        password,
      }),
    });

    setRedirect(true);
  };

  useEffect(() => {
    if (redirect) {
      navigate("/login");
    }
  }, [redirect, navigate]);

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", paddingTop: "100px" }}
    >
      <form className="col-12 col-md-6 bg-light p-4 rounded shadow">
        <h1 className="text-center mb-4" style={{ color: "#333" }}>
          Register
        </h1>

        {/* Name input */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel" // Đặt type là "tel"
            className="form-control"
            value={phoneNumber} // Thay đổi state tương ứng cho số điện thoại
            onChange={(e) => setPhoneNumber(e.target.value)}
            pattern="[0-9]{10}" // Bạn có thể dùng pattern để giới hạn định dạng số điện thoại
            required
          />
        </div>

        {/* Email input */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="btn btn-primary w-100 mb-4"
          onClick={handleRegister}
        >
          Register
        </button>

        <div className="text-center">
          <p>
            Already a member? <Link to="/login">Log In</Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
