import * as React from "react";
import Navbar from "../Navbar/Navbar";
import { FaEye } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import Slider from 'react-slick';
import './Blog.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function MyComponent(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows:false,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 2000,  
  };
    const url='https://c4.wallpaperflare.com/wallpaper/795/764/910/skeleton-head-technology-bone-wallpaper-preview.jpg';
  return (
    <div>
        <Navbar/>
        <div className="flex-row">

       
    <div className="items-start bg-white flex flex-col px-14 py-12 max-md:px-5 w-[75%]" id="fulll">
      <div className="text-neutral-700 text-6xl font-semibold self-stretch mt-2.5 max-md:max-w-full" id="spec-head">
        Lorem ipsum dolor sit amet, conetar adipiscing elit kortzn ?
      </div>
      <img
        loading="lazy"
        srcSet={url}
        className="aspect-[3.47] object-contain object-center w-full overflow-hidden self-stretch mt-14 max-md:max-w-full max-md:mt-10"
      />
      <div className="text-black  text-3xl self-stretch mt-12 max-md:max-w-full max-md:mt-10" id="spec-cont">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. A condimentum vitae
        sapien pellentesque habitant morbi. Lorem dolor sed viverra ipsum nunc
        aliquet. Faucibus turpis in eu mi bibendum. Facilisi morbi tempus
        iaculis urna id. Proin nibh nisl condimentum id venenatis a condimentum
        vitae sapien. Eu turpis egestas pretium aenean pharetra magna ac
        placerat. Elit scelerisque mauris pellentesque pulvinar pellentesque
        habitant. Tempus quam pellentesque nec nam. Gravida in fermentum et
        sollicitudin ac orci phasellus egestas.
        <br />
        <br />
        <br />
        Quisque id diam vel quam elementum. Non enim praesent elementum
        facilisis. Tristique et egestas quis ipsum suspendisse ultrices gravida
        dictum fusce. Lacus sed viverra tellus in hac habitasse. Sit amet
        aliquam id diam maecenas ultricies mi. Volutpat est velit egestas dui id
        ornare arcu. Ut sem viverra aliquet eget sit amet tellus cras
        adipiscing. Iaculis urna id volutpat lacus laoreet non curabitur gravida
        arcu. Mi proin sed libero enim. Integer quis auctor elit sed vulputate
        mi. Id donec ultrices tincidunt arcu non. Leo in vitae turpis massa sed.
        Eget nullam non nisi est sit amet facilisis magna etiam. Amet mattis
        vulputate enim nulla aliquet. Luctus accumsan tortor posuere ac ut
        consequat semper viverra.
        <br />
        <br />
        <br />
        Quisque id diam vel quam elementum. Non enim praesent elementum
        facilisis. Tristique et egestas quis ipsum suspendisse ultrices gravida
        dictum fusce. Lacus sed viverra tellus in hac habitasse. Sit amet
        aliquam id diam maecenas ultricies mi. Volutpat est velit egestas dui id
        ornare arcu. Ut sem viverra aliquet eget sit amet tellus cras
        adipiscing. Iaculis urna id volutpat lacus laoreet non curabitur gravida
        arcu. Mi proin sed libero enim. Integer quis auctor elit sed vulputate
        mi. Id donec ultrices tincidunt arcu non. Leo in vitae turpis massa sed.
        Eget nullam non nisi est sit amet facilisis magna etiam. Amet mattis
        vulputate enim nulla aliquet. Luctus accumsan tortor posuere ac ut
        consequat semper viverra.
        <br />
        <br />
        <br />
        Elementum facilisis leo vel fringilla est ullamcorper eget. In nulla
        posuere sollicitudin aliquam. Lectus quam id leo in vitae turpis massa
        sed. Fames ac turpis egestas maecenas pharetra convallis. Volutpat ac
        tincidunt vitae semper quis. Diam sit amet nisl suscipit adipiscing
        bibendum est. Tellus elementum sagittis vitae et leo duis ut diam quam.
        Velit scelerisque in dictum non consectetur a. Id interdum velit laoreet
        id donec. Purus gravida quis blandit turpis cursus in hac habitasse
        platea. Amet dictum sit amet justo donec. Facilisis mauris sit amet
        massa vitae tortor condimentum lacinia. Ut sem nulla pharetra diam.
        Malesuada fames ac turpis egestas integer eget aliquet. Amet luctus
        venenatis lectus magna fringilla. Nunc mi ipsum faucibus vitae aliquet.
      </div>
      
      <div className="flex w-[374px] max-w-full justify-between gap-5 self-start items-start">
        
        
      </div>
     
        
      </div>
 
    </div>


    <div className="pt-12 w-[20%]  fixed right-10 top-32"  id="nothing">
            <h1 className="font-bold text-4xl text-black" id="head">Similar Blogs</h1>
            <br />
            <div className="h-[120px] w-full bg-zinc-700 px-4 pt-2 rounded-md flex flex-col"  id="height">
              <div className="flex flex-row items-center">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col">
                  <h1 className="w-[87%] px-4 text-2xl text-white" id="textt">
                    Creating the feauturistic miniature on-field Robotos
                  </h1>
                  <div className="flex flex-row  ml-2 gap-6">
                    <div className="flex items-stretch justify-center gap-1.5">
                      <AiOutlineLike className="mt-1 h-6 w-6 text-orange-500" id="likee" />
                      <div className="text-white text-xl self-start " id="numm">69</div>
                    </div>
                    <div className="flex items-stretch gap-2.5 self-start justify-center">
                      <FaEye className="mt-1 h-6 w-6 text-orange-500" id="likee"/>
                      <div className="text-white text-xl" id="numm">872</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="h-[120px] w-full bg-zinc-700 px-4 pt-2 rounded-md flex flex-col" id="height">
              <div className="flex flex-row items-center">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  className="w-14 h-14 rounded-full"
                />
                <div className="flex flex-col">
                  <h1 className="w-[87%] px-4 text-white text-2xl" id="textt">
                    Creating the feauturistic miniature on-field Robotos
                  </h1>
                  <div className="flex flex-row  ml-2 gap-6">
                    <div className="flex items-stretch justify-between gap-1.5">
                      <AiOutlineLike className="mt-1 w-6 h-6  text-orange-500" id="likee" />
                      <div className="text-white text-xl self-start " id="numm" >69</div>
                    </div>
                    <div className="flex items-stretch gap-2.5 self-start">
                      <FaEye className="mt-1 w-6 h-6 text-orange-500" id="likee" />
                      <div className="text-white text-xl" id="numm">872</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="w-[100%] h-[26rem]" id="car-height">
            <Slider {...settings}>
      <div className="w-full h-96 bg-black text-white">
        hello
      </div>
      
      <div className="w-full h-96 bg-white text-black">
        hii
      </div>
      <div className="w-full h-96 bg-black text-black">
        hii
      </div>
      
    </Slider>
             
            </div>
          </div>
    </div>
  );
}


