import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { CgMenuLeft } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import cartImg from "../assets/cart.png";

const Search = () => {
  let [showMneu, getShowmenu] = useState(false);
  let [showAcc, getshowAcc] = useState(false);
  let [cartMenu, showCartmenu] = useState(false);
  let menuChart = useRef();
  let accChart = useRef();
  let cartRef = useRef();

  useEffect(() => {
    window.addEventListener("click", (m) => {
      if (menuChart.current.contains(m.target) == true) {
        getShowmenu(!showMneu);
      } else {
        getShowmenu(false);
      }
      if (accChart.current.contains(m.target) == true) {
        getshowAcc(!showAcc);
      } else {
        getshowAcc(false);
      }
      if (cartRef.current.contains(m.target) == true) {
        showCartmenu(!cartMenu);
      } else {
        showCartmenu(false);
      }
    });
  }, [showMneu, showAcc, cartMenu]);

  return (
    <div>
      <div className="bg-[#F5F5F3] lg:py-[30px] pt-3 pb-11 px-4  lg:pr-12 xl:px-0">
        <Container>
          <Flex className=" xl:justify-between lg:justify-evenly items-center">
            <div
              ref={menuChart}
              className="flex items-center hover:cursor-pointer lg:static absolute right-4 top-[145px] "
            >
              <div className="w-[18px] text-[#262626]">
                <CgMenuLeft />
              </div>
              <h4 className="text-sm font-normal text-[#262626] ml-2">
                Shop by Category
              </h4>
            </div>

            <div className="flex relative xl:w-[601px] lg:w-[551px] w-full ">
              <input
                type="search"
                name=""
                placeholder="Search Products"
                className="p-[21px] xl:w-[601px] lg:w-[551px] w-full h-[50px]"
              />
              <div className="absolute right-[21px] top-[17px] w-[15px] ">
                <IoSearchSharp />
              </div>
            </div>

            <div className="flex lg:gap-x-[41px] items-center lg:w-[33px] lg:relative absolute gap-x-5 w-[45px] top-[22px] right-[50px] lg:top-0 lg:right-0">
              <div
                ref={accChart}
                className="flex items-center hover:cursor-pointer"
              >
                <div className="">
                  <IoPerson />
                </div>
                <div className="">
                  <MdOutlineArrowDropDown />
                </div>
              </div>
              <div ref={cartRef} className="lg:w-[18px] hover:cursor-pointer">
                <HiShoppingCart />
              </div>

              {showAcc && (
                <div className="w-[200px] lg:bg-transparent border text-center lg:absolute lg:top-[64px] lg:right-[-6px] absolute top-[25px] right-0 bg-white ">
                  <ul>
                    <li className="py-[17px] px-[50px] hover:bg-black text-[14px] font-bold font-dmsans hover:text-white duration-300 ease-in-out ">
                      My Account
                    </li>
                    <li className="py-[17px] px-[50px] hover:bg-black text-[14px] font-bold font-dmsans  hover:text-white duration-300 ease-in-out border-t">
                      Log Out
                    </li>
                  </ul>
                </div>
              )}
              {cartMenu && (
                <div className="lg:w-[360px] w-[280px] lg:absolute lg:top-[63px] lg:right-[-65px] absolute top-[25px] right-[-42px] border ">
                  <div className="flex items-center justify-between  bg-[#F5F5F3] lg:p-[20px] p-[15px]">
                    <img className="lg:w-[80px] w-[50px]" src={cartImg} alt="" />
                    <div className="">
                      <h4 className="lg:text-[14px] text-[13px] font-bold font-dmsans capitalize ">
                        Black Smart Watch
                      </h4>
                      <span className="lg:text-[14px] text-[13px] font-bold font-dmsans">
                        $44.00 copy
                      </span>
                    </div>
                    <div className="">
                      <RxCross2 />
                    </div>
                  </div>
                  <div className="lg:p-[20px] p-[15px] mt-0 lg:mt-[14px] bg-white">
                    <h6 className="lg:text-[16px] text-[14px] font-normal font-dmsans ">
                      Subtotal:
                      <span className="lg:text-[16px] text-[14px] font-bold font-dmsans ml-1 ">
                        $44.00
                      </span>
                    </h6>
                    <div className="mt-[13px] flex justify-between">
                      <div className="">
                        <button className="lg:py-[16px] lg:px-[41px] py-[8px] px-[20px] border lg:text-[16px] text-[14px] font-bold hover:bg-black hover:text-white duration-300 ease-in-out ">
                          View Cart
                        </button>
                      </div>
                      <div className="">
                        <button className="lg:py-[16px] lg:px-[41px] py-[8px] px-[20px] border lg:text-[16px] text-[14px] font-bold hover:bg-black hover:text-white duration-300 ease-in-out ">
                          Checkout
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Flex>
        </Container>
      </div>

      <Container>
        <Flex className="justify-between">
          {showMneu && (
            <div className="bg-[#262626] lg:w-[263px] w-[200px] p-[21px]  absolute lg:left-[195px] right-[5px] z-50">
              <ul className="">
                <li className=" lg:text-[14px] font-normal text-[#FFFFFFB2] font-dmsans py-[8px] hover:cursor-pointer hover:ml-5 duration-300 ease-in-out hover:text-[#FFFFFF] hover:font-bold">
                  {" "}
                  Accesories
                </li>
                <li className=" lg:text-[14px] font-normal text-[#FFFFFFB2] font-dmsans py-[8px] hover:cursor-pointer hover:ml-5 duration-300 ease-in-out hover:text-[#FFFFFF] hover:font-bold">
                  {" "}
                  Furniture
                </li>
                <li className=" lg:text-[14px] font-normal text-[#FFFFFFB2] font-dmsans py-[8px] hover:cursor-pointer hover:ml-5 duration-300 ease-in-out hover:text-[#FFFFFF] hover:font-bold">
                  {" "}
                  Electronics
                </li>
                <li className=" lg:text-[14px] font-normal text-[#FFFFFFB2] font-dmsans py-[8px] hover:cursor-pointer hover:ml-5 duration-300 ease-in-out hover:text-[#FFFFFF] hover:font-bold">
                  {" "}
                  Clothes
                </li>
                <li className=" lg:text-[14px] font-normal text-[#FFFFFFB2] font-dmsans py-[8px] hover:cursor-pointer hover:ml-5 duration-300 ease-in-out hover:text-[#FFFFFF] hover:font-bold">
                  {" "}
                  Bags
                </li>
                <li className=" lg:text-[14px] font-normal text-[#FFFFFFB2] font-dmsans py-[8px] hover:cursor-pointer hover:ml-5 duration-300 ease-in-out hover:text-[#FFFFFF] hover:font-bold">
                  {" "}
                  Home appliances
                </li>
              </ul>
            </div>
          )}
        </Flex>
      </Container>
    </div>
  );
};

export default Search;
