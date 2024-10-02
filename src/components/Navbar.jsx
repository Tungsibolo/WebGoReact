import { useEffect } from "react";
import "../App";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Navbar = (props) => {
  const logout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    props.setName("");
  };
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".fixed-top");

      if (window.innerWidth < 992) {
        if (window.scrollY > 55) {
          navbar.classList.add("shadow");
        } else {
          navbar.classList.remove("shadow");
        }
      } else {
        if (window.scrollY > 55) {
          navbar.classList.add("shadow");
          navbar.style.top = "-55px";
        } else {
          navbar.classList.remove("shadow");
          navbar.style.top = "0";
        }
      }
    };

    // Lắng nghe sự kiện cuộn (scroll)
    window.addEventListener("scroll", handleScroll);

    // Dọn dẹp sự kiện khi component bị unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Mảng rỗng [] để đảm bảo sự kiện chỉ được gán một lần

  let dropdown;
  console.log("Navbar props.name: out ", props.name);

  if (props.name === "") {
    console.log("Current name in Navbar if:", props.name);
    dropdown = (
      <Link to="/login" className="my-auto">
        <i className="fas fa-user fa-2x" style={{ color: "#81c408" }}></i>
      </Link>
    );
  } else {
    console.log("Current name in Navbar else :", props.name);
    dropdown = (
      <div className="nav-item dropdown">
        <i
          href="#"
          className="nav-link dropdown-toggle fas fa-user fa-2x"
          style={{ color: "#81c408" }}
          data-bs-toggle="dropdown"
        ></i>
        <div className="dropdown-menu m-0 bg-secondary rounded-0">
          <Link to="/" className="dropdown-item">
            My profile
          </Link>
          <Link to="/login" className="dropdown-item" onClick={logout}>
            Log out
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid fixed-top">
      <div className="container topbar bg-primary d-none d-lg-block">
        <div className="d-flex justify-content-between">
          <div className="top-info ps-2">
            <small className="me-3">
              <i className="fas fa-map-marker-alt me-2 text-secondary"></i>
              <a href="#" className="text-white">
                123 Street, New York
              </a>
            </small>
            <small className="me-3">
              <i className="fas fa-envelope me-2 text-secondary"></i>
              <a href="#" className="text-white">
                Email@Example.com
              </a>
            </small>
          </div>
          <div className="top-link pe-2">
            <a href="#" className="text-white">
              <small className="text-white mx-2">Privacy Policy</small>/
            </a>
            <a href="#" className="text-white">
              <small className="text-white mx-2">Terms of Use</small>/
            </a>
            <a href="#" className="text-white">
              <small className="text-white ms-2">Sales and Refunds</small>
            </a>
          </div>
        </div>
      </div>
      <div className="container px-0">
        <nav className="navbar navbar-light bg-white navbar-expand-xl">
          <Link to="/" className="navbar-brand">
            <h1 className="text-primary display-6">Fruitables</h1>
          </Link>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-white"
            id="navbarCollapse"
          >
            <div className="navbar-nav mx-auto">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/shop" className="nav-item nav-link">
                Shop
              </Link>
              <Link to="/shopdetail" className="nav-item nav-link">
                Shop Detail
              </Link>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu m-0 bg-secondary rounded-0">
                  <Link to="/cart" className="dropdown-item">
                    Cart
                  </Link>
                  <Link to="/checkout" className="dropdown-item">
                    Checkout
                  </Link>
                </div>
              </div>
              <Link to="/contact" className="nav-item nav-link">
                Contact
              </Link>
            </div>
            <div className="d-flex m-3 me-0">
              <button
                className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i className="fas fa-search text-primary"></i>
              </button>
              <Link to="/cart" className="position-relative me-4 my-auto">
                <i
                  className="fa fa-shopping-bag fa-2x"
                  style={{ color: "#81c408" }}
                ></i>
                <span
                  className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                  style={{
                    top: "-5px",
                    left: "15px",
                    height: "20px",
                    minWidth: "20px",
                  }}
                >
                  0
                </span>
              </Link>
              {dropdown}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  name: PropTypes.string, // Xác định kiểu string và bắt buộc
  setName: PropTypes.func, // Xác định kiểu function và bắt buộc
};

export default Navbar;
