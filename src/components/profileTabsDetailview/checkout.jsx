import { useState, React, useEffect } from "react";
import { GetUserDetails } from "../../helper.js";
import { ThreeDots } from "react-loader-spinner";
import { UpdateUserDetails } from "../../helper.js";
import { useLocation,useNavigate } from "react-router-dom";
import "./checkout.css"

const CartItem=(props)=>{
  const {each}=props
  console.log(each)
  const{name,images,quantity,price,id}=each
  return(
    <div className='mb-2 border shadow-md flex flex-row bg-white rounded-md p-3 items-center justify-between text-black' >
      <img className='w-28 rounded-md mr-6' src={images[0]?.url} />
        
          <h1 className='text-base font-bold'>{name}</h1>

          <div className="flex flex-col items-center">
          <p>Price</p>
          <p className='text-base font-bold'>{price}</p>
          </div>
          <div  className="flex flex-col items-center">
          <p>Quantity</p>
          <p className='text-base font-bold'>{quantity}</p>
          </div>
    
  
   </div>
  )
}




function Checkout() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState("");
  const [address, setAddress] = useState({});
  const [selectAddress,setSelectedAddress]=useState("")
  const location=useLocation();
  const navigate=useNavigate();
  const data=location.state

  useEffect(() => {
   if(!data){
    navigate('/profile')
   }
    getDetails();
  }, []);

  const getDetails = async () => {
    const response = await GetUserDetails();
    console.log(response);
    if (response.status == 200) {
      console.log(response.data.user);
      setDetails(response.data.user);
      setLoading(false);
    }
  };

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
      window.location.reload()
    }
  };

  const successView = () => {
    return (
      <div className="pt-5 pl-10 pr-10 flex flex-row  ">
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
              <button type="submit" className="btn bg-gray-500 text-white">
                    Add
                  </button>
                  <button type="button" className="btn bg-gray-500 p-2 text-sm text-white" onClick={() => document.getElementById('my_modal_4').close()}>Close </button>
              </div>
                </form>
                
              </div>
            </div>
          </dialog>

          <div 
            className="removescrollbar flex felx-row gap-2 flex-wrap sm:flex-nowrap overflow-x-scroll"
          >
            {details.addresses.length == 0 ? (
              <div>Add Address</div>
            ) : (
              details.addresses.map((address, index) => (
                <div
                   onClick={()=>{setSelectedAddress(address)}}
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

            {
              selectAddress==""?<p>Select address of add address to select</p>:
             <div >
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
            }
            {/* <div className="flex flex-row items-center mb-2">
              <p>Email : </p>
              <p> iamsrinath@gmail.com</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <p>Number : </p>
              <p> 98977898</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <p>Country : </p>
              <p> India</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <p>State :</p>
              <p> Telangana</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <p>City :</p>
              <p> Kompally</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <p>Pin :</p>
              <p> 50001</p>
            </div>
            <div className="flex flex-row items-center mb-2">
              <p>address : </p>
              <p>kompally, near vivekananda statue,</p>
            </div> */}
          </div>
        </div>

        <div className="w-[50%] pl-10 pr-10 flex flex-col mt-12  ">
          <div className="overflow-y-auto h-[50vh]">
         { data.map((each, index) =><CartItem each={each}/> )}
          </div>
         <div className="payment-part mt-5">
         <h1 className="mb-3">Select type of Payment</h1>
          <div className="flex gap-4 mb-4">
            <div className="flex flex-row gap-2 items-center">
              <input name="payment-type" type="radio" />
              <label>Online</label>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <input name="payment-type" type="radio" />
              <label>COD</label>
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center justify-between">
            <h1>Amount :</h1>
            <p>12,345/-</p>
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
            <p>12,345/-</p>
          </div>
          <div className="flex justify-end mt-5">
            <button className="p-1.5 rounded-sm bg-orange-500 font-semibold text-sm text-white">
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
