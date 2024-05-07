import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useNavigate } from "react-router-dom";

const OrderCard = (props) => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const { each } = props;
  const {
    shippingInfo,
    _id,
    order_id,
    channel_order_id,
    orderStatus,
    orderItems,
    user,
    payment_id,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paymode,
    createdAt,
  } = each;
  const { name, units, images, selling_price, id, sku } = orderItems[0];
  const { address, country, state, city, pin, mobile, email } = shippingInfo;
  const username = shippingInfo.name;
  const dateObject = new Date(createdAt);
  const orderDate = `${dateObject.getDate()} ${
    dateObject.getMonth() + 1
  } ${dateObject.getFullYear()}`;

  return (
    <div className="border mb-2 bg-white w-[80%] p-3  border-gray-300 rounded-md">
      <div className="flex flex-wrap justify-between">
        <div className="w-[48%] lg:w-[23%] mb-4">
          <p className="text-[13px] font-semibold">OrderPlaced</p>
          <p className="text-[13px]">{orderDate.split(" ").join("/")}</p>
        </div>
        <div className="w-[48%] lg:w-[23%] mb-4">
          <p className="text-[13px] font-semibold">Delivery Date</p>
          <p className="text-[13px]">30/04/2024</p>
        </div>
        <div className="w-[48%] lg:w-[23%] mb-4">
          <p className="text-[13px] font-semibold">Amount</p>
          <p className="text-[13px]">{totalPrice}</p>
        </div>
        <div className="w-[48%] lg:w-[23%] mb-4">
          <p className="text-[13px] font-semibold">OrderId</p>
          <p className="text-[13px]">{channel_order_id}</p>
        </div>
      </div>

      <hr />
      <div>
        <p className="text-[15px] font-semi-bold  text-green-700 font-semibold ">
          Arriving on 22/3/2024
        </p>
        <div className="flex flex-row">
          <div className="w-[40%] flex items-center">
            <img className="w-[8rem]" src={images} />
          </div>
          <div className="w-[100%]">
            <div>
              <div className="flex flex-col">
                <p className="text-[clamp(10px,2vw,14px)] mb-0">{name}</p>
                <p className="text-[clamp(10px,2vw,14px)] mb-0">
                  units{" "}
                  <span className="text-[clamp(10px,2vw,14px)]">{units}</span>
                </p>
              </div>
              <div className="flex flex-row gap-[10px]">
                <button className="border border-gray-100 rounded-md bg-orange-500 p-1 text-white text-sm p-[0.4rem]">
                  <a
                    href={`https://amrobotics.shiprocket.co/tracking/order/${channel_order_id}`}
                    target="_blank"
                  >
                    track
                  </a>
                </button>
                <button
                  className="border border-gray-100 rounded-md bg-gray-500 p-1 text-white text-sm p-[0.4rem]"
                  onClick={() => setModalShow(true)}
                >
                  OrderDetails
                </button>
              </div>
            </div>

            <Dialog
              open={modalShow}
              onClose={() => setModalShow(false)}
              aria-labelledby="order-details-dialog"
              fullWidth
            >
              <div className="flex flex-row justify-between items-center mb-3">
                <DialogTitle id="order-details-dialog">
                  Order Details
                </DialogTitle>
                <p className="text-[13px] pr-3">
                  <span className=" font-semibold text-[15px]">OrderId</span> :{" "}
                  {channel_order_id}
                </p>
              </div>
              <hr />
              <DialogContent>
                <div className="mt-3">
                  <div className="flex mb-3 flex-col justify-between">
                    <div className=" flex flex-row">
                      <h1 className="text-sm font-semibold w-[20%]">Order Status:</h1>
                      <p className="text-sm ml-2">{orderStatus}</p> 
                    </div>
                    <br />

                    <div className=" flex flex-row">
                      <h1 className="text-sm font-semibold w-[20%]">Order Summary:</h1>
                     <div className="ml-2"> <p className="text-sm">Mode of Payment : {paymode}</p>
                      <p className="text-sm">ItemsPrice : {itemsPrice}</p>
                      <p className="text-sm">Tax Added : {taxPrice}</p>
                      <p className="text-sm">shippingPrice : {shippingPrice}</p>
                      <p className="text-sm font-semibold">
                        Total Price : {totalPrice}
                      </p>
                      </div>
                    </div>
                    <br />

                    <div className="flex flex-row">
                      <h1 className="text-sm font-semibold w-[20%]  ">
                        Shipping Address
                      </h1>
                      <div className="ml-2">
                      <p className="text-sm ">
                        {username},<br />
                        {city}, {state} , {country},<br />{pin},
                       ,<br />
                        {mobile},<br />
                        {email},<br />
                        {address}
                      </p>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="border mb-2 mt-3   bg-white  p-3  border-gray-300 rounded-md">
                    <div className="flex flex-row justify-between mb-2">
                      <div className="">
                        <p className="text-[13px] font-semibold">OrderPlaced</p>
                        <p className="text-[13px]">{orderDate}</p>
                      </div>
                      <div className="">
                        <p className="text-[13px] font-semibold">
                          Delivery Date
                        </p>
                        <p className="text-[13px]">30/04/2024</p>
                      </div>
                      <div className="">
                        <p className="text-[13px] font-semibold">Amount</p>
                        <p className="text-[13px]">{totalPrice}/-</p>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <p className="text-[15px] font-semi-bold  text-green-700 font-semibold ">
                        Arriving on 22/3/2024
                      </p>
                      <div className="flex flex-row">
                        <div className="w-[40%] flex items-center">
                          <img className="w-[8rem]" src={images} />
                        </div>
                        <div className="w-[100%]">
                          <div>
                            <div className="flex flex-col">
                              <p className="text-[clamp(10px,2vw,14px)] mb-0">
                                {name}
                              </p>
                              <p className="text-[clamp(10px,2vw,14px)] mb-0">
                                units{" "}
                                <span className="text-[clamp(10px,2vw,14px)]">
                                  {units}
                                </span>
                              </p>
                            </div>
                            <div className="flex flex-row gap-[10px]">
                              <button className="border border-gray-100 rounded-md bg-orange-500 p-1 text-white text-sm p-[0.4rem]">
                                <a
                                  href={`https://amrobotics.shiprocket.co/tracking/order/${channel_order_id}`}
                                  target="_blank"
                                >
                                  track
                                </a>
                              </button>
                              <button
                                className="border border-gray-100 rounded-md bg-gray-500 p-1 text-white text-sm p-[0.4rem]"
                                onClick={() => {
                                  navigate(`/marketplace/${id}`);
                                }}
                              >
                                View Product
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setModalShow(false)}>Close</Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
