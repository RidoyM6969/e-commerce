import React, { useContext, useEffect, useState } from "react";
import Container from "./Container";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import Slider from "react-slick";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { productApi } from "./Cntextapi";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-0 top-[50%] bg-slate-300 h-[40px]  w-[40px] leading-[40px] text-center rounded-[50%] z-50 "
      onClick={onClick}
    >
      <FaArrowRightLong className="inline-block text-white" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-0 top-[50%] bg-slate-300 h-[40px]  w-[40px] leading-[40px] text-center rounded-[50%] z-50"
      onClick={onClick}
    >
      <FaArrowLeftLong className="inline-block text-white" />
    </div>
  );
}



const Arrivals = () => {
  
  let data = useContext(productApi)

  var settings = {
    dots: true,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <div className="xl:py-[128px] py-[40px] px-4 lg:px-4 xl:px-0">
      <Container>
        <h2 className=" text-[22px]  font-bold lg:text-[39px] pb-[48px]">
          New Arrivals
        </h2>
        <Slider {...settings}>
          {data.map((items) => (
            <div className="w-[100%] relative group">
              <Link to={`/shope/${items.id}`}>
              <div className="">
              <img src={items.thumbnail} alt="" />
              </div>
              </Link>
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
                      <button className="font-normal text-[14px] md:text-[16px] opacity-[0.55] hover:opacity-100">
                        Add to Cart
                      </button>
                      <span className="pl-2">
                        <IoMdCart />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex xl:justify-evenly justify-evenly items-center pt-[24px]">
                <h3 className="font-bold text-[15px] lg:text-[13px] xl:text-[18px]">
                  {items.title}
                </h3>
                <span className="font-normal text-[15px]">{items.price}</span>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Arrivals;
