import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Vehicle from "../assets/veh.png";
import MarketProduct from "./MarketProduct";
import "./Marketplace.css";
import Card from "../Home/Card";
import {GetProducts} from "../../helper.js";
import { ThreeDots } from "react-loader-spinner";

function Marketplace() {
  const [filter,setFilter]=useState({})
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(filter)

  useEffect(() => {
    getAllProducts({filter});
  }, [filter]);

  const getAllProducts = async (filter) => {
    const response = await GetProducts(filter);
    if (response.status == 200) {
     
      setProducts(response.data.products);

    }
    setLoading(false);
  };
  
  const filterChanges=(event)=>{
    console.log("hello",filter)
    setFilter((prevState)=>({...prevState,[event.target.name]:event.target.value}))
    // getAllProducts(filter)
  
  }

  return (
    <div className="overflow-hidden">
      <Navbar />
     
          <div className="flex sm:flex-row flex-col  sm:m-8 m-6 bg-orange-200 text-black overflow-hidden">
            <div className=" w-[60%]   " id="add">
              <img src={Vehicle} alt="" className="w-[100%]  h-[auto]" />
            </div>
            <div className="flex flex-col justify-center ">
              <div>
                <h1 className="text-8xl  w-[70%] px-2" id="extra">
                  Extra 10% off on all the New Arrivals
                </h1>
              </div>
              <div className="flex ">
                <div>
                  <p className=" text-5xl  w-[80%] pl-2" id="lorem">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  sm:gap-0 gap-0 sm:p-4 p-1 bg-white sm:mx-8 mx-2">
            <div
              className="flex sm:gap-8 gap-2
                "
              id="lol"
            >
              <button
                className="text-black sm:block hidden text-3xl font-bold"
                id="font"
              >
                Whats new
              </button>
              <select
                name="category"
                onChange={filterChanges}
                className="p-2 mr-2 text-black bg-white text-3xl font-bold   rounded-md"
                id="font"
              >
                <option value="" className="text-xl">
                  Categories
                </option>
                <option value="Home" className="text-xl">
                  Home
                </option>
                <option value="Electronics" className="text-xl">
                Electronics
                </option>
              </select>
            </div>
            <div
              className="sm:pl-20 pl-0
                "
              id="aghh"
            >
              <input
              onChange={filterChanges}
                type="text"
                name="keyword"
                placeholder="Search..."
                id="input"
                className="p-2 mr-2 border border-gray-600 sm:w-[700px] text-black text-3xl   w-[150px] rounded-md bg-white"
              />
              <button
                className="p-2  text-black text-3xl rounded-md font-bold"
                id="font"
              >
                Search
              </button>
            </div>
            <div
              className="flex gap-0  sm:gap-12  w-auto right-12 absolute"
              id="lol"
            >
              <button
                className=" text-black rounded-md sm:block hidden text-3xl font-bold "
                id="font"
              >
                Filter
              </button>
              <button
                className="  text-black rounded-md sm:block hidden text-3xl font-bold"
                id="font"
              >
                Offers
              </button>
            </div>
          </div>
          {loading ? (
        <div className="flex justify-center items-center h-[5cm]">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#ff8c00"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <>
          <div
            className="grid grid-cols-6   gap-3 p-5   place-items-center "
            id="k" >
               
               {
                products.slice(0,5).map((item) => (

                  <MarketProduct each={item} key={item.id}/>
                  
              ))
              }
  
          </div>
          <Card />
          <div className="grid grid-cols-6 gap-4 place-items-center" id="k">
          {
                products.slice(0,5).map((item) => (

                  <MarketProduct each={item} key={item.id}/>
                  
              ))
              }
  
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

export default Marketplace;
