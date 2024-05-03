import * as React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Specificproduct.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  GetDetailProduct,
  getWishlist,
  sendToWishlistApi,
} from "../../helper.js";
import { ThreeDots } from "react-loader-spinner";
import { sendToCartApi } from "../../helper.js/";
import { ToastContainer, toast } from "react-toastify";
import { IoCloseSharp } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import { createReview } from "../../helper.js";

export default function MyComponent() {
  const navigate = useNavigate();

  const renderStars = (rating) => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐";
    }
    return stars;
  };
  let dataSet = [];
  const { id } = useParams();
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(1);
  const [colorr, setColor] = useState("grey");
  const [reviewDetails, setreviewDetails] = useState({
    rating: 0,
    comment: "",
    productId: id,
  });
  const [showreview, setshowreview] = useState(false);

  useEffect(() => {
    getDetails();
  }, []);

  const handleImageClick = (image) => {
    setMainImage(image);
  };
  const [mainImage, setMainImage] = useState("");
  const [activeSection, setActiveSection] = useState("description");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const getDetails = async () => {
    console.log("hello");
    const response = await GetDetailProduct(id);
    const response2 = await getWishlist();

    if (response.status === 200) {
      setDetails(response.data.product);
      console.log(response.data.product);
      setMainImage(response.data.product.images[0]);

      if (response2.status === 200) {
        // Initialize dataSet
        let dataSet = new Set();

        // Populate dataSet with names from response2
        for (let i = 0; i < response2.data.data.length; i++) {
          dataSet.add(response2.data.data[i].name);
        }
        console.log(dataSet);
        console.log(response.data.product.name);

        // Check if details.name is present in dataSet
        if (dataSet.has(response.data.product.name)) {
          setColor("red");
          console.log("red");
        } else {
          setColor("grey");
        }
      }
    }

    setLoading(false);
  };

  const sendToCart = async () => {
    const response = await sendToCartApi({ id, cartCount });
    console.log(response);
    if (response.status == 200) {
      console.log("product added to cart ");
      toast.success("Product added to cart");
    }
  };

  const BuyNowButton = async () => {
    const response = await sendToCartApi({ id, cartCount });
    console.log(response);
    if (response.status == 200) {
      console.log("product added to cart ");
      toast.success("Product added to cart");
      setTimeout(() => {
        navigate("/profile", { state: { tabId: "CART" } });
      }, 2000); // 2000 milliseconds = 2 seconds
    }
  };

  const wishListItem = async () => {
    const response = await sendToWishlistApi(id);
    console.log(response);
    if (response.status == 200) {
      // setLoveClicked(!isLoveClicked);
      getDetails();
      toast.success("Item Wishlisted");
    }
  };

  const submitReview = async (event) => {
    event.preventDefault();
    setshowreview(!showreview);
    const response = await createReview(reviewDetails);
    if (response.status == 200) {
      getDetails();
      toast.success("Product reviewed successfully");
      window.location.reload();
    }
  };

  return (
    <div className="overflow-hidden">
      <Navbar />

      {loading ? (
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
      ) : (
        <div className="bg-white flex flex-col px-9 py-12 max-md:px-5">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <div className="self-stretch mx-6 max-md:max-w-full max-md:mr-2.5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
                <div
                  style={{ position: "relative" }}
                  className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10"
                >
                  <button
                    onClick={wishListItem}
                    id="whishbutton"
                    className="absolute top-[clamp(-100px,0vw,10px)] right-[25%] cursor-pointer bg-transparent"
                  >
                    <IoIosHeart
                      color={colorr}
                      size={24}
                      className="bg-white text-red-500 rounded-full p-[3px]"
                    />
                  </button>

                  <img
                    loading="lazy"
                    srcSet={mainImage}
                    className="aspect-[1.4] object-contain object-center w-[100%] sm:w-[80%] overflow-hidden max-md:max-w-full rounded-md p-0  sm:p-4 mb-2"
                  />
                  <div className=" max-md:max-w-full">
                    <div
                      className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 overflow-scroll mr-[9.5rem] "
                      id="todecrease"
                    >
                      <div
                        className="flex flex-row gap-2  items-stretch w-[26%] max-md:w-full max-md:ml-25 no-scrollbar    "
                        id="mleft"
                      >
                        {details.images.map((image, index) => (
                          <img
                            key={index}
                            loading="lazy"
                            srcSet={image}
                            className="aspect-[1.14] object-contain rounded object-center border-2 border-[#F59E0B] p-2 w-[80px] overflow-hidden shrink-0 max-w-full grow max-md:mt-3 cursor-pointer "
                            onClick={() => handleImageClick(image)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-black text-[clamp(1.5rem,2vw,2.25rem)] font-semibold self-stretch max-md:max-w-full">
                    {details.name}
                  </div>
                  <div className="text-zinc-800   text-sm  mt-7 self-start ">
                    {"⭐".repeat(details.rating)}
                    {`${details.noOfReviews} reviews`}
                  </div>
                  <div className="flex items-stretch gap-4 mt-3 self-start">
                    <div className="text-neutral-700 text-sm whitespace-nowrap bg-zinc-300 bg-opacity-70 grow justify-center items-stretch px-3.5 py-1.5 rounded-xl">
                      {details.category}
                    </div>
                  </div>
                  <div className="self-stretch flex items-stretch justify-between mt-4 max-md:max-w-full max-md:flex-wrap">
                    <div className="flex flex-row grow basis-[0%] gap-4 items-stretch">
                      <div className="text-black text-3xl font-semibold">
                        {details.price}
                      </div>
                      <div className="text-red-700 text-3xl font-semibold line-through">
                        {Math.floor(
                          details.price +
                            (details.price * (15 + Math.random() * 5)) / 100
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row items-center mt-4">
                    <label>Quantity : </label>

                    <select
                      onChange={(event) => setCartCount(event.target.value)}
                      className="w-10 border border-gray-500 rounded-md px-0.5"
                    >
                      <option value={1} className="bg-white w-10">
                        1
                      </option>
                      <option value={2} className="bg-white w-10">
                        2
                      </option>
                      <option value={3} className="bg-white w-10">
                        3
                      </option>
                    </select>
                  </div>

                  <button
                    onClick={() => {
                      sendToCart();
                    }}
                    id="button-to-change"
                    className="text-white sm:text-4xl text-xl font-semibold bg-neutral-700 mt-6 rounded-xl max-md:max-w-full max-md:px-5"
                  >
                    Add to cart
                  </button>

                  <button
                    id="button-to-change"
                    onClick={() => {
                      BuyNowButton();
                    }}
                    className="text-white sm:text-4xl text-xl font-semibold bg-amber-500 self-stretch justify-center items-center mt-6 rounded-xl max-md:max-w-[400px] max-md:px-5"
                  >
                    Buy Now
                  </button>
                  <div className="text-zinc-800   text-sm whitespace-nowrap mt-5">
                    <span className="font-semibold text-base p-0">
                      <span className="text-amber-500  text-[1rem] p-0">
                        Shipping{" "}
                      </span>{" "}
                      calculated at the checkout.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-row gap-[10px]  sm:gap-12 mt-4    "
            id="a1j"
            style={{ marginLeft: "40px" }}
          >
            <div
              className={` bg-[#c6cbc6] p-2 rounded-md hover:bg-[#a9aca9] cursor-pointer   ${
                activeSection === "description"
                  ? "text-black "
                  : "text-[#6e7271]"
              } text-[12px] sm:text-xl font-semibold   `}
              onClick={() => handleSectionClick("description")}
            >
              Description
            </div>
            <div
              className={`bg-[#c6cbc6] p-2 rounded-md hover:bg-[#a9aca9] cursor-pointer ${
                activeSection === "insideBox" ? "text-black" : "text-[#6e7271]"
              } text-[12px] sm:text-xl font-semibold`}
              style={{
                width: details.insideBox && details.insideBox.length > 0 ? "auto" : "none",
                display: details.insideBox && details.insideBox.length > 0 ? "block" : "none"
              }}
              onClick={() => handleSectionClick("insideBox")}
            >
              {details.insideBox && details.insideBox.length > 0
                ? "Inside Box"
                : null}
            </div>

            <div
              className={` bg-[#c6cbc6] p-2 rounded-md hover:bg-[#a9aca9] cursor-pointer  ${
                activeSection === "features" ? "text-black " : "text-[#6e7271]"
              } text-[12px] sm:text-xl font-semibold `}
              style={{
                width: details.features && details.features.length > 0 ? "auto" : "none",
                display: details.features && details.features.length > 0 ? "block" : "none"
              }}
              onClick={() => handleSectionClick("features")}
            >
              {details.features ? "features" : null}
            </div>

            <div
              className={` bg-[#c6cbc6] p-2 rounded-md hover:bg-[#a9aca9] cursor-pointer  ${
                activeSection === "features" ? "text-black " : "text-[#6e7271]"
              } text-[12px] sm:text-xl font-semibold `}
              style={{
                width: details.specifications && details.specifications.length > 0 ? "auto" : "none",
                display: details.specifications && details.specifications.length > 0 ? "block" : "none"
              }}
              onClick={() => handleSectionClick("specifications")}
            >
              {details.specifications ? "specifications" : null}
            </div>
          </div>

          {activeSection === "description" && (
            <div
              className="text-black sm:text-xl  mt-4 mx-2 ml-[22px] sm:ml-[44px]"
              id="text-to-be-expanded"
              style={{ fontSize: "0.875rem " }}
            >
              {details.description}
            </div>
          )}

          {activeSection === "insideBox" && (
            <div
              className="text-black sm:text-xl text-sm mt-4 mx-2 ml-[22px] sm:ml-[44px]"
              id="text-to-be-expanded"
              style={{ fontSize: "0.875rem" }}
            >
              <ul className="list-disc pl-4">
                {details.insideBox.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeSection === "features" && (
            <div
              className="text-black sm:text-xl text-sm mt-4 mx-2 ml-[22px] sm:ml-[44px]"
              id="text-to-be-expanded"
              style={{ fontSize: "0.875rem" }}
            >
              {details.features && details.features.length > 0 ? (
                <ul className="list-disc pl-4">
                  {details.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          )}
          {activeSection === "specifications" && (
            <div
              className="text-black sm:text-xl text-sm mt-4 mx-2 ml-[22px] sm:ml-[44px]"
              id="text-to-be-expanded"
              style={{ fontSize: "0.875rem" }}
            >
              {details.specifications && details.specifications.length > 0 ? (
                <ul className="list-disc pl-4">
                  {details.specifications.map((specification, index) => (
                    <li key={index}>{specification}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          )}

          <div className="sm:w-[60%] W-[100%] h-auto p-4 sm:ml-[20px] ml-0 ">
            <h1 className="text-3xl mb-3 font-bold text-black" id="cus">
              Customer reviews
            </h1>
            <h3 className="text-xl mb-2 text-black font-semibold" id="glo">
              {" "}
              {details.noOfReviews} ratings
            </h3>
            {showreview ? (
              ""
            ) : (
              <button
                onClick={() => {
                  setshowreview(!showreview);
                }}
                className="border px-2 text-sm shadow rounded-sm active:shadow-md"
              >
                Write a review
              </button>
            )}

            {/* review form _____________*/}
            {showreview ? (
              <div className="form-container relative">
                <button
                  onClick={() => {
                    setshowreview(!showreview);
                  }}
                  className="absolute top-3 right-3 "
                >
                  <IoCloseSharp className="text-xl" />
                </button>
                <div className="logo-container">Create Review</div>

                <form className="form">
                  <div className="form-group">
                    <label htmlFor="review font-bold">Comment</label>
                    <textarea
                      onChange={(event) =>
                        setreviewDetails((prev) => ({
                          ...prev,
                          comment: event.target.value,
                        }))
                      }
                      rows={10}
                      className="border p-2"
                      id="reivew"
                      placeholder="Write your experience of product....."
                    ></textarea>

                    <div className="flex flex-row items-center mt-4">
                      <label className="text-bold text-md mt-3">
                        Rating :{" "}
                      </label>

                      <div className="rating">
                        <input
                          value={1}
                          onClick={(event) =>
                            setreviewDetails((prev) => ({
                              ...prev,
                              rating: event.target.value,
                            }))
                          }
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 w-10 bg-orange-400"
                        />
                        <input
                          value={2}
                          onClick={(event) =>
                            setreviewDetails((prev) => ({
                              ...prev,
                              rating: event.target.value,
                            }))
                          }
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          value={3}
                          onClick={(event) =>
                            setreviewDetails((prev) => ({
                              ...prev,
                              rating: event.target.value,
                            }))
                          }
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          value={4}
                          onClick={(event) =>
                            setreviewDetails((prev) => ({
                              ...prev,
                              rating: event.target.value,
                            }))
                          }
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                        <input
                          value={5}
                          onClick={(event) =>
                            setreviewDetails((prev) => ({
                              ...prev,
                              rating: event.target.value,
                            }))
                          }
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-400"
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={submitReview}
                    className="form-submit-btn"
                    type="submit"
                  >
                    Create Review
                  </button>
                </form>
              </div>
            ) : (
              ""
            )}

            {/* reviews  */}
            <div className="flex flex-col gap-2">
              {details.reviews.map((each) => (
                <div
                  key={each.id}
                  className="flex flex-col border-b-[1.5px] border-b-gray-500 p-2  py-10 "
                  id="reviews"
                >
                  <div className="flex flex-row items-center">
                    <div
                      className="w-[3rem] rounded-full mb-2  bg-black flex justify-center items-center"
                      id="userimg"
                    >
                      <p className="text-white"> {each.name.slice(0, 1)}</p>
                    </div>
                    <h1
                      className="text-2xl ml-2 mb-1 font-[500] text-black"
                      id="reviever"
                    >
                      {each.name}
                    </h1>
                  </div>
                  <span className="text-2xl" id="reviever">
                    {renderStars(each.rating)}
                  </span>
                  <p className="text-xl text-black mb-2" id="comments">
                    {each.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
