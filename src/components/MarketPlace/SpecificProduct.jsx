import * as React from "react";
import { useState,useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import './Specificproduct.css'
import { useParams } from 'react-router-dom';
import {GetDetailProduct} from "../../helper.js";
import axios from "axios"
import {ThreeDots} from 'react-loader-spinner'


export default function MyComponent() {
    const {id}=useParams()
    const [details, setDetails] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      getDetails();
    }, []);

    const [mainImage, setMainImage] = useState(
        "https://imgs.search.brave.com/L87L2KblRPj0xEgErVwIvAfP-nYOf3yRqLa6aSEa_oQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YWxsLW9mLW15LWNh/cnMtYXJlbnQtYnJv/a2VuLXdoYXQtbm93/LXYwLTlxem56MWdw/bzhxYjEuanBnP3dp/ZHRoPTY0MCZjcm9w/PXNtYXJ0JmF1dG89/d2VicCZzPWE3MjZk/NmYxNzRmMzVkZmFh/OGZhYjIwMTAyNjdh/ZmJlYmYzN2YwZjU"
      );
      const images = [
        "https://imgs.search.brave.com/L87L2KblRPj0xEgErVwIvAfP-nYOf3yRqLa6aSEa_oQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YWxsLW9mLW15LWNh/cnMtYXJlbnQtYnJv/a2VuLXdoYXQtbm93/LXYwLTlxem56MWdw/bzhxYjEuanBnP3dp/ZHRoPTY0MCZjcm9w/PXNtYXJ0JmF1dG89/d2VicCZzPWE3MjZk/NmYxNzRmMzVkZmFh/OGZhYjIwMTAyNjdh/ZmJlYmYzN2YwZjU",
        "https://c4.wallpaperflare.com/wallpaper/965/883/624/manga-one-piece-wallpaper-preview.jpg",
        "https://imgs.search.brave.com/L87L2KblRPj0xEgErVwIvAfP-nYOf3yRqLa6aSEa_oQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YWxsLW9mLW15LWNh/cnMtYXJlbnQtYnJv/a2VuLXdoYXQtbm93/LXYwLTlxem56MWdw/bzhxYjEuanBnP3dp/ZHRoPTY0MCZjcm9w/PXNtYXJ0JmF1dG89/d2VicCZzPWE3MjZk/NmYxNzRmMzVkZmFh/OGZhYjIwMTAyNjdh/ZmJlYmYzN2YwZjU",
        "https://imgs.search.brave.com/L87L2KblRPj0xEgErVwIvAfP-nYOf3yRqLa6aSEa_oQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YWxsLW9mLW15LWNh/cnMtYXJlbnQtYnJv/a2VuLXdoYXQtbm93/LXYwLTlxem56MWdw/bzhxYjEuanBnP3dp/ZHRoPTY0MCZjcm9w/PXNtYXJ0JmF1dG89/d2VicCZzPWE3MjZk/NmYxNzRmMzVkZmFh/OGZhYjIwMTAyNjdh/ZmJlYmYzN2YwZjU",
      ];
      const handleImageClick = (image) => {
        setMainImage(image);
      };
      const [activeSection, setActiveSection] = useState("description");
      const handleSectionClick = (section) => {
        setActiveSection(section);
      };
      const getDetails = async () => {
        const response = await GetDetailProduct(id);
        if (response.status == 200) {
          setDetails(response.data.product)
          console.log(details);

        }
        setLoading(false);

    
      };

  return (
    <div className="overflow-hidden" >
    <Navbar/>

     {loading?
      <ThreeDots
      visible={true}
      height="80"
      width="80"
      color="#ff8c00"
      radius="9"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClass=""
       />:
      <div className="bg-white flex flex-col px-9 py-12 max-md:px-5">
      <div className="self-stretch mx-6 max-md:max-w-full max-md:mr-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
              <img
                loading="lazy"
                srcSet={mainImage}
                className="aspect-[1.4] object-contain object-center w-full overflow-hidden max-md:max-w-full"
              />
              <div className=" max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-row gap-2  items-stretch w-[26%] max-md:w-full max-md:ml-25 no-scrollbar ">
                  {images.map((image, index) => (
                  <img
                    key={index}
                    loading="lazy"
                    srcSet={image}
                    className="aspect-[1.14] object-contain object-center w-[148px] overflow-hidden shrink-0 max-w-full grow max-md:mt-3 cursor-pointer"
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
                Rover 2WD Track Spy DIY Chasis Kit
              </div>
              <div className="text-zinc-800 text-opacity-60 text-sm whitespace-nowrap ml-32 mt-7 self-start max-md:ml-2.5">
                37 reviews
              </div>
              <div className="flex items-stretch gap-4 mt-3 self-start">
                <div className="text-neutral-700 text-sm whitespace-nowrap bg-zinc-300 bg-opacity-70 grow justify-center items-stretch px-3.5 py-1.5 rounded-xl">
                  Home Automation
                </div>
                <div className="text-neutral-700 text-sm whitespace-nowrap bg-zinc-300 bg-opacity-70 grow justify-center items-stretch px-3 py-1.5 rounded-xl">
                  Transport
                </div>
              </div>
              <div className="self-stretch flex items-stretch justify-between gap-0.5 mt-4 max-md:max-w-full max-md:flex-wrap">
                <div className="flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-neutral-700 text-3xl font-semibold">
                    Rs. 14,499 /-
                  </div>
                  <div className="text-zinc-800 text-opacity-60 text-sm whitespace-nowrap mt-5">
                    <span className="font-semibold text-base ">
                      <span className="text-amber-500">Shipping </span> calculated at the checkout.
                    </span>
                  </div>
                </div>
                <div className="flex grow basis-[0%] flex-col items-stretch">
                  <div className="text-neutral-700 text-3xl font-semibold whitespace-nowrap">
                    Rs. 20,999 /-
                  </div>
                  
                </div>
              </div>
              <button className="text-white sm:text-4xl text-xl font-semibold bg-amber-500 self-stretch justify-center items-center mt-6 px-12 py-6 rounded-xl max-md:max-w-[400px] max-md:px-5">
                Buy Now
              </button>
              <button className="text-white sm:text-4xl text-xl font-semibold bg-neutral-700 self-stretch justify-center items-center mt-7 px-12 py-6 rounded-xl max-md:max-w-full max-md:px-5">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="self-center flex flex-row  w-full max-w-[1008px] sm:justify-between justify-starts sm:gap-5  mt-10 items-start max-md:max-w-full max-md:flex-wrap">
    
        <div
            className={`cursor-pointer ${
              activeSection === "description" ? "text-amber-500" : "text-zinc-500"
            } text-2xl font-semibold  mt-14 self-end max-md:mt-10`}
            onClick={() => handleSectionClick("description")}
          >
            Description
          </div>
          <div
          
            className={`cursor-pointer ${
              activeSection === "insideBox" ? "text-amber-500" : "text-zinc-500"
            } text-2xl font-semibold mt-14 ml-20 self-end max-md:mt-0`}
            onClick={() => handleSectionClick("insideBox")}
          >
            Inside Box
          </div>
          
        <div
            className={`cursor-pointer ${
              activeSection === "productDetails" ? "text-amber-500" : "text-zinc-500"
            } text-2xl font-semibold w-96 mt-14 max-md:mt-10`}
            onClick={() => handleSectionClick("productDetails")}
          >
            Product Details
          
        </div>
      </div>
      
      {activeSection === "description" && (
          <div className="text-zinc-800 text-opacity-60 text-2xl self-stretch mt-5 max-md:max-w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates obcaecati nesciunt repudiandae ut, id quis ex sunt vel earum dolores quisquam, eligendi impedit laboriosam blanditiis dolorum dicta ad aliquam ducimus corporis. Repudiandae suscipit saepe officia minima ad, sed laboriosam magnam, est corrupti voluptate assumenda vel nostrum. Dolorem sequi libero voluptatem iusto nesciunt perspiciatis, adipisci perferendis cum! Odit eligendi, ad doloremque magnam earum aliquam dignissimos commodi quod obcaecati, voluptates eius consequuntur debitis laborum maxime neque totam possimus enim nulla doloribus aut ullam reprehenderit voluptatum. Aspernatur, a velit. Expedita eligendi sit possimus eum facilis voluptatem aliquid hic quidem voluptatibus minima natus cumque maxime ipsum vel perferendis mollitia voluptates sed vero cupiditate quibusdam, beatae qui. Incidunt ab, quaerat praesentium impedit perferendis reiciendis provident sapiente? Enim accusamus voluptatibus, modi facilis vitae consequuntur voluptates praesentium veritatis ipsam delectus illo reiciendis aperiam. Sint dolore impedit, esse dignissimos ducimus ut, officiis, itaque voluptatum voluptate dolorem deserunt obcaecati assumenda? Quis amet veniam error magni, laudantium perspiciatis, quidem distinctio facilis illum voluptatibus numquam minima praesentium. Facilis modi nihil facere! Culpa libero repellat vero quae explicabo itaque fuga magnam quia. Magni illum id iure minima dolorum deserunt voluptatem optio, beatae perspiciatis quos voluptatibus quae alias at aperiam eius! Cumque, nesciunt?
          </div>
        )}

        {activeSection === "insideBox" && (
          <div className="text-zinc-800 text-opacity-60 text-2xl self-stretch mt-5 max-md:max-w-full">
                        consectetur adipisicing elit. Voluptates obcaecati nesciunt repudiandae ut, id quis ex sunt vel earum dolores quisquam, eligendi impedit laboriosam blanditiis dolorum dicta ad aliquam ducimus corporis. Repudiandae suscipit saepe officia minima ad, sed laboriosam magnam, est corrupti voluptate assumenda vel nostrum. Dolorem sequi libero voluptatem iusto nesciunt perspiciatis, adipisci perferendis cum! Odit eligendi, ad doloremque magnam earum aliquam dignissimos commodi quod obcaecati, voluptates eius consequuntur debitis laborum maxime neque totam possimus enim nulla doloribus aut ullam reprehenderit voluptatum. Aspernatur, a velit. Expedita eligendi sit possimus eum facilis voluptatem aliquid hic quidem voluptatibus minima natus cumque maxime ipsum vel perferendis mollitia voluptates sed vero cupiditate quibusdam, beatae qui. Incidunt ab, quaerat praesentium impedit perferendis reiciendis provident sapiente? Enim accusamus voluptatibus, modi facilis vitae consequuntur voluptates praesentium veritatis ipsam delectus illo reiciendis aperiam. Sint dolore impedit, esse dignissimos ducimus ut, officiis, itaque voluptatum voluptate dolorem deserunt obcaecati assumenda? Quis amet veniam error magni, laudantium perspiciatis, quidem distinctio facilis illum voluptatibus numquam minima praesentium. Facilis modi nihil facere! Culpa libero repellat vero quae explicabo itaque fuga magnam quia. Magni illum id iure minima dolorum deserunt voluptatem optio, beatae perspiciatis quos voluptatibus quae alias at aperiam eius! Cumque, nesciunt?

          </div>
        )}

        {activeSection === "productDetails" && (
          <div className="text-zinc-800 text-opacity-60 text-2xl self-stretch mt-5 max-md:max-w-full">
                        elit. Voluptates obcaecati nesciunt repudiandae ut, id quis ex sunt vel earum dolores quisquam, eligendi impedit laboriosam blanditiis dolorum dicta ad aliquam ducimus corporis. Repudiandae suscipit saepe officia minima ad, sed laboriosam magnam, est corrupti voluptate assumenda vel nostrum. Dolorem sequi libero voluptatem iusto nesciunt perspiciatis, adipisci perferendis cum! Odit eligendi, ad doloremque magnam earum aliquam dignissimos commodi quod obcaecati, voluptates eius consequuntur debitis laborum maxime neque totam possimus enim nulla doloribus aut ullam reprehenderit voluptatum. Aspernatur, a velit. Expedita eligendi sit possimus eum facilis voluptatem aliquid hic quidem voluptatibus minima natus cumque maxime ipsum vel perferendis mollitia voluptates sed vero cupiditate quibusdam, beatae qui. Incidunt ab, quaerat praesentium impedit perferendis reiciendis provident sapiente? Enim accusamus voluptatibus, modi facilis vitae consequuntur voluptates praesentium veritatis ipsam delectus illo reiciendis aperiam. Sint dolore impedit, esse dignissimos ducimus ut, officiis, itaque voluptatum voluptate dolorem deserunt obcaecati assumenda? Quis amet veniam error magni, laudantium perspiciatis, quidem distinctio facilis illum voluptatibus numquam minima praesentium. Facilis modi nihil facere! Culpa libero repellat vero quae explicabo itaque fuga magnam quia. Magni illum id iure minima dolorum deserunt voluptatem optio, beatae perspiciatis quos voluptatibus quae alias at aperiam eius! Cumque, nesciunt?

          </div>
        )}
      <div className="border bg-white w-[811px] max-w-full ml-3.5 mt-20 mb-2 px-8 py-9 rounded-2xl border-solid border-black border-opacity-30 self-start max-md:mt-10 max-md:px-5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col max-md:mt-10">
              <div className="text-black text-3xl font-semibold self-stretch">
                Reviews & Ratings
              </div>{" "}
              <div className="text-black text-4xl font-semibold self-stretch mt-6">
                4.4
              </div>{" "}
              <div className="text-zinc-500 text-center text-2xl self-center w-[406px] mt-5">
                72 ratings & 42 reviews
              </div>
              <div className="self-stretch flex items-stretch  mt-5">
                <img
                  loading="lazy"
                  srcSet="https://imgs.search.brave.com/L87L2KblRPj0xEgErVwIvAfP-nYOf3yRqLa6aSEa_oQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YWxsLW9mLW15LWNh/cnMtYXJlbnQtYnJv/a2VuLXdoYXQtbm93/LXYwLTlxem56MWdw/bzhxYjEuanBnP3dp/ZHRoPTY0MCZjcm9w/PXNtYXJ0JmF1dG89/d2VicCZzPWE3MjZk/NmYxNzRmMzVkZmFh/OGZhYjIwMTAyNjdh/ZmJlYmYzN2YwZjU"
                  className="aspect-[1.59] object-contain object-center w-[139px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  srcSet="https://imgs.search.brave.com/L87L2KblRPj0xEgErVwIvAfP-nYOf3yRqLa6aSEa_oQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YWxsLW9mLW15LWNh/cnMtYXJlbnQtYnJv/a2VuLXdoYXQtbm93/LXYwLTlxem56MWdw/bzhxYjEuanBnP3dp/ZHRoPTY0MCZjcm9w/PXNtYXJ0JmF1dG89/d2VicCZzPWE3MjZk/NmYxNzRmMzVkZmFh/OGZhYjIwMTAyNjdh/ZmJlYmYzN2YwZjU"
                  className="aspect-[1.58] object-contain object-center w-[138px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  srcSet="https://imgs.search.brave.com/L87L2KblRPj0xEgErVwIvAfP-nYOf3yRqLa6aSEa_oQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YWxsLW9mLW15LWNh/cnMtYXJlbnQtYnJv/a2VuLXdoYXQtbm93/LXYwLTlxem56MWdw/bzhxYjEuanBnP3dp/ZHRoPTY0MCZjcm9w/PXNtYXJ0JmF1dG89/d2VicCZzPWE3MjZk/NmYxNzRmMzVkZmFh/OGZhYjIwMTAyNjdh/ZmJlYmYzN2YwZjU"
                  className="aspect-[1.58] object-contain object-center w-[138px] overflow-hidden shrink-0 max-w-full"
                />
                <img
                  loading="lazy"
                  srcSet="https://imgs.search.brave.com/L87L2KblRPj0xEgErVwIvAfP-nYOf3yRqLa6aSEa_oQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/YWxsLW9mLW15LWNh/cnMtYXJlbnQtYnJv/a2VuLXdoYXQtbm93/LXYwLTlxem56MWdw/bzhxYjEuanBnP3dp/ZHRoPTY0MCZjcm9w/PXNtYXJ0JmF1dG89/d2VicCZzPWE3MjZk/NmYxNzRmMzVkZmFh/OGZhYjIwMTAyNjdh/ZmJlYmYzN2YwZjU"
                  className="aspect-[1.58] object-contain object-center w-[138px] overflow-hidden shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
        
        
        </div>
      </div>
      </div>
  
     }

    <Footer/>
    </div>
  );
}

