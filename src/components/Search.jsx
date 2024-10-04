import React, { useContext, useEffect, useRef, useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { CgMenuLeft } from "react-icons/cg";
import { IoSearchSharp } from "react-icons/io5";
import { HiShoppingCart } from "react-icons/hi";
import { IoPerson } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import cartImg from "../assets/cart.png";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { productApi } from "./Cntextapi";
import { removeProduct } from "./slice/productSlice";

const Search = () => {
  let dispatch = useDispatch()
  let data = useContext(productApi);
  let cartInfo = useSelector((state) => state.product.cartItems);

  

  let naviget = useNavigate();

  let [showMneu, getShowmenu] = useState(false);
  let [showAcc, getshowAcc] = useState(false);
  let [cartMenu, showCartmenu] = useState(false);
  let menuChart = useRef();
  let accChart = useRef();
  let cartRef = useRef();
  let cartMenushow = useRef();

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
      if (cartMenushow.current.contains(m.target)) {
        showCartmenu(true);
      }
    });
  }, [showMneu, showAcc, cartMenu,cartMenushow]);

  let [searceChange, setSearchChange] = useState("");
  let [searchfilter, setSearchFilter] = useState([]);
  let [selectedIndex, setSelectedIndex] = useState(-1);

  let handelSearch = (element) => {
    setSearchChange(element.target.value);
    if (element.target.value == "") {
      setSearchFilter([]);
    } else {
      let searchOne = data.filter((item) =>
        item.title.toLowerCase().includes(element.target.value.toLowerCase())
      );
      setSearchFilter(searchOne);
      setSelectedIndex(-1); // Reset the index when search changes
    }
  };

  let handelsearchproduc = (id) => {
    naviget(`/shope/${id}`);
    setSearchFilter([]);
    setSearchChange("");
  };

  let handelKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) => prevIndex < searchfilter.length - 1 ? prevIndex + 1 : prevIndex);
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : prevIndex);
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      handelsearchproduc(searchfilter[selectedIndex].id);
    }
  };

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
                onChange={handelSearch}
                onKeyDown={handelKeyDown}
                type="search"
                name=""
                placeholder="Search Products"
                className="p-[21px] xl:w-[601px] lg:w-[551px] w-full h-[50px]"
                value={searceChange}
              />
              <div className="absolute right-[21px] top-[17px] w-[15px] ">
                <IoSearchSharp />
              </div>
              {searchfilter.length > 0 &&
                <div className="absolute top-[55px] left-[50px] w-[501px] h-[400px] overflow-y-scroll z-[999] bg-white">
                  {searchfilter.map((item, index) => (
                    <div
                      key={item.id}
                      onClick={() => handelsearchproduc(item.id)}
                      className={`flex items-center bg-[#F5F5F3] ${selectedIndex === index ? "bg-gray-300" : ""
                        }`}
                    >
                      <img
                        className="lg:w-[80px] w-[50px]"
                        src={item.thumbnail}
                        alt=""
                      />
                      <div className="">
                        <h4 className="lg:text-[14px] text-[13px] font-bold font-dmsans capitalize ">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              }
            </div>

            <div className="flex lg:gap-x-[41px] items-center lg:w-[33px] lg:relative absolute gap-x-5 w-[45px] top-[22px] right-[50px] lg:top-0 ">
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
                {cartInfo.length > 0 ? (
                  <div className="absolute top-[-20px] right-[-80px] h-[20px] w-[20px] bg-red-400 rounded-full text-black text-center leading-[20px] border-none ">
                    {cartInfo.length}
                  </div>
                ) : (
                  ""
                )}
                <div className="text-[27px]">
                  <HiShoppingCart />
                </div>
              </div>

              {showAcc && (
                <div className="w-[200px] lg:bg-[#F5F5F3] border text-center lg:absolute lg:top-[64px] lg:right-[-6px] absolute top-[25px] right-0 bg-white z-[999] ">
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
              <div className="" ref={cartMenushow}>
                {cartMenu && (
                  <div className="lg:w-[360px] w-[280px] lg:absolute lg:top-[63px] lg:right-[-65px] absolute top-[25px] right-[-42px] border z-[999]">
                    {cartInfo.map((item,i) => (
                      <div>
                        <div className="flex items-center justify-between  bg-[#F5F5F3] lg:p-[20px] p-[15px]">
                          <img
                            className="lg:w-[80px] w-[50px]"
                            src={item.thumbnail}
                            alt=""
                          />
                          <div className="">
                            <h4 className="lg:text-[14px] text-[13px] font-bold font-dmsans capitalize ">
                              {item.title}
                            </h4>
                            <span className="lg:text-[14px] text-[13px] font-bold font-dmsans">
                              ${item.price}
                            </span>
                          </div>
                          <div className="">
                            <button onClick={()=>dispatch(removeProduct(i))}>
                            <RxCross2 />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="pb-1 pl-1 pr-1 flex justify-between bg-[#F5F5F3]">
                      <div className="">
                        <Link to="/cart">
                          <button className="lg:py-[16px] lg:px-[41px] py-[8px] px-[20px] border lg:text-[16px] text-[14px] font-bold bg-black text-white hover:bg-white hover:text-black duration-300 ease-in-out rounded-lg ">
                            View Cart
                          </button>
                        </Link>
                      </div>
                      <div className="">
                        <Link to="/checkout">
                          <button className="lg:py-[16px] lg:px-[41px] py-[8px] px-[20px] border lg:text-[16px] text-[14px] font-bold bg-black text-white hover:bg-white hover:text-black duration-300 ease-in-out rounded-lg ">
                            Checkout
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
