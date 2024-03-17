import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TbSteeringWheel } from "react-icons/tb";
import { GiCarWheel  } from "react-icons/gi";
import { GiWeight } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5"
import picture from "../assets/rover_home_page.png";

import './VehicleCarousel.css'
function Vehicles() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-white  pt-3">
      <Slider {...settings}>
      {/* left */}
<div>
      <div className="flex flex-col h-[85vh] text-blackn sm:flex-row" id="s" >
        <div className="w-[60%] flex justify-center items-center flex-col " id="full">
          <img src={picture} alt="" className="h-[70%] w-auto  " />
          <h1 className="flex flex-row font-bold sm:text-3xl text-xl gap-3 font-sans mr-[14rem]  text-black" id="margin">
            ROVER{" "}
            <h1 className=" text-[#FF9F1C]  font-bold sm:text-3xl text-xl ">
              4WDXL60R
            </h1>
          </h1>
        </div>

<div className="flex justify-center items-center" id="none">
        <div className="bg-black h-[70%] w-[2px]" ></div>
        </div>
     
        <div className="w-[40%] flex flex-col items-center justify-center gap-[2rem]" id="full">
          <div className="flex flex-row   rounded-md w-[253px] h-[66px] text-black">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <GiCarWheel  className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black p-2">
              <h1 className="text-center font-bold  text-[16.72px]">
                4 Wheel Drive
              </h1>
              <p className="text-center text-black text-[12px]">
                Individual motrs for better maneuvareability.
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px]">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
            <GiWeight  className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              5 KG Payload
              </h1>
              <p className="text-center text-black text-[12px]">
              Can bear upto a capacitry of 5kg paload like cameras etc...
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px]">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <TbSteeringWheel className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              Turning Mechanism
              </h1>
              <p className="text-center text-black text-[12px]">
              4 Wheel turning mechanism for a better experience.
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px] text-black">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <IoSettingsOutline className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              High Torque Motors
              </h1>
              <p className="text-center text-black text-[12px]">
              Powerfull 9000 rpm mototrs for better speed.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

    {/* right */}
<div>
      <div className="flex flex-col h-[85vh] text-blackn sm:flex-row-reverse" id="s" >
        <div className="w-[60%] flex justify-center items-center flex-col " id="full">
          <img src={picture} alt="" className="h-[70%] w-auto  " />
          <h1 className="flex flex-row font-bold sm:text-3xl text-xl gap-3 font-sans mr-[14rem]  text-black" id="margin">
            ROVER{" "}
            <h1 className=" text-[#FF9F1C]  font-bold sm:text-3xl text-xl ">
              4WDXL60R
            </h1>
          </h1>
        </div>

<div className="flex justify-center items-center" id="none">
        <div className="bg-black h-[70%] w-[2px]" ></div>
        </div>
     
        <div className="w-[40%] flex flex-col items-center justify-center gap-[2rem]" id="full">
          <div className="flex flex-row   rounded-md w-[253px] h-[66px] text-black">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <GiCarWheel  className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
                4 Wheel Drive
              </h1>
              <p className="text-center text-black text-[12px]">
                Individual motrs for better maneuvareability.
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px]">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
            <GiWeight  className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              5 KG Payload
              </h1>
              <p className="text-center text-black text-[12px]">
              Can bear upto a capacitry of 5kg paload like cameras etc...
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px]">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <TbSteeringWheel className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              Turning Mechanism
              </h1>
              <p className="text-center text-black text-[12px]">
              4 Wheel turning mechanism for a better experience.
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px] text-black">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <IoSettingsOutline className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              High Torque Motors
              </h1>
              <p className="text-center text-black text-[12px]">
              Powerfull 9000 rpm mototrs for better speed.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>



      {/* once again */}


            {/* left */}
<div>
      <div className="flex flex-col h-[85vh] text-blackn sm:flex-row" id="s" >
        <div className="w-[60%] flex justify-center items-center flex-col " id="full">
          <img src={picture} alt="" className="h-[70%] w-auto  " />
          <h1 className="flex flex-row font-bold sm:text-3xl text-xl gap-3 font-sans mr-[14rem]  text-black" id="margin">
            ROVER{" "}
            <h1 className=" text-[#FF9F1C]  font-bold sm:text-3xl text-xl ">
              4WDXL60R
            </h1>
          </h1>
        </div>

<div className="flex justify-center items-center" id="none">
        <div className="bg-black h-[70%] w-[2px]" ></div>
        </div>
     
        <div className="w-[40%] flex flex-col items-center justify-center gap-[2rem]" id="full">
          <div className="flex flex-row   rounded-md w-[253px] h-[66px] text-black">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <GiCarWheel  className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
                4 Wheel Drive
              </h1>
              <p className="text-center text-black text-[12px]">
                Individual motrs for better maneuvareability.
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px]">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
            <GiWeight  className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              5 KG Payload
              </h1>
              <p className="text-center text-black text-[12px]">
              Can bear upto a capacitry of 5kg paload like cameras etc...
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px]">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <TbSteeringWheel className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              Turning Mechanism
              </h1>
              <p className="text-center text-black text-[12px]">
              4 Wheel turning mechanism for a better experience.
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px] text-black">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <IoSettingsOutline className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              High Torque Motors
              </h1>
              <p className="text-center text-black text-[12px]">
              Powerfull 9000 rpm mototrs for better speed.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

    {/* right */}
<div>
      <div className="flex flex-col h-[85vh] text-blackn sm:flex-row-reverse" id="s" >
        <div className="w-[60%] flex justify-center items-center flex-col " id="full">
          <img src={picture} alt="" className="h-[70%] w-auto  " />
          <h1 className="flex flex-row font-bold sm:text-3xl text-xl gap-3 font-sans mr-[14rem]  text-black" id="margin">
            ROVER{" "}
            <h1 className=" text-[#FF9F1C]  font-bold sm:text-3xl text-xl ">
              4WDXL60R
            </h1>
          </h1>
        </div>

<div className="flex justify-center items-center" id="none">
        <div className="bg-black h-[70%] w-[2px]" ></div>
        </div>
     
        <div className="w-[40%] flex flex-col items-center justify-center gap-[2rem]" id="full">
          <div className="flex flex-row   rounded-md w-[253px] h-[66px] text-black">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <GiCarWheel  className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
                4 Wheel Drive
              </h1>
              <p className="text-center text-black text-[12px]">
                Individual motrs for better maneuvareability.
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px]">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
            <GiWeight  className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              5 KG Payload
              </h1>
              <p className="text-center text-black text-[12px]">
              Can bear upto a capacitry of 5kg paload like cameras etc...
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px]">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <TbSteeringWheel className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              Turning Mechanism
              </h1>
              <p className="text-center text-black text-[12px]">
              4 Wheel turning mechanism for a better experience.
              </p>
            </div>
          </div>
          <div className="flex flex-row   rounded-md w-[253px] h-[66px] text-black">
            <div className="flex items-center justify-center px-[14px]  bg-[#FF9F1C] rounded-l-md">
              <IoSettingsOutline className="h-[30px] w-[30px] text-white" />
            </div>
            <div className="bg-[#EEEEEE] rounded-r-md text-black">
              <h1 className="text-center font-bold  text-[16.72px]">
              High Torque Motors
              </h1>
              <p className="text-center text-black text-[12px]">
              Powerfull 9000 rpm mototrs for better speed.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>

      </Slider>
    </div>
  );
}

export default Vehicles;
