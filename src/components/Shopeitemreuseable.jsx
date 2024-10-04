import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Shopeitemreuseable = ({ data, filtercatagory, listitem }) => {
  
  
  
  let [catagoryFil, showFilter] = useState([]);
  let [count, setCount] = useState(true);

  useEffect(() => {
    let catagoryFilterSingle = filtercatagory.slice(0, 5);
    showFilter(catagoryFilterSingle);
  }, [filtercatagory]);

  let handelShow = () => {
    showFilter(filtercatagory);
    setCount(false);
  };

  let handelHide = () => {
    let catagoryFilterSingle = filtercatagory.slice(0, 5);
    showFilter(catagoryFilterSingle);
    setCount(true);
  };


  return (
    <>
      {  
        filtercatagory.length > 0 ?
        (
          <>
          <div className={`${listitem == "active" ? "" : "flex justify-between flex-wrap"}`}>
            {catagoryFil.map((item) => (
              <div className="w-[30%] relative group mt-[50px] ">
                <div className="absolute top-[15px] left-[20px]">
                  <h6 className="px-[25px] py-[8px] bg-black text-white">
                    new
                  </h6>
                </div>
                <Link to={`/shope/${item.id}`}>
                <div className="">
                <img className="w-[300px]" src={item.thumbnail} alt="" />
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
                          Add to Wish List
                        </h3>
                        <span className="pl-2">
                          <FaCodeCompare />
                        </span>
                      </div>
                    </div>
                    <div className="w-[170px] md:py-3 py-2 mr-7">
                      <div  className="flex items-center justify-between">
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
                    {item.title}
                  </h3>
                  <span className="font-normal text-[15px]">${item.price}</span>
                </div>
                <p className="text-[14px] pt-1">{item.color}</p>
              </div>
            ))}
          </div>

          {count ? filtercatagory.length > 5 && (
                <div className="mt-6">
                  <h2
                    onClick={handelShow}
                    className="text-[16px] font-normal font-serif cursor-pointer"
                  >
                    show all
                  </h2>
                </div>
              )
              :
              filtercatagory.length > 5 && (
                <div className="mt-6">
                  <h2
                    onClick={handelHide}
                    className="text-[16px] font-normal font-serif cursor-pointer "
                  >
                    hide
                  </h2>
                </div>
              )}
          </>
        )
        :
        (
          <div className={`${listitem == "active" ? "" : "flex justify-between flex-wrap"}`}>
          {data.map((item) => (
            <div className="w-[30%] relative group mt-[50px] ">
              <div className="absolute top-[15px] left-[20px]">
                <h6 className="px-[25px] py-[8px] bg-black text-white">new</h6>
              </div>
              <Link to={`/shope/${item.id}`} >
              <div className="">
              <img className="w-[300px]" src={item.thumbnail} alt="" />
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
                        Add to Wish List
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
                  {item.title}
                </h3>
                <span className="font-normal text-[15px]">${item.price}</span>
              </div>
              <p className="text-[14px] pt-1">{item.color}</p>
            </div>
          ))}
        </div>
        )
      }
    </>
  );
};

export default Shopeitemreuseable;
