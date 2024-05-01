import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Vehicle from "../assets/veh.png";
import MarketProduct from "./MarketProduct";
import "./Marketplace.css";
import Card from "../Home/Card";
import { GetProducts } from "../../helper.js";
import { ThreeDots } from "react-loader-spinner";

function Marketplace() {


  const [filter, setFilter] = useState({ page: 1 })
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(filter)

  useEffect(() => {
    getAllProducts({ filter });
  }, [filter]);

  const getAllProducts = async (filter) => {
    const response = await GetProducts(filter);
    if (response.status == 200) {
      setProducts(response.data.products);
      }
      setLoading(false);
    };

  const filterChanges = (event) => {
    console.log("hello", filter)
    setFilter((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
  }
  const clearAllFilters = () => {
    document.getElementById("input").value = ""
    document.getElementById("categoryselect").value="category"
    setFilter({page: 1 })
  }

  const incPagination = () => {
    setFilter(prevState => ({ ...prevState, page: prevState.page + 1 }))
  }

  const decPagination = () => {
    if (filter.page <= 0)
      setFilter(prevState => ({ ...prevState, page: 0 }))

    else
      setFilter(prevState => ({ ...prevState, page: prevState.page - 1 }))
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed
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
            id="font" >
            Filter : 
          </button>
          <select
            name="category"
            onChange={filterChanges}
            className="p-2 mr-2 text-black bg-white text-3xl font-bold   rounded-md"
            id="categoryselect"
          >
            <option value="category" className="text-xl">
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
          className="sm:pl-20 pl-0"
          id="aghh">
          <input onChange={filterChanges}
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
          <button className="text-md font-semibold bg-[#FF9F1C] p-1 text-white rounded-md" onClick={clearAllFilters}>clear</button>
        </div>
        <div
          className="flex gap-0  sm:gap-12  w-auto right-12 absolute"
          id="lol"
        >
        <div className="flex flex-row items-center">
          <label>Sort By : </label>
          <select
            name="sort"
            onChange={filterChanges}
            className="p-2 mr-2 text-black bg-white text-3xl font-bold   rounded-md"
            id="categoryselect"
          >
            <option value="atoz" className="text-xl">
              A-Z
            </option>
            <option value="ztoa" className="text-xl">
              Z-A
            </option>
            <option value="hightolow" className="text-xl">
              Hig-Low
            </option>
            <option value="lowtohigh" className="text-xl">
              Low-Hig
            </option>
            <option value="datedesc" className="text-xl">
              Old to New
            </option>
            <option value="dateasc" className="text-xl">
              New to Old
            </option>
          </select>
        </div>

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
              products.map((item) => (

                <MarketProduct each={item} key={item.id} />

              ))
            }

          </div>

          <div className="flex justify-center mb-3">
            <div className="join">
              <button className="join-item btn" onClick={decPagination}>«</button>
              <button className="join-item btn">{filter.page}</button>
              <button className="join-item btn" onClick={incPagination}>»</button>
            </div>
          </div>

        </>
      )}
      <Footer />
    </div>
  );
}

export default Marketplace;
