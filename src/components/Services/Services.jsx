import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function MyComponent(props) {
  return (
    <div>
        <Navbar/>
    <div className="bg-white flex flex-col items-center px-20 py-12 max-md:px-5">
      <div className="text-black text-3xl font-semibold whitespace-nowrap mt-5">
        Our services
      </div>
      <div className="text-black text-opacity-80 text-center text-2xl max-w-[517px] mt-5 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt{" "}
      </div>
      <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className=" object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold self-center whitespace-nowrap mt-6">
                3D Modelling
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className=" object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold self-center whitespace-nowrap mt-6">
                3D Printing
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className=" object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold self-center whitespace-nowrap mt-6">
                Prototyping
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className=" object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold self-center whitespace-nowrap mt-6">
                Product Design
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="self-stretch mt-12 mb-11 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className="  object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold self-center whitespace-nowrap mt-6">
                Industrial Automation <br />  & Robotics
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className="  object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold self-center whitespace-nowrap mt-6">
                Custom R&D <br /> Projects
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className="  object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold self-center whitespace-nowrap mt-6">
                Agricultural Robots
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className="  object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold mt-6">
               Serving Humanoid <br /> Robots
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch mt-12 mb-11 max-md:max-w-full max-md:my-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-3/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className="  object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold self-center whitespace-nowrap mt-6">
                DIY Robokits
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className="  object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold self-center whitespace-nowrap mt-6">
                Manufacturing
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className="  object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold self-center whitespace-nowrap mt-6">
                Reverse Engineering
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-3/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:mt-9">
              <img
                loading="lazy"
                srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
                className="  object-contain object-center w-full overflow-hidden"
              />
              <div className="text-neutral-700 text-center text-2xl font-semibold mt-6">
                Metal Fabrication <br />& Assembly
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}


