import * as React from "react";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Specificproduct.css";
import { useParams } from "react-router-dom";
import { GetDetailProduct, sendToWishlistApi } from "../../helper.js";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { sendToCartApi } from "../../helper.js/";
import { ToastContainer, toast } from 'react-toastify';
import { IoCloseSharp } from "react-icons/io5";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../storeFeatures/cartReducers.js";
import { IoIosHeart } from "react-icons/io";
import {createReview} from "../../helper.js";


export default function MyComponent() {
  const dispatch = useDispatch();

  const Review = {
    reviever: "david bhai",
    revieverimg:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    reviews:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    ratings: 4,
    comments:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint cupiditate ipsam, quia neque hic ratione, dolorem, illum quo error commodi adipisci quisquam voluptatibus ex provident?",
  };
  const renderStars = (rating) => {
    let stars = "";
    for (let i = 0; i < rating; i++) {
      stars += "⭐";
    }
    return stars;
  };

  const { id } = useParams();
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(1);
  const [isLoveClicked, setLoveClicked] = useState(false);
  const [reviewDetails, setreviewDetails] = useState({ rating: 0, comment: "", productId: id })
  const [showreview, setshowreview] = useState(false)

  console.log("love clicked", isLoveClicked);

  useEffect(() => {
    getDetails();
  }, []);

  const handleImageClick = (image) => {
    setMainImage(image.url);
  };
  const [mainImage, setMainImage] = useState("");
  const [activeSection, setActiveSection] = useState("description");
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const getDetails = async () => {
    const response = await GetDetailProduct(id);
    if (response.status == 200) {
      setDetails(response.data.product);
      setMainImage(response.data.product.images[0].url);
    }
    setLoading(false);
  };

  const sendToCart = async () => {
    const response = await sendToCartApi({ id, cartCount });
    console.log(response)
    if (response.status == 200) {
      toast.success("Product added to cart")
    }
  };

  const wishListItem = async () => {
    const response = await sendToWishlistApi(id);
    console.log(response);
    if (response.status == 200) {
      setLoveClicked(!isLoveClicked);
      toast.success("Item Wishlisted")
    }
  };

  const submitReview=async(event)=>{
    event.preventDefault()
    setshowreview(!showreview)
    const response = await createReview(reviewDetails);
    if (response.status == 200) {
      getDetails()
      toast.success("Product reviewed successfully")
    }
  }

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
                    style={{
                      position: "absolute",
                      top: "0px",
                      right: "10px",
                      cursor: "pointer",
                      border: "none",
                      backgroundColor: "transparent",
                    }}
                  >
                    <IoIosHeart
                      color={"red"}
                      size={24}
                      className="bg-white text-red-500 rounded-full p-[3px]"
                    />
                  </button>

                  <img
                    loading="lazy"
                    srcSet={mainImage}
                    className="aspect-[1.4] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                  />
                  <div className=" max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                      <div
                        className="flex flex-row gap-2  items-stretch w-[26%] max-md:w-full max-md:ml-25 no-scrollbar  ml-5 "
                        id="mleft"
                      >
                        {details.images.map((image, index) => (
                          <img
                            key={index}
                            loading="lazy"
                            srcSet={image.url}
                            className="aspect-[1.14] object-contain object-center w-[128px] overflow-hidden shrink-0 max-w-full grow max-md:mt-3 cursor-pointer "
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
                  <div className="text-black text-4xl font-semibold self-stretch max-md:max-w-full">
                    {details.name}
                  </div>
                  <div className="text-zinc-800 text-opacity-60 text-sm whitespace-nowrap ml-32 mt-7 self-start max-md:ml-2.5">
                    ⭐{`${details.noOfReviews} reviews`}
                  </div>
                  <div className="flex items-stretch gap-4 mt-3 self-start">
                    <div className="text-neutral-700 text-sm whitespace-nowrap bg-zinc-300 bg-opacity-70 grow justify-center items-stretch px-3.5 py-1.5 rounded-xl">
                      {details.category}
                    </div>
                  </div>
                  <div className="self-stretch flex items-stretch justify-between gap-0.5 mt-4 max-md:max-w-full max-md:flex-wrap">
                    <div className="flex grow basis-[0%] flex-col items-stretch">
                      <div className="text-neutral-700 text-3xl font-semibold">
                        {details.price}
                      </div>
                      <div className="text-zinc-800 text-opacity-60 text-sm whitespace-nowrap mt-5">
                        <span className="font-semibold text-base p-0">
                          <span className="text-amber-500 p-0">Shipping </span>{" "}
                          calculated at the checkout.
                        </span>
                      </div>
                    </div>
                    <div className="flex grow basis-[0%] flex-col items-stretch">
                      <div className="text-neutral-700 text-3xl font-semibold whitespace-nowrap  line-through">
                        {details.price}
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
                      dispatch(addToCart(id));
                      sendToCart();
                    }}
                    id="button-to-change"
                    className="text-white sm:text-4xl text-xl font-semibold bg-neutral-700 mt-6 rounded-xl max-md:max-w-full max-md:px-5"
                  >
                    Add to cart
                  </button>

                  <button
                    id="button-to-change"
                    className="text-white sm:text-4xl text-xl font-semibold bg-amber-500 self-stretch justify-center items-center mt-6 rounded-xl max-md:max-w-[400px] max-md:px-5"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="self-center flex flex-row  w-full max-w-[1008px] sm:justify-between justify-starts sm:gap-5  mt-10 items-start max-md:max-w-full max-md:flex-wrap">
            <div
              className={`cursor-pointer ${activeSection === "description"
                ? "text-amber-500"
                : "text-zinc-500"
                } text-2xl font-semibold  mt-14 self-end max-md:mt-10`}
              onClick={() => handleSectionClick("description")}
            >
              Description
            </div>
            <div
              className={`cursor-pointer ${activeSection === "insideBox"
                ? "text-amber-500"
                : "text-zinc-500"
                } text-2xl font-semibold mt-14 ml-20 self-end max-md:mt-0`}
              onClick={() => handleSectionClick("insideBox")}
            >
              Inside Box
            </div>

            <div
              className={`cursor-pointer ${activeSection === "productDetails"
                ? "text-amber-500"
                : "text-zinc-500"
                } text-2xl font-semibold w-96 mt-14 max-md:mt-10`}
              onClick={() => handleSectionClick("productDetails")}
            >
              Product Details
            </div>
          </div>

          {activeSection === "description" && (
            <div
              className="text-zinc-800 text-opacity-60 text-2xl self-stretch mt-5 max-md:max-w-full"
              id="text-to-be-expanded"
            >
              {details.description}
            </div>
          )}

          {activeSection === "insideBox" && (
            <div
              className="text-zinc-800 text-opacity-60 text-2xl self-stretch mt-5 max-md:max-w-full"
              id="text-to-be-expanded"
            >
              consectetur adipisicing elit. Voluptates obcaecati nesciunt
              repudiandae ut, id quis ex sunt vel earum dolores quisquam,
              eligendi impedit laboriosam blanditiis dolorum dicta ad aliquam
              ducimus corporis. Repudiandae suscipit saepe officia minima ad,
              sed laboriosam magnam, est corrupti voluptate assumenda vel
              nostrum. Dolorem sequi libero voluptatem iusto nesciunt
              perspiciatis, adipisci perferendis cum! Odit eligendi, ad
              doloremque magnam earum aliquam dignissimos commodi quod
              obcaecati, voluptates eius consequuntur debitis laborum maxime
              neque totam possimus enim nulla doloribus aut ullam reprehenderit
              voluptatum. Aspernatur, a velit. Expedita eligendi sit possimus
              eum facilis voluptatem aliquid hic quidem voluptatibus minima
              natus cumque maxime ipsum vel perferendis mollitia voluptates sed
              vero cupiditate quibusdam, beatae qui. Incidunt ab, quaerat
              praesentium impedit perferendis reiciendis provident sapiente?
              Enim accusamus voluptatibus, modi facilis vitae consequuntur
              voluptates praesentium veritatis ipsam delectus illo reiciendis
              aperiam. Sint dolore impedit, esse dignissimos ducimus ut,
              officiis, itaque voluptatum voluptate dolorem deserunt obcaecati
              assumenda? Quis amet veniam error magni, laudantium perspiciatis,
              quidem distinctio facilis illum voluptatibus numquam minima
              praesentium. Facilis modi nihil facere! Culpa libero repellat vero
              quae explicabo itaque fuga magnam quia. Magni illum id iure minima
              dolorum deserunt voluptatem optio, beatae perspiciatis quos
              voluptatibus quae alias at aperiam eius! Cumque, nesciunt?
            </div>
          )}

          {activeSection === "productDetails" && (
            <div
              className="text-zinc-800 text-opacity-60 text-2xl self-stretch mt-5 max-md:max-w-full"
              id="text-to-be-expanded"
            >
              elit. Voluptates obcaecati nesciunt repudiandae ut, id quis ex
              sunt vel earum dolores quisquam, eligendi impedit laboriosam
              blanditiis dolorum dicta ad aliquam ducimus corporis. Repudiandae
              suscipit saepe officia minima ad, sed laboriosam magnam, est
              corrupti voluptate assumenda vel nostrum. Dolorem sequi libero
              voluptatem iusto nesciunt perspiciatis, adipisci perferendis cum!
              Odit eligendi, ad doloremque magnam earum aliquam dignissimos
              commodi quod obcaecati, voluptates eius consequuntur debitis
              laborum maxime neque totam possimus enim nulla doloribus aut ullam
              reprehenderit voluptatum. Aspernatur, a velit. Expedita eligendi
              sit possimus eum facilis voluptatem aliquid hic quidem
              voluptatibus minima natus cumque maxime ipsum vel perferendis
              mollitia voluptates sed vero cupiditate quibusdam, beatae qui.
              Incidunt ab, quaerat praesentium impedit perferendis reiciendis
              provident sapiente? Enim accusamus voluptatibus, modi facilis
              vitae consequuntur voluptates praesentium veritatis ipsam delectus
              illo reiciendis aperiam. Sint dolore impedit, esse dignissimos
              ducimus ut, officiis, itaque voluptatum voluptate dolorem deserunt
              obcaecati assumenda? Quis amet veniam error magni, laudantium
              perspiciatis, quidem distinctio facilis illum voluptatibus numquam
              minima praesentium. Facilis modi nihil facere! Culpa libero
              repellat vero quae explicabo itaque fuga magnam quia. Magni illum
              id iure minima dolorum deserunt voluptatem optio, beatae
              perspiciatis quos voluptatibus quae alias at aperiam eius! Cumque,
              nesciunt?
            </div>
          )}

          <div className="w-[60%] h-auto p-4">
            <h1 className="text-3xl mb-3 font-bold text-black" id="cus">
              Customer reviews
            </h1>
            <h3 className="text-xl mb-2 text-black font-semibold" id="glo">
              {" "}
              72000 global ratings
            </h3>
            {
              showreview ? "" : <button onClick={() => { setshowreview(!showreview) }} className="border px-2 text-sm shadow rounded-sm active:shadow-md">
                Write a review
              </button>
            }

            {/* review form _____________*/}
            {
              showreview ?
                <div className="form-container relative">
                  <button onClick={() => { setshowreview(!showreview) }} className="absolute top-3 right-3 "><IoCloseSharp className="text-xl" /></button>
                  <div className="logo-container">
                    Create Review
                  </div>

                  <form className="form">
                    <div className="form-group">
                      <label htmlFor="review font-bold">Comment</label>
                      <textarea onChange={(event) => setreviewDetails((prev => ({ ...prev, comment: event.target.value })))} rows={10} className="border p-2" id="reivew" placeholder="Write your experience of product.....">

                      </textarea>

                      <div className="flex flex-row items-center mt-4">
                        <label>Rating : </label>

                        <select
                          onChange={(event) => setreviewDetails((prev) => ({ ...prev, rating: event.target.value }))}
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
                          <option value={4} className="bg-white w-10">
                            4
                          </option>
                          <option value={5} className="bg-white w-10">
                            5
                          </option>
                        </select>
                      </div>


                    </div>
                    <button onClick={submitReview} className="form-submit-btn" type="submit">Create Review</button>
                  </form>

                </div> : ""
            }


            {/* reviews  */}
            <div className="flex flex-col gap-2">
              {details.reviews.map((each) => (
                <div
                  key={each.id}
                  className="flex flex-col border-b-[1.5px] border-b-gray-500 p-2  py-10 "
                  id="reviews"
                >
                  <div className="flex flex-row items-center">
                    <div className="w-[3rem] rounded-full mb-2" id="userimg">
                      <img
                        src={Review.revieverimg}
                        className="rounded-full"
                        alt=""
                      />
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
                  <div className="flex flex-row overflow-x-auto gap-2">
                    <img
                      src={Review.reviews}
                      className="w-[200px] h-[200px]"
                      alt=""
                      id="rev"
                    />
                  </div>
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
