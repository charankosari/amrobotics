import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from "../assets/rover_home_page.png";
import settingss from '../assets/Settings.png';
import car from '../assets/car.png';
import steering from '../assets/steering-wheel.png';
import weight from '../assets/weight.png'
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
      



<div className="h-auto ml-4 ">
          <div className="flex flex-col sm:flex-row  ">
            <div className="w-[100%] sm:w-[70%]  " id="bigimg">
              <img
                src={img2}
                className="w-[100%] object-contain    h-[200px] sm:h-[80vh]  sm:ml-0 ml-8 "
                alt=""
              />
              <div id="one">
              <h1 className="flex flex-row font-bold sm:text-3xl text-xl gap-3 font-sans ml-6 " >
                ROVER <h1 className="text-orange-500  font-bold sm:text-3xl text-xl ">4WDXL60R</h1>
              </h1>
              </div>
            </div>
            <div className="flex justify-center mr-7 mb-0 md:pb-0 sm:pb-40 w-[30%]  border-l-2 border-l-zinc-900 " id="border">
              <div className="flex flex-col gap-3 bg-white w-[30%] justify-center items-center py-3">
                
                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
                   
                    <img src={car} alt="" className="h-14 w-14 " />{" "}
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[60px]" >
                    <h1 className="text-center font-bold text-black pt-4 text-2xl">
                      4 Wheel Drive
                    </h1>
                    <p className="text-center text-black ">
                      Individual motrs for better maneuvareability.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
                    <img src={weight} alt="" className="h-14 w-14 " />{" "}
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl">
                 
                      5 KG Payload
                    </h1>
                    <p className="text-center text-black">
                 
                      Can bear upto a capacitry of 5kg paload like cameras
                      etc...
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
               
                    <img src={steering} alt="" className="h-14 w-14 " />{" "}
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl ">
                    
                      Turning Mechanism
                    </h1>
                    <p className="text-center text-black">
                      4 Wheel turning mechanism for a better experience.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
           
                    <img src={settingss} alt="" className="h-14 w-14 " />{" "}
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl">
                      High Torque Motors
                    </h1>
                    <p className="text-center text-black">
                  
                      Powerfull 9000 rpm mototrs for better speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>






        <div className="h-[85vh] ml-4 ">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex justify-center items-center mr-8 sm:mr-32 sm:ml-32 ml-0 " id="some">
            <div className="flex flex-col gap-3 bg-white w-[30%] justify-center items-center py-3  ">
                
                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
                   
                    <img src={car} alt="" className="h-14 w-14 " />
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[60px]" >
                    <h1 className="text-center font-bold text-black pt-4 text-2xl">
                      4 Wheel Drive
                    </h1>
                    <p className="text-center text-black ">
                      Individual motrs for better maneuvareability.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
                    <img src={weight} alt="" className="h-14 w-14 " />
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl">
                 
                      5 KG Payload
                    </h1>
                    <p className="text-center text-black">
                 
                      Can bear upto a capacitry of 5kg paload like cameras
                      etc...
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
               
                    <img src={steering} alt="" className="h-14 w-14 " />{" "}
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl ">
                    
                      Turning Mechanism
                    </h1>
                    <p className="text-center text-black">
                      4 Wheel turning mechanism for a better experience.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md border-l-2" id="car" >
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
           
                    <img src={settingss} alt="" className="h-14 w-14 " />
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl">
                      High Torque Motors
                    </h1>
                    <p className="text-center text-black">
                  
                      Powerfull 9000 rpm mototrs for better speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] sm:w-[70%] sm:h-[80vh] h-auto flex flex-col items-center border-l-2 border-l-zinc-800" id="yeah">
              <img
                src={img2}
                className="w-[100%]   h-[200px] sm:h-[78vh] object-contain  sm:ml-0 ml-4 "
                alt=""
              />
              <div id="one">
              <h1 className="flex flex-row font-bold sm:text-3xl text-xl gap-3 font-sans ml-6 " >
                ROVER <h1 className="text-orange-500  font-bold sm:text-3xl text-xl ">4WDXL60R</h1>
              </h1>
              </div>
            </div>
          </div>
        </div>


        <div className="h-auto ml-4 ">
          <div className="flex flex-col sm:flex-row  ">
            <div className="w-[100%] sm:w-[70%]  " id="bigimg">
              <img
                src={img2}
                className="w-[100%] object-contain    h-[200px] sm:h-[80vh]  sm:ml-0 ml-8 "
                alt=""
              />
              <div id="one">
              <h1 className="flex flex-row font-bold sm:text-3xl text-xl gap-3 font-sans ml-6 " >
                ROVER <h1 className="text-orange-500  font-bold sm:text-3xl text-xl ">4WDXL60R</h1>
              </h1>
              </div>
            </div>
            <div className="flex justify-center mr-7 mb-0 md:pb-0 sm:pb-40 w-[30%]  border-l-2 border-l-zinc-900 " id="border">
              <div className="flex flex-col gap-3 bg-white w-[30%] justify-center items-center py-3">
                
                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
                   
                    <img src={car} alt="" className="h-14 w-14 " />{" "}
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[60px]" >
                    <h1 className="text-center font-bold text-black pt-4 text-2xl">
                      4 Wheel Drive
                    </h1>
                    <p className="text-center text-black ">
                      Individual motrs for better maneuvareability.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
                    <img src={weight} alt="" className="h-14 w-14 " />{" "}
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl">
                 
                      5 KG Payload
                    </h1>
                    <p className="text-center text-black">
                 
                      Can bear upto a capacitry of 5kg paload like cameras
                      etc...
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
               
                    <img src={steering} alt="" className="h-14 w-14 " />{" "}
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl ">
                    
                      Turning Mechanism
                    </h1>
                    <p className="text-center text-black">
                      4 Wheel turning mechanism for a better experience.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
           
                    <img src={settingss} alt="" className="h-14 w-14 " />{" "}
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl">
                      High Torque Motors
                    </h1>
                    <p className="text-center text-black">
                  
                      Powerfull 9000 rpm mototrs for better speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>






        <div className="h-[85vh] ml-4 ">
          <div className="flex flex-col-reverse sm:flex-row">
            <div className="flex justify-center mr-8 sm:mr-12 sm:ml-12 ml-0 " id="some">
            <div className="flex flex-col gap-3 bg-white w-[30%] justify-center items-center py-3  ">
                
                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
                   
                    <img src={car} alt="" className="h-14 w-14 " />{" "}
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[60px]" >
                    <h1 className="text-center font-bold text-black pt-4 text-2xl">
                      4 Wheel Drive
                    </h1>
                    <p className="text-center text-black ">
                      Individual motrs for better maneuvareability.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
                    <img src={weight} alt="" className="h-14 w-14 " />
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl">
                 
                      5 KG Payload
                    </h1>
                    <p className="text-center text-black">
                 
                      Can bear upto a capacitry of 5kg paload like cameras
                      etc...
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md" id="car">
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
               
                    <img src={steering} alt="" className="h-14 w-14 " />{" "}
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl ">
                    
                      Turning Mechanism
                    </h1>
                    <p className="text-center text-black">
                      4 Wheel turning mechanism for a better experience.
                    </p>
                  </div>
                </div>

                <div className="flex flex-row bg-[#e0e1dd] w-[400px] h-[100px] rounded-md border-l-2" id="car" >
                  <div className="bg-[#fb8500] h-[100px] w-[80px] flex justify-center items-center rounded-md" id="image">
           
                    <img src={settingss} alt="" className="h-14 w-14 " />
                  </div>
                  <div className="flex flex-col justify-center w-[300px] h-[70px]">
                    <h1 className="text-center font-bold text-black  pt-4 text-2xl">
                      High Torque Motors
                    </h1>
                    <p className="text-center text-black">
                  
                      Powerfull 9000 rpm mototrs for better speed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] sm:w-[70%] sm:h-[80vh] h-auto  flex flex-col items-center border-l-2 border-l-zinc-800" id="yeah">
              <img
                src={img2}
                className="w-[100%]   h-[200px] sm:h-[78vh] object-contain  sm:ml-0 ml-4 "
                alt=""
              />
              <div id="one">
              <h1 className="flex flex-row font-bold sm:text-3xl text-xl gap-3 font-sans ml-6 " >
                ROVER <h1 className="text-orange-500  font-bold sm:text-3xl text-xl ">4WDXL60R</h1>
              </h1>
              </div>
            </div>
          </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default Vehicles;
