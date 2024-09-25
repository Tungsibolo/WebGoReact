import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useRef } from "react";

const VegetableShop = () => {
  const carouselRef = useRef(null);
  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next(); // Gọi hàm next từ ref
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev(); // Gọi hàm prev từ ref
    }
  };
  const options = {
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      <i key="left" className="bi bi-arrow-left"></i>,
      <i key="right" className="bi bi-arrow-right"></i>,
    ],
    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 },
    },
  };

  return (
    <div className="container-fluid vesitable py-5">
      <div className="container py-5">
        <h1 className="mb-0">Fresh Organic Vegetables</h1>
        <OwlCarousel
          ref={carouselRef}
          className="owl-carousel vegetable-carousel justify-content-center owl-loaded owl-drag "
          {...options}
        >
          <div className="owl-stage-outer">
            <div
              className="owl-stage"
              style={{
                transform: "translate3d(-2972px, 0px, 0px)",
                transition: "1.5s",
                width: "5284px",
              }}
            >
              <div
                className="owl-item cloned"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-5.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Potatoes</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-6.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Parsely</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-5.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Potatoes</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-6.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Parsely</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-6.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Parsely</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-1.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Parsely</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-3.png"
                      className="img-fluid w-100 rounded-top bg-light"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Banana</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-4.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Bell Papper</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-5.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Potatoes</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-6.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Parsely</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-5.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Potatoes</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item active"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-6.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Parsely</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned active"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-6.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Parsely</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-1.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Parsely</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-3.png"
                      className="img-fluid w-100 rounded-top bg-light"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Banana</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="owl-item cloned"
                style={{ width: "305.25px", marginRight: "25px" }}
              >
                <div className="border border-primary rounded position-relative vesitable-item">
                  <div className="vesitable-img">
                    <img
                      src="img/vegetable-item-4.jpg"
                      className="img-fluid w-100 rounded-top"
                      alt=""
                    />
                  </div>
                  <div
                    className="text-white bg-primary px-3 py-1 rounded position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  >
                    Vegetable
                  </div>
                  <div className="p-4 rounded-bottom">
                    <h4>Bell Papper</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                      sed do eiusmod te incididunt
                    </p>
                    <div className="d-flex justify-content-between flex-lg-wrap">
                      <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                      <a
                        href="#"
                        className="btn border border-secondary rounded-pill px-3 text-primary"
                      >
                        <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <div className="owl-prev" onClick={handlePrev}>
              <i className="bi bi-arrow-left"></i>
            </div>
            <div className="owl-next" onClick={handleNext}>
              <i className="bi bi-arrow-right"></i>
            </div>
          </div>
          <div className="owl-dots">
            <div className="owl-dot">
              <span></span>
            </div>
            <div className="owl-dot active">
              <span></span>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default VegetableShop;
