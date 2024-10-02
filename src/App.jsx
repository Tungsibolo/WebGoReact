import Navbar from "./components/Navbar";
import Spinner from "./components/Spinner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import FooterSection from "./components/FooterSection";
import CopyRightSection from "./components/CopyRightSection";
import BackToTopSection from "./components/BackToTopSection";
import ShopDetail from "./pages/ShopDetail";
import Shop from "./pages/Shop";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json();

      setName(content.name);
    })();
  });
  return (
    <>
      <div className="App">
        <Router>
          <Spinner />
          <Navbar name={name} setName={setName} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart name />} />
            <Route path="/shopdetail" element={<ShopDetail />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login setName={setName} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <FooterSection />
          <CopyRightSection />
          <BackToTopSection />
        </Router>
      </div>
    </>
  );
}

export default App;
