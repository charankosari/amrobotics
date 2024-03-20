import { useEffect, useState } from "react";
import { GetUserDetails } from "../../helper.js";
import {ThreeDots} from 'react-loader-spinner'
import {UpdateUserDetails} from "../../helper.js"



const UserProfile=()=>{
    // const [details, setDetails] = useState("");
    const [loading, setLoading] = useState(true);
    const [editMode,setEditMode]=useState(false);
    const [detailsFetched,setDetailsFetched]=useState(false)
    const [isAddressVisible, setIsAddressVisible] = useState(false);
    const [details, setDetails] = useState({
      name: "",
      email: "",
      number: "",
      address:[]
    });
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      number: "",
      address:{
        "country":"",
        "state":"",
        "city":"",
        "mobile":"",
        "pin":""
      }
    });
  
  
    console.log(details)
    useEffect(() => {
      if (!detailsFetched) { 
        getDetails();
    }
    }, []);
  
    const getDetails = async () => {
      const response = await GetUserDetails();
      console.log(response);
      if (response.status == 200) {
        console.log(response.data.user)
        const data={name:response.data.user.name,email:response.data.user.email,number:response.data.user.number,address:""}
        setDetails(response.data.user);
        setDetailsFetched(true)
        setFormData(data)
        setLoading(false);
      }
    };


    const addressess = [
      "Lorem ipsum dolor, sit amet consectetui e perferendis quo perspiciatis, voluptatem architecto alias inventore!",
      "Lorem ipsum dolor, sit amet consectetui e perferendis quo perspiciatis, voluptatem architecto alias inventore!",
    ];
    

    const loadingView = () => {
      return (
        <div className='w-full h-full flex flex-row justify-center items-center'>
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
      )
    };

    const handleEdit = () => {
      setEditMode(true);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(formData)
      const response = await UpdateUserDetails(formData);
      if (response.status === 201) {
        console.log(response)
        setDetails(response.data.user);
        setEditMode(false);
      }
    };

    const handleChange = (e) => {
      console.log(e.target.name, e.target.value)
      setDetails({ ...details, [e.target.name]: e.target.value });
    };

    const handleCheckboxChange = (e) => {
      setIsAddressVisible(e.target.checked);
  };

    const addressHandleChange = (e) => {
      console.log(formData)
      const {name,value}=e.target
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [name]: value // Dynamically update the correct address field
        }
      });
    };
  

    const successView = () => {
        const { _id, name, email, number,address} = details;
 
    return(
    <>
    {
      editMode?<div className="ml-[44px] mt-[44px]" >
        <h1 className="text-xl mb-2  font-semibold">Edit Profile</h1>
          <form  className=" flex flex-col gap-4 max-w-[500px] shadow-2xl p-4 rounded-md" onSubmit={handleSubmit}>

            <div className=" w-[100%] flex flex-col">
              <label className="text-md font-semibold">Name</label>
              <input value={name} name="name"  onChange={handleChange} type="text" className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "/>
            </div>
            <div className=" w-[100%] flex flex-col">
              <label className="text-md font-semibold ">Email</label>
              <input value={email} name="email" onChange={handleChange} type="text" className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "/>
            </div>
            <div className=" w-[100%] flex flex-col">
              <label className="text-md font-semibold">Mobile</label>
              <input value={number} name="number" onChange={handleChange} type="text" className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "/>
            </div>

           <div className="flex flex-row align-center gap-1">
            <lable className="text-md " htmlFor="addAddressId">Addaddress</lable>
            <input
                type="checkbox"
                id="addAddressId"
                checked={isAddressVisible}
                onChange={handleCheckboxChange}
            />
           </div>

            {
              isAddressVisible&& <div className=" flex flex-col gap-2">
              <h1 className="font-semibold">Address</h1>

             <div  className="flex flex-row gap-2">
             <input onChange={addressHandleChange} placeholder="Country" name="country" type="text" className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "/>

              <input onChange={addressHandleChange}  placeholder="State"  name="state" type="text" className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "/>
             </div>

             <div className="flex flex-row gap-2">
             <input  onChange={addressHandleChange}  placeholder="City"  name="city" type="text" className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "/>

              <input onChange={addressHandleChange}   placeholder="PIN"  name="pin" type="number" className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "/>     
              </div>     
              <input  onChange={addressHandleChange}  placeholder="Number"  name="mobile" type="tel" className=" outline-none w-[100%] bg-transparent border border-gray-500 p-3 rounded-md "/>        
            
            </div>
            }
            

           <button className="self-center bg-[#ff9f1c] px-6 py-2 rounded-sm text-white">save</button>
          </form>

      </div>:
      <div className="flex flex-col ml-[44px] mt-[44px]" id="a1">

        <div className="text-6xl mb-[4rem]" id="prof">
          Profile Details
        </div>
        
        <div className="flex flex-row ">
          <div className="flex flex-col w-[70%]">
            <div className="text-4xl mb-4" id="prof-name">
              {name}
            </div>
            <div className="flex flex-row gap-24" id="col">
              <h1 className="text-4xl" id="prof-name">
                {number}
              </h1>
              <h1 className="text-4xl " id="prof-name">
                {email}
              </h1>
            </div>
          </div>
          <div className="w-[190px] h-[190px] " id="prof-img">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt=""
              id="prof-img"
              className="w-[190px] h-[190px] rounded-xl"
            />
          </div>
        </div>

       
        <div className="flex flex-col mt-[4rem] gap-4" id="mt">
          <div className="text-6xl" id="prof">
            Previous Adresses
          </div>
          <div className="p-2 flex gap-2 flex-wrap" >
           {
            address.length==0?<div>no address</div>:
          
            address.map((address, index) =>(
              <div key={index} className="w-[95%] sm:w-[200px] bg-white rounded-sm flex justify-center p-5">
                <p>{address.city} , {address.country} , {address.state} , {address.pin}</p>
                </div>
            ))
            
            }


            
           
          </div>
        </div>
        <button onClick={handleEdit} className="bg-[#FF9F1C] w-[2190px] h-[75px] rounded-md  text-white text-semibold mt-4 text-xl"id="or-b">
          Edit Profile
        </button>

     
    </div>
    }
    </>
    )
  }

  if (loading) {
    return loadingView();
  } else {
    return successView();
  }

}

  export default UserProfile