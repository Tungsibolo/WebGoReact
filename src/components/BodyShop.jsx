import { useState } from "react";
import FruitItem from "./FruitItem";

const BodyShop = () => {
  const [rangeValue, setRangeValue] = useState(0);
  const fruitItems = [
    {
      imgSrc: "img/fruite-item-5.jpg",
      title: "Grapes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99",
    },
    {
      imgSrc: "img/fruite-item-4.jpg",
      title: "Grapes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99",
    },
    {
      imgSrc: "img/fruite-item-2.jpg",
      title: "Raspberries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99",
    },
    {
      imgSrc: "img/fruite-item-4.jpg",
      title: "Apricots",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99",
    },
    {
      imgSrc: "img/fruite-item-3.jpg",
      title: "Banana",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99",
    },
    {
      imgSrc: "img/fruite-item-1.jpg",
      title: "Oranges",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99",
    },
    {
      imgSrc: "img/fruite-item-4.jpg",
      title: "Apricots",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99",
    },
    {
      imgSrc: "img/fruite-item-2.jpg",
      title: "Banana",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99",
    },
    {
      imgSrc: "img/fruite-item-6.jpg",
      title: "Oranges",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      price: "$4.99",
    },
  ];

  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <h1 className="mb-4">Fresh fruits shop</h1>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="col-xl-3">
                <div className="input-group w-100 mx-auto d-flex">
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
              </div>
              <div className="col-6"></div>
              <div className="col-xl-3">
                <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                  <label htmlFor="fruits">Default Sorting:</label>
                  <select
                    id="fruits"
                    name="fruitlist"
                    className="border-0 form-select-sm bg-light me-3"
                    form="fruitform"
                  >
                    <option value="volvo">Nothing</option>
                    <option value="saab">Popularity</option>
                    <option value="opel">Organic</option>
                    <option value="audi">Fantastic</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <h4>Categories</h4>
                      <ul className="list-unstyled fruite-categorie">
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2"></i>Apples
                            </a>
                            <span>(3)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2"></i>Oranges
                            </a>
                            <span>(5)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2"></i>
                              Strawberry
                            </a>
                            <span>(2)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2"></i>Banana
                            </a>
                            <span>(8)</span>
                          </div>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between fruite-name">
                            <a href="#">
                              <i className="fas fa-apple-alt me-2"></i>Pumpkin
                            </a>
                            <span>(5)</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    {/* Price Section */}
                    <div className="mb-3">
                      <h4 className="mb-2">Price</h4>
                      <input
                        type="range"
                        className="form-range w-100"
                        id="rangeInput"
                        name="rangeInput"
                        min="0"
                        max="500"
                        value={rangeValue}
                        onChange={(e) => setRangeValue(e.target.value)}
                      />
                      <output id="amount" name="amount">
                        {rangeValue}
                      </output>
                    </div>
                    {/* Additional Section */}
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <h4>Additional</h4>
                        {[
                          "Organic",
                          "Fresh",
                          "Sales",
                          "Discount",
                          "Expired",
                        ].map((category, index) => (
                          <div className="mb-2" key={index}>
                            <input
                              type="radio"
                              className="me-2"
                              id={`Categories-${index + 1}`}
                              name="Categories-1"
                              value={category}
                            />
                            <label htmlFor={`Categories-${index + 1}`}>
                              {" "}
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Featured Products Section */}
                    <div className="col-lg-12">
                      <h4 className="mb-3">Featured products</h4>
                      {["featur-1.jpg", "featur-2.jpg", "featur-3.jpg"].map(
                        (img, index) => (
                          <div
                            className="d-flex align-items-center justify-content-start"
                            key={index}
                          >
                            <div
                              className="rounded me-4"
                              style={{ width: "100px", height: "100px" }}
                            >
                              <img
                                src={`img/${img}`}
                                className="img-fluid rounded"
                                alt=""
                              />
                            </div>
                            <div>
                              <h6 className="mb-2">Big Banana</h6>
                              <div className="d-flex mb-2">
                                {[...Array(5)].map((_, starIndex) => (
                                  <i
                                    key={starIndex}
                                    className={`fa fa-star ${
                                      starIndex < 4 ? "text-secondary" : ""
                                    }`}
                                  ></i>
                                ))}
                              </div>
                              <div className="d-flex mb-2">
                                <h5 className="fw-bold me-2">2.99 $</h5>
                                <h5 className="text-danger text-decoration-line-through">
                                  4.11 $
                                </h5>
                              </div>
                            </div>
                          </div>
                        )
                      )}
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
                          alt=""
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
              <div className="col-lg-9">
                <div className="row g-4 justify-content-center">
                  {fruitItems.map((item, index) => (
                    <FruitItem
                      key={index}
                      imgSrc={item.imgSrc}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                    />
                  ))}
                  <div className="col-12">
                    <div className="pagination d-flex justify-content-center mt-5">
                      <a href="#" className="rounded">
                        &laquo;
                      </a>
                      <a href="#" className="active rounded">
                        1
                      </a>
                      <a href="#" className="rounded">
                        2
                      </a>
                      <a href="#" className="rounded">
                        3
                      </a>
                      <a href="#" className="rounded">
                        4
                      </a>
                      <a href="#" className="rounded">
                        5
                      </a>
                      <a href="#" className="rounded">
                        6
                      </a>
                      <a href="#" className="rounded">
                        &raquo;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyShop;
