import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const content = await response.json();
    if (response.ok) {
      // Đăng nhập thành công
      setRedirect(true);
      props.setName(content.name);
    } else {
      // Xử lý lỗi đăng nhập từ backend
      if (response.status === 404) {
        alert(content.message || "Người dùng không tồn tại.");
      } else if (response.status === 400) {
        alert(content.message || "Mật khẩu không chính xác.");
      } else {
        alert("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
      }
    }
  };

  useEffect(() => {
    if (redirect) {
      navigate("/");
    }
  }, [redirect, navigate]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <form className="col-12 col-md-6">
        {/* Tiêu đề */}
        <h1
          className="text-center mb-4"
          style={{
            marginTop: "100px", // Điều chỉnh khoảng cách trên tiêu đề
            color: "#81c408", // Màu sắc cho tiêu đề
          }}
        >
          Log in
        </h1>

        {/* Email input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example1">
            Email
          </label>
          <input
            type="tel"
            id="form2Example1"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password input */}
        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
          <input
            type="password"
            id="form2Example2"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="form2Example31"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label className="form-check-label" htmlFor="form2Example31">
                Remember me
              </label>
            </div>
          </div>

          <div className="col text-end">
            {/* Simple link */}
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="btn btn-primary btn-block mb-4 w-100"
          onClick={handleSignIn}
        >
          Sign in
        </button>

        {/* Register buttons */}
        <div className="text-center">
          <p>
            Not a member? <Link to="/register">Register</Link>
          </p>
          <p>or sign up with:</p>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setName: PropTypes.func, // Xác định kiểu function và bắt buộc
};

export default Login;
