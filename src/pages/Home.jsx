import HeroSection from "../components/HeroSection";
import "../App";
import FeatureSection from "../components/FeatureSection";
import FruiteShop from "../components/FruiteShop";
import FeatureBelow from "../components/FeatureBelow";
import VegetableShop from "../components/VegetableShop";
import BannerSection from "../components/BannerSection";
import BestSellerProduct from "../components/BestSellerProduct";
import FactSection from "../components/FactSection";
import TestimonialSection from "../components/TestimonialSection";

function Home() {
  return (
    <>
      <div className="home">
        <HeroSection />
        <FeatureSection />
        <FruiteShop />
        <FeatureBelow />
        <VegetableShop />
        <BannerSection />
        <BestSellerProduct />
        <FactSection />
        <TestimonialSection />
      </div>
    </>
  );
}

export default Home;
