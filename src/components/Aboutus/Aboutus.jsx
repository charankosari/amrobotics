import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './About.css'
 export default function MyComponent(props) {
  return (
    <div className="overflow-hidden">
        <Navbar/>
    <div className="bg-white flex flex-col pb-12">
      <div >
      <img
        loading="lazy"
        srcSet="https://c4.wallpaperflare.com/wallpaper/39/346/426/digital-art-men-city-futuristic-night-hd-wallpaper-preview.jpg"
        className="aspect-[2.43] object-contain object-center w-full overflow-hidden self-stretch max-md:max-w-full"
      />
      </div>
      <div className="text-neutral-700 text-8xl font-semibold self-center  max-md:max-w-full max-md:text-4xl  p-4" id="head">
        Welcome to AM Robotics
      </div>
      <div className="text-black text-3xl  self-center w-[auto]  max-md:max-w-full  px-12" id="topic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </div>
      <img
        loading="lazy"
        srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
        className=" object-contain object-center w-[699px] h-auto  overflow-hidden self-center max-w-full pt-4 "
      />
      <div className="text-neutral-700 text-8xl font-semibold self-center whitespace-nowrap  m-10"id="head" >
        Our Mission
      </div>
      <div className="text-neutral-700 text-3xl  p-4 px-12 self-center w-[auto]  max-md:max-w-full  " id="topic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eax
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </div>
      <div className="self-stretch w-full mt-20 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col-reverse max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto px-5 max-md:max-w-full max-md:mt-10" id="div">
              <div className="text-neutral-700 text-6xl font-semibold max-md:max-w-full" id="sidehead">
                Our Vision
              </div>
              <div className="text-neutral-700 text-3xl mt-9 w-auto max-md:max-w-full" id="topic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
              className=" object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch w-full max-md:max-w-full">
        <div className="gap-5 flex  max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[51%] max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
              className="aspect-[1.54] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-4"
            />
          </div>
          <div className="flex flex-col items-stretch w-[49%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto px-5 max-md:max-w-full max-md:mt-10" id="div">
              <div className="text-neutral-700 text-6xl font-semibold max-md:max-w-full" id="sidehead">
                Quality
              </div>
              <div className="text-neutral-700 text-3xl mt-7  max-md:max-w-full" id="topic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col-reverse max-md:items-stretch max-md:gap-0">
          <div className="flex  items-stretch w-[49%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch my-auto px-5 max-md:max-w-full max-md:mt-10" id="div">
              <div className="text-neutral-700 text-6xl font-semibold max-md:max-w-full" id="sidehead">
                Innovation
              </div>
              <div className="text-neutral-700 text-3xl  max-md:max-w-full" id="topic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
                labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
              className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-7"
            />
          </div>
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1060px] flex-col items-stretch mt-24 mb-6 px-5 max-md:max-w-full max-md:mt-10" id="div">
        <div className="text-neutral-700 text-3xl w-auto max-md:max-w-full" id="topic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
        <div className="flex  gap-3  mt-7 self-end max-md:mr-3.5">
          <img
            loading="lazy"
            srcSet="https://c4.wallpaperflare.com/wallpaper/663/420/862/car-purple-retrowave-landscape-wallpaper-preview.jpg"
            className="  object-center w-[70px] h-[70px]  rounded-full  "
          />
          <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
            <div className="text-black text-3xl font-semibold whitespace-nowrap">
              Sanjay Bhargav B
            </div>
            <div className="text-zinc-800 text-opacity-60 text-xl font-medium mt-2.5">
              C.E.O AM Robotics
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}


