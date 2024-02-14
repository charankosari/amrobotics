import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { FaEye } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import Slider from 'react-slick';
import './Blog.css'

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyComponent = (props) => {
  const settings = {
    dots: false,
    infinite: true,

    speed: 500,
    slidesToShow: 1,
    arrows:false,
    slidesToScroll: 1,
    autoplay: true,  // Set autoplay to true
    autoplaySpeed: 2000,  // Set autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
  };
  const url =
    "https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg";

  const blogs = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="h-auto">
        <div className="flex flex-row">
          <div className="bg-white flex flex-col items-stretch px-20 py-12 max-md:px-5 w-[75%] overflow-y-auto" id="fulll">
            {blogs.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.id}`} className="blog-link">
                <div className="bg-zinc-100 mt-9 px-7 py-5 rounded-3xl max-md:max-w-full max-md:mr-2 max-md:px-5">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                      <img
                        loading="lazy"
                        srcSet={url}
                        className="aspect-[2.07] object-contain object-center w-full overflow-hidden grow max-md:mt-10"
                        alt="Blog Cover"
                      />
                    </div>
                    <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex flex-col my-auto items-start max-md:max-w-full max-md:mt-10">
                        <div className="text-neutral-700 text-6xl font-semibold self-stretch max-md:max-w-full" id="title">
                          {blog.title}
                        </div>
                        <div className="text-amber-500 text-base self-stretch mt-2.5 max-md:max-w-full max-md:mt-10">
                          <span className="text-zinc-800 text-3xl" id="content">{blog.content}...</span>
                          <span className="text-amber-500 text-3xl " id="content">see more</span>
                        </div>
                        <div className="flex w-[189px] max-w-full items-stretch justify-between gap-5 mt-9 ">
                          <div className="flex items-stretch justify-center r gap-1.5 ">
                            <AiOutlineLike className="mt-1 text-orange-500 w-6 h-6" id="like" />
                            <div className="text-neutral-700 text-2xl self-start" id="num">
                              69
                            </div>
                          </div>
                          <div className="flex items-stretch gap-2.5 self-start justify-center ">
                            <FaEye className="mt-1 text-orange-500 w-6 h-6" id="like" />
                            <div className="text-neutral-700 text-2xl" id="num">
                              872
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="pt-12 w-[20%]  fixed right-10 top-32"  id="nothing">
            <h1 className="font-bold text-4xl text-black" id="head">Recent Blogs</h1>
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
      </div>
      
    </div>
  );
};

export default MyComponent;
