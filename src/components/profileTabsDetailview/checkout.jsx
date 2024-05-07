import { useState, React, useEffect } from "react";
import { GetUserDetails } from "../../helper.js";
import { ThreeDots } from "react-loader-spinner";
import { UpdateUserDetails, deleteAllCart } from "../../helper.js";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/imgg.png";
import { ToastContainer, toast } from "react-toastify";
import "./checkout.css";

const CartItem = (props) => {
  const { each } = props;
  const { name, images, quantity, price, id } = each;
  return (
    <div className="mb-2 border shadow-md flex flex-row bg-white rounded-md p-3 items-center justify-between text-black">
      <img className="w-28 rounded-md mr-6" src={images[0]} />

      <h1 className="text-base font-bold">{name}</h1>

      <div className="flex flex-col items-center">
        <p>Price</p>
        <p className="text-base font-bold">{price}</p>
      </div>
      <div className="flex flex-col items-center">
        <p>Quantity</p>
        <p className="text-base font-bold">{quantity}</p>
      </div>
    </div>
  );
};

function Checkout() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState("");
  const [address, setAddress] = useState({});
  const [paymode, setpaymode] = useState("");
  const [selectAddress, setSelectedAddress] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const { cartAmount, CartDetails } = data;
  const itemIds = CartDetails.map((each) => ({
    id: each.id,
    quantity: each.quantity,
  }));

  useEffect(() => {
    if (!data) {
      navigate("/profile");
    }
    getDetails();
  }, []);

  //  delete all cart items_______________________________________
  const deleteMycart = async () => {
    const response = await deleteAllCart();
    if (response.status == 200) setDetails([]);
  };

  // get profile detail for address etc_________________________________________
  const getDetails = async () => {
    const response = await GetUserDetails();
    if (response.status == 200) {
      setDetails(response.data.user);
      setLoading(false);
    }
  };

  // loading view_________________________________________________________________

  const loadingView = () => {
    return (
      <div className="w-full h-full flex flex-row justify-center items-center">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#ff9f1c"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  };

  // pay button_________________________________________________________________


  const payButton = async () => {
    if (!paymode || !selectAddress) {
      alert("Please select a payment mode and address before proceeding.");
      return;
    }

    if (paymode == "cod") {
      const jwtToken = localStorage.getItem("jwtToken");
      const data = { selectAddress, paymode, itemIds };
      const config = {
        method: "post",
        url: "http://localhost:5080/api/v1/order/cod/new",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
        data: JSON.stringify(data),
      };

      axios(config).then((response) => {
        if (response.status == 200) {
          deleteMycart();
          const url = `http://127.0.0.1:5173/success?message=${encodeURIComponent(
            response.data.OrderData.channel_order_id
          )}`;
          window.location.href = url;
        } else {
          // Handle error if needed
        }
      });
    } 
    
    else {
      
     try{
      const getPaymentGatewayId = await axios.get(
        "http://localhost:5080/payment/getkey"
      ); //getting razorpay idy

      const paymentOrderId = await axios.post(
        "http://localhost:5080/api/v1/initpayment",
        { itemIds, cartAmount }
      );
      
      const options = {
        key: getPaymentGatewayId.data.key, // Enter the Key ID generated from the Dashboard
        amount: 1, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Amrobotics", //your business name
        description: "Test Transaction",
        image: {Logo},
        order_id: paymentOrderId.data.paymentId.id,

        handler: (response) => {
          const jwtToken = localStorage.getItem("jwtToken");
          const data = {
            paymentResponse: response,
            selectAddress,
            paymode,
            itemIds,
          };
          const config = {
            method: "post",
            url: "http://localhost:5080/api/v1/order/new",
            headers: {
              Authorization: `Bearer ${jwtToken}`,
              "Content-Type": "application/json",
            },
            data: JSON.stringify(data),
          };

          axios(config)
            .then((response) => {
              if (response.status == 200) {
                const url = `http://127.0.0.1:5173/success?message=${encodeURIComponent(
                  response.data.OrderData.channel_order_id
                )}`;
                deleteMycart();

                window.location.href = url;
              } else {
                // Handle error if needed
              }
            })
            .catch((error) => {
              console.error("Error sending payment confirmation:", error);
              // Handle error if needed
            });
        },
        // callback_url: `http://localhost:5080/api/v1/order/conformPayment/`,
        prefill: {
          name: "ram", //your customer's name
          email: "ram@example.com", //customer email
          contact: "7799325343", //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
     }
     catch(e){
        toast.error("error while initialting payment");
        return;
      
     }

     

    }
  };

  const addressHandleChange = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value, //Dynamically update the correct address field
    });
  };

  const submitAddAddress = async (e) => {
    e.preventDefault();
    const response = await UpdateUserDetails({
      name: "",
      email: "",
      number: "",
      address,
    });
    if (response.status === 201) {
      window.location.reload();
    }
  };

  const successView = () => {
    return (
      <div className="pt-5 pl-10 pr-10 flex flex-row  ">
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
        <div className="w-[50%] ">
          <div className="flex flex-row justify-between mb-5">
            <h1 className="text-center text-xl font-bold ">
              Select your address for delivery
            </h1>
            <button
              className="bg-orange-500 text-white p-1.5 rounded-sm font-semibold text-sm"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              Add Address
            </button>
          </div>

          <dialog id="my_modal_4" className="modal w-6/12">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">Fill address details!</h3>
              <div className=" mt-3">
                <form method="dialog" onSubmit={submitAddAddress}>
                  <div className=" flex flex-col gap-2">
                    <h1 className="font-semibold">Address</h1>

                    <input
                      onChange={addressHandleChange}
                      placeholder="Name"
                      name="name"
                      type="tel"
                      className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "
                    />

                    <div className="flex flex-row gap-2">
                      <input
                        onChange={addressHandleChange}
                        placeholder="Number"
                        name="mobile"
                        type="text"
                        className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "
                      />

                      <input
                        onChange={addressHandleChange}
                        placeholder="E-mail"
                        name="email"
                        type="text"
                        className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "
                      />
                    </div>

                    <div className="flex flex-row gap-2">
                      <input
                        onChange={addressHandleChange}
                        placeholder="Country"
                        name="country"
                        type="text"
                        className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "
                      />

                      <input
                        onChange={addressHandleChange}
                        placeholder="State"
                        name="state"
                        type="text"
                        className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "
                      />
                    </div>

                    <div className="flex flex-row gap-2">
                      <input
                        onChange={addressHandleChange}
                        placeholder="City"
                        name="city"
                        type="text"
                        className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "
                      />

                      <input
                        onChange={addressHandleChange}
                        placeholder="PIN"
                        name="pin"
                        type="number"
                        className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "
                      />
                    </div>
                    <input
                      onChange={addressHandleChange}
                      placeholder="Address"
                      name="address"
                      type="tel"
                      className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "
                    />
                  </div>
                  <div className="flex flex-row justify-between mt-3">
                    <button
                      type="submit"
                      className="btn bg-gray-500 text-white"
                    >
                      Add
                    </button>
                    <button
                      type="button"
                      className="btn bg-gray-500 p-2 text-sm text-white"
                      onClick={() =>
                        document.getElementById("my_modal_4").close()
                      }
                    >
                      Close{" "}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </dialog>

          <div className="removescrollbar flex felx-row gap-2 flex-wrap sm:flex-nowrap overflow-x-scroll">
            {details.addresses.length == 0 ? (
              <div>Add Address</div>
            ) : (
              details.addresses.map((address, index) => (
                <div
                  onClick={() => {
                    setSelectedAddress(address);
                  }}
                  key={index}
                  className=" address-card sm:w-min w-full  bg-gray-200 hover:bg-gray-300 rounded-sm flex  justify-center p-5"
                >
                  <p className="">
                    {address.name} ,{address.mobile} ,{address.email} ,
                    {address.address} ,{address.city},{address.country} ,{" "}
                    {address.state} , {address.pin}
                  </p>
                </div>
              ))
            )}
          </div>

          <div className="bg-gray-100 h-[60vh] mt-2 flex flex-col pl-10 pt-5">
            {selectAddress == "" ? (
              <p>Select address of add address to select</p>
            ) : (
              <div>
                <div className="flex flex-row items-center mb-2">
                  <p> name : </p>
                  <p>{selectAddress.name}</p>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <p> email : </p>
                  <p>{selectAddress.email}</p>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <p> Number : </p>
                  <p>{selectAddress.mobile}</p>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <p> Country : </p>
                  <p>{selectAddress.country}</p>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <p> State : </p>
                  <p>{selectAddress.state}</p>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <p> City : </p>
                  <p>{selectAddress.city}</p>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <p> Pin : </p>
                  <p>{selectAddress.pin}</p>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <p> Address : </p>
                  <p>{selectAddress.address}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-[50%] pl-10 pr-10 flex flex-col mt-12  ">
          <div className="overflow-y-auto h-[50vh]">
            {CartDetails.map((each, index) => (
              <CartItem each={each} />
            ))}
          </div>
          <div className="payment-part mt-5">
            <h1 className="mb-3">Select type of Payment</h1>
            <div className="flex gap-4 mb-4">
              <div className="flex flex-row gap-2 items-center">
                <input
                  onClick={() => {
                    setpaymode("prepaid");
                  }}
                  name="payment-type"
                  type="radio"
                />
                <label>Online</label>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <input
                  onClick={() => {
                    setpaymode("cod");
                  }}
                  name="payment-type"
                  type="radio"
                />
                <label>COD</label>
              </div>
            </div>

            <div className="flex flex-row gap-2 items-center justify-between">
              <h1>Amount :</h1>
              <p>{cartAmount}</p>
            </div>
            <div className="flex flex-row gap-2 items-center justify-between">
              <h1>Added Tax :</h1>
              <p>----</p>
            </div>
            <div className="flex flex-row gap-2 items-center justify-between">
              <h1>Delivery Charge :</h1>
              <p>----</p>
            </div>
            <hr className="text-red-200 bg-gray-500 mt-5 mb-5" />
            <div className="flex flex-row gap-2 items-center justify-between">
              <h1>Total Amount :</h1>
              <p>{cartAmount}</p>
            </div>
            <div className="flex justify-end mt-5">
              <button
                onClick={payButton}
                className="p-1.5 rounded-sm bg-orange-500 font-semibold text-sm text-white"
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return loadingView();
  } else {
    return successView();
  }
}

export default Checkout;
