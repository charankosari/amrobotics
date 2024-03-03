import React from "react";
import "./ContactUs.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";

function ContactUs() {
  return (
    <div className="px-10 py-5 flex flex-col h-full gap-3">
      <h1 className="text-black font-black text-2xl mb-4">Contact Us</h1>
      <div>
      
          <div className="flex flex-row">
            <div className="w-[55%] mb-2 mr-3" id="remove-1">
              <div className="border-b-2 border-b-gray-600 pb-3 mb-5 mr-6">
                <h1 className="text-2xl font-[500] mb-2 ">Get in touch...</h1>
                <p className="m-2">
                  Use our contact form for all information requests or contact
                  us directly using the contact information below.
                </p>
                <h2 className="m-2">Feel free to get in touch with us </h2>
              </div>
              <div>
                <div className="flex flex-row mr-6 mb-3">
                  <div className="m-2 ">
                    <IoLocationSharp  style={{width:'26px',height:'26px'}}/>
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-[400] mb-1">Our Office locaion</h1>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Aspernatur sed magnam aut error atque.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row">
                  <div className="m-2 ">
                    <FaPhoneAlt   style={{width:'24px',height:'24px'}}  />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="font-[400] mb-1">Phone (Landline)</h1>
                    <p>91 799932646643</p>
                  </div>
                </div>
              </div>
            </div>
        

          <div className="w-[45%]" id="expand">
            <div>
              <form id="form">
                <div id="title">Contact us</div>
                <input
                  type="text"
                  placeholder="Your name"
                  id="input"
                  className="bg-white"
                />
                <input
                  type="text"
                  placeholder="Your email"
                  id="input"
                  className="bg-white"
                />
                <textarea placeholder="Your message" className="bg-white" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
