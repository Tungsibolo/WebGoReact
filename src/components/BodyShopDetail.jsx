import { useState } from "react";
import OwlCarousel from "react-owl-carousel";
const BodyShopDetail = () => {
  const options = {
    items: 3,
    margin: 10,
    nav: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  const products = [
    {
      imgSrc: "img/vegetable-item-6.jpg",
      title: "Parsely",
      price: "$4.99 / kg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    },
    {
      imgSrc: "img/vegetable-item-1.jpg",
      title: "Parsely",
      price: "$4.99 / kg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    },
    {
      imgSrc: "img/vegetable-item-3.png",
      title: "Banana",
      price: "$7.99 / kg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    },
    {
      imgSrc: "img/vegetable-item-4.jpg",
      title: "Bell Papper",
      price: "$7.99 / kg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    },
    {
      imgSrc: "img/vegetable-item-5.jpg",
      title: "Potatoes",
      price: "$7.99 / kg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
    rating: 0,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (ratingValue) => {
    setFormData({ ...formData, rating: ratingValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý khi submit form
    console.log("Form submitted: ", formData);
  };
  return (
    <div className="container-fluid py-5 mt-5">
      <div className="container py-5">
        <div className="row g-4 mb-5">
          <div className="col-lg-8 col-xl-9">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="border rounded">
                  <a href="#">
                    <img
                      src="img/single-item.jpg"
                      className="img-fluid rounded"
                      alt="Brocoli"
                    />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <h4 className="fw-bold mb-3">Brocoli</h4>
                <p className="mb-3">Category: Vegetables</p>
                <h5 className="fw-bold mb-3">3,35 $</h5>
                <div className="d-flex mb-4">
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <i className="fa fa-star"></i>
                </div>
                <p className="mb-4">
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour, or non-characteristic words etc.
                </p>
                <p className="mb-4">
                  Susp endisse ultricies nisi vel quam suscipit. Sabertooth
                  peacock flounder; chain pickerel hatchetfish, pencilfish
                  snailfish
                </p>
                <div
                  className="input-group quantity mb-5"
                  style={{ width: "100px" }}
                >
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                      <i className="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    className="form-control form-control-sm text-center border-0"
                    value="1"
                    readOnly
                  />
                  <div className="input-group-btn">
                    <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                  to cart
                </a>
              </div>
              <div className="col-lg-12">
                <nav>
                  <div className="nav nav-tabs mb-3">
                    <button
                      className="nav-link active border-white border-bottom-0"
                      type="button"
                      id="nav-about-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-about"
                      aria-controls="nav-about"
                      aria-selected="true"
                    >
                      Description
                    </button>
                    <button
                      className="nav-link border-white border-bottom-0"
                      type="button"
                      id="nav-reviews-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-reviews"
                      aria-controls="nav-reviews"
                      aria-selected="false"
                    >
                      Reviews
                    </button>
                  </div>
                </nav>
                <div className="tab-content mb-5">
                  <div
                    className="tab-pane active"
                    id="nav-about"
                    role="tabpanel"
                    aria-labelledby="nav-about-tab"
                  >
                    <p>
                      The generated Lorem Ipsum is therefore always free from
                      repetition injected humour, or non-characteristic words
                      etc. Susp endisse ultricies nisi vel quam suscipit.
                    </p>
                    <p>
                      Sabertooth peacock flounder; chain pickerel hatchetfish,
                      pencilfish snailfish filefish Antarctic icefish goldeye
                      aholehole trumpetfish pilot fish airbreathing catfish,
                      electric ray sweeper.
                    </p>
                    <div className="px-2">
                      <div className="row g-4">
                        <div className="col-6">
                          <div className="row bg-light align-items-center text-center justify-content-center py-2">
                            <div className="col-6">
                              <p className="mb-0">Weight</p>
                            </div>
                            <div className="col-6">
                              <p className="mb-0">1 kg</p>
                            </div>
                          </div>
                          <div className="row text-center align-items-center justify-content-center py-2">
                            <div className="col-6">
                              <p className="mb-0">Country of Origin</p>
                            </div>
                            <div className="col-6">
                              <p className="mb-0">Agro Farm</p>
                            </div>
                          </div>
                          <div className="row bg-light text-center align-items-center justify-content-center py-2">
                            <div className="col-6">
                              <p className="mb-0">Quality</p>
                            </div>
                            <div className="col-6">
                              <p className="mb-0">Organic</p>
                            </div>
                          </div>
                          <div className="row text-center align-items-center justify-content-center py-2">
                            <div className="col-6">
                              <p className="mb-0">Check</p>
                            </div>
                            <div className="col-6">
                              <p className="mb-0">Healthy</p>
                            </div>
                          </div>
                          <div className="row bg-light text-center align-items-center justify-content-center py-2">
                            <div className="col-6">
                              <p className="mb-0">Min Weight</p>
                            </div>
                            <div className="col-6">
                              <p className="mb-0">250 Kg</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane"
                    id="nav-reviews"
                    role="tabpanel"
                    aria-labelledby="nav-reviews-tab"
                  >
                    <div className="d-flex">
                      <img
                        src="img/avatar.jpg"
                        className="img-fluid rounded-circle p-3"
                        style={{ width: "100px", height: "100px" }}
                        alt="Reviewer"
                      />
                      <div>
                        <p className="mb-2" style={{ fontSize: "14px" }}>
                          April 12, 2024
                        </p>
                        <div className="d-flex justify-content-between">
                          <h5>Jason Smith</h5>
                          <div className="d-flex mb-3">
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <p>
                          The generated Lorem Ipsum is therefore always free
                          from repetition injected humour, or non-characteristic
                          words etc. Susp endisse ultricies nisi vel quam
                          suscipit.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <img
                        src="img/avatar.jpg"
                        className="img-fluid rounded-circle p-3"
                        style={{ width: "100px", height: "100px" }}
                        alt="Reviewer"
                      />
                      <div>
                        <p className="mb-2" style={{ fontSize: "14px" }}>
                          April 12, 2024
                        </p>
                        <div className="d-flex justify-content-between">
                          <h5>Sam Peters</h5>
                          <div className="d-flex mb-3">
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star text-secondary"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                          </div>
                        </div>
                        <p className="text-dark">
                          The generated Lorem Ipsum is therefore always free
                          from repetition injected humour, or non-characteristic
                          words etc. Susp endisse ultricies nisi vel quam
                          suscipit.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <h4 className="mb-5 fw-bold">Leave a Reply</h4>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="border-bottom rounded">
                      <input
                        type="text"
                        className="form-control border-0 me-4"
                        placeholder="Your Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="border-bottom rounded">
                      <input
                        type="email"
                        className="form-control border-0"
                        placeholder="Your Email *"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="border-bottom rounded my-4">
                      <textarea
                        className="form-control border-0"
                        cols="30"
                        rows="8"
                        placeholder="Your Review *"
                        name="review"
                        value={formData.review}
                        onChange={handleInputChange}
                        spellCheck="false"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="d-flex justify-content-between py-3 mb-5">
                      <div className="d-flex align-items-center">
                        <p className="mb-0 me-3">Please rate:</p>
                        <div
                          className="d-flex align-items-center"
                          style={{ fontSize: "12px" }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fa fa-star ${
                                formData.rating > i
                                  ? "text-warning"
                                  : "text-muted"
                              }`}
                              onClick={() => handleRatingChange(i + 1)}
                              style={{ cursor: "pointer" }}
                            ></i>
                          ))}
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn border border-secondary text-primary rounded-pill px-4 py-3"
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3">
            <div className="row g-4 fruite">
              <div className="col-lg-12">
                <div className="input-group w-100 mx-auto d-flex mb-4">
                  <input
                    type="search"
                    className="form-control p-3"
                    placeholder="keywords"
                    aria-describedby="search-icon-1"
                  />
                  <span id="search-icon-1" className="input-group-text p-3">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
                <div className="mb-4">
                  <h4>Categories</h4>
                  <ul className="list-unstyled fruite-categorie">
                    {[
                      { name: "Apples", count: 3 },
                      { name: "Oranges", count: 5 },
                      { name: "Strawbery", count: 2 },
                      { name: "Banana", count: 8 },
                      { name: "Pumpkin", count: 5 },
                    ].map((category, index) => (
                      <li key={index}>
                        <div className="d-flex justify-content-between fruite-name">
                          <a href="#">
                            <i className="fas fa-apple-alt me-2"></i>
                            {category.name}
                          </a>
                          <span>({category.count})</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-12">
                <h4 className="mb-4">Featured products</h4>
                {[
                  {
                    name: "Big Banana",
                    currentPrice: "2.99 $",
                    oldPrice: "4.11 $",
                    imgSrc: "img/featur-1.jpg",
                  },
                  {
                    name: "Big Banana",
                    currentPrice: "2.99 $",
                    oldPrice: "4.11 $",
                    imgSrc: "img/featur-2.jpg",
                  },
                  {
                    name: "Big Banana",
                    currentPrice: "2.99 $",
                    oldPrice: "4.11 $",
                    imgSrc: "img/featur-3.jpg",
                  },
                  {
                    name: "Big Banana",
                    currentPrice: "2.99 $",
                    oldPrice: "4.11 $",
                    imgSrc: "img/vegetable-item-4.jpg",
                  },
                  {
                    name: "Big Banana",
                    currentPrice: "2.99 $",
                    oldPrice: "4.11 $",
                    imgSrc: "img/vegetable-item-5.jpg",
                  },
                  {
                    name: "Big Banana",
                    currentPrice: "2.99 $",
                    oldPrice: "4.11 $",
                    imgSrc: "img/vegetable-item-6.jpg",
                  },
                ].map((product, index) => (
                  <div
                    className="d-flex align-items-center justify-content-start mb-4"
                    key={index}
                  >
                    <div
                      className="rounded"
                      style={{ width: "100px", height: "100px" }}
                    >
                      <img
                        src={product.imgSrc}
                        className="img-fluid rounded"
                        alt={product.name}
                      />
                    </div>
                    <div className="ms-4">
                      <h6 className="mb-2">{product.name}</h6>
                      <div className="d-flex mb-2">
                        {[...Array(4)].map((_, i) => (
                          <i key={i} className="fa fa-star text-secondary"></i>
                        ))}
                        <i className="fa fa-star"></i>
                      </div>
                      <div className="d-flex mb-2">
                        <h5 className="fw-bold me-2">{product.currentPrice}</h5>
                        <h5 className="text-danger text-decoration-line-through">
                          {product.oldPrice}
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="d-flex justify-content-center my-4">
                  <a
                    href="#"
                    className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
                  >
                    View More
                  </a>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="position-relative">
                  <img
                    src="img/banner-fruits.jpg"
                    className="img-fluid w-100 rounded"
                    alt="Fresh Fruits Banner"
                  />
                  <div
                    className="position-absolute"
                    style={{
                      top: "50%",
                      right: "10px",
                      transform: "translateY(-50%)",
                    }}
                  >
                    <h3 className="text-secondary fw-bold">
                      Fresh <br /> Fruits <br /> Banner
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="fw-bold mb-0">Related products</h1>
        <div className="vesitable">
          <OwlCarousel className="owl-theme vegetable-carousel" {...options}>
            {products.map((product, index) => (
              <div
                className="border border-primary rounded position-relative vesitable-item"
                key={index}
              >
                <div className="vesitable-img">
                  <img
                    src={product.imgSrc}
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
                <div className="p-4 pb-0 rounded-bottom">
                  <h4>{product.title}</h4>
                  <p>{product.description}</p>
                  <div className="d-flex justify-content-between flex-lg-wrap">
                    <p className="text-dark fs-5 fw-bold">{product.price}</p>
                    <a
                      href="#"
                      className="btn border border-secondary rounded-pill px-3 py-1 mb-4 text-primary"
                    >
                      <i className="fa fa-shopping-bag me-2 text-primary"></i>{" "}
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default BodyShopDetail;
