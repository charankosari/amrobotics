import Content from "./Content";
import PropductsContainer from "./PropductsContainer";
import VehicleCarousel from "./VehicleCarousel";
import Card from "./Card";
import PopularProducts from "./PopularProducts";
import FullCard from './FullCard'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Home() {
  console.log(document.cookie)

  return (
    <div>
      <Navbar />
      <VehicleCarousel />
      <br />
      <Content />
      <PropductsContainer />
      <Card />
      <PopularProducts />
      <br />
      {/* <FullCard/> */}
      <br />
      <Footer/>
    </div>
  );
}

export default Home;
