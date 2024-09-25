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
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Spinner />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shopdetail" element={<ShopDetail />} />
            <Route path="/shop" element={<Shop />} />
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
