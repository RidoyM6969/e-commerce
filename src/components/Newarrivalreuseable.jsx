import React from "react";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";


const Newarrivalreuseable = (props) => {
  return (
    <div className="">
      <div className="w-[100%] relative group  ">
        <div className="absolute top-[15px] left-[20px]">
            <h6 className="px-[25px] py-[8px] bg-black text-white">{props.model}</h6>
        </div>
         <img className="w-[300px]" src={props.img} alt="" />
        <div className="flex justify-end absolute right-0 bottom-[25px] opacity-0 w-full bg-white  group-hover:bottom-[51px] group-hover:opacity-100 duration-300 ease-in-out ">
          <div className="">
            <div className="w-[170px] md:py-3 py-2 mr-7">
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-[14px] md:text-[16px] opacity-[0.55] hover:opacity-100">
                  Add to Wish List
                </h3>
                <span className="pl-2">
                  <FaHeart />
                </span>
              </div>
            </div>
            <div className="w-[170px] md:py-3 py-2 mr-7">
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-[14px] md:text-[16px] opacity-[0.55] hover:opacity-100">
                Compare
                </h3>
                <span className="pl-2">
                  <FaCodeCompare />
                </span>
              </div>
            </div>
            <div className="w-[170px] md:py-3 py-2 mr-7">
              <div className="flex items-center justify-between">
                <h3 className="font-normal text-[14px] md:text-[16px] opacity-[0.55] hover:opacity-100">
                  Add to Cart
                </h3>
                <span className="pl-2">
                  <IoMdCart />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex xl:justify-between justify-evenly items-center pt-[24px]">
          <h3 className="font-bold text-[15px] lg:text-[13px] xl:text-[18px]">
          {props.title}
          </h3>
          <span className="font-normal text-[15px]">{props.price}</span>
        </div>
        <p className="text-[14px] pt-1">{props.color}</p>
      </div>
    </div>
  );
};

export default Newarrivalreuseable;
