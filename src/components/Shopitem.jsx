import React, { useContext, useEffect, useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import { SiWindows } from "react-icons/si";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { productApi } from "./Cntextapi";
import Shopeitemreuseable from "./Shopeitemreuseable";
import Pagination from "./Pagination";

const Shopepage = () => {

  let shopdata = useContext(productApi)
  
  
  let [itemLins, showItemlist] = useState();
  let [itemSec, itemSecshow] = useState();
  let [itemThre, itemThreshow] = useState();
  let [itemFor, itemForshow] = useState();
  
  let handelItem = () => {
    showItemlist(!itemLins);
  };
  let handelItemsec = () => {
    itemSecshow(!itemSec);
  };
  let handelItemthre = () => {
    itemThreshow(!itemThre);
  };
  let handelItemfor = () => {
    itemForshow(!itemFor);
  };
  


  let [catagory , setCatagory] = useState([])
  let [brand, setBrand] = useState([])
  
  
  useEffect(() => {
    setCatagory([...new Set(shopdata.map((items)=>items.category))])
    setBrand([...new Set(shopdata.map((items)=>items.brand))])
  },[shopdata])
 

  let [filtercatagory, setFiltercategory] = useState([])

  let handelCatagory = (citems) =>{
    let catagoryFilter = shopdata.filter((item) => item.category == citems)    
    setFiltercategory(catagoryFilter)
  }


  let handelBrand = (bitem) => {
    let brandFilter = shopdata.filter((item)=>item.brand == bitem)
    setFiltercategory(brandFilter);
    
  }

  let [lowPrice , setLowPrice]=useState([])
  let [highPrice, setHighPrice] = useState([])
  let handelPriceShow = (value) => {
    setLowPrice(value.low)
    setHighPrice(value.high)
    let priceFilter = shopdata.filter((item) => item.price > value.low && item.price < value.high)
    if (priceFilter.length > 0) {
      setFiltercategory(priceFilter);
    } else {
      setFiltercategory("")
    }    
  }  



  let [curentPage , showcurenPage] = useState(1)
  let [parPage , showParpage] = useState(6)
  let firstPage = curentPage * parPage
  let lastPage = firstPage - parPage
  let allPage = shopdata.slice(lastPage,firstPage)
  let pagenumber = []

 for(let i= 0; i < shopdata.length / parPage; i++){
        pagenumber.push(i) 
 }
 let paginate = (pagenumber) => {
  showcurenPage(pagenumber+1)
 }
 let next =() => {
  if(curentPage < pagenumber.length){
    showcurenPage((hi)=>hi+1)
  }
 }
 let previous = () => {
    if (curentPage > 0) {
      showcurenPage((bye)=>bye-1)
    }
 }
 let hanDel = (e) => {
  showParpage(e.target.value)
  }
  

  let [listitem, setListitem] = useState("")
  let handelMenu = () => {
    setListitem('active');
  }
  

  return (

    <div className="py-[124px]">
      <Container>
        <h2 className="font-bold text-[39px]">products</h2>
        <p className="text-[12px] font-normal pt-[12px]">
          {" "}
          <Link to="/">Home</Link> &gt; Products
        </p>
        <div className="py-[130px]">
          <Flex className="justify-between">
            <div className="w-[25%]">
              <div className="py-[15px]">
                <div className="flex items-center justify-between cursor-pointer"onClick={handelItem}>
                  <h3 className="text-[20px] font-bold text-[#262626]   ">
                    {""}
                    Shop by Category
                  </h3>
                  {itemLins == true ? (
                    <MdOutlineArrowDropDown className="text-[22px]" />
                  ) : (
                    <MdArrowDropUp className="text-[22px]" />
                  )}
                </div>
                <div className="">
                  {itemLins && (
                    <ul>
                      {catagory.map((item)=>(
                      <li onClick={()=>handelCatagory(item)} className="flex justify-between items-center text-[16px] font-normal text-[#767676] capitalize py-[20px] border-b cursor-pointer ">
                      {item}{" "}
                      <span>
                        <HiPlus />
                      </span>{" "}
                    </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="py-[15px]">
                <div className="flex items-center justify-between cursor-pointer" onClick={handelItemsec}>
                  <h3 className="text-[20px] font-bold text-[#262626]   ">
                    {" "}
                    Shop by Color
                  </h3>
                  {itemSec == true ? (
                    <MdOutlineArrowDropDown className="text-[22px]" />
                  ) : (
                    <MdArrowDropUp className="text-[22px]" />
                  )}
                </div>
                <div className="">
                  {itemSec && (
                    <ul>
                      <li className="flex justify-between items-center text-[16px] font-normal text-[#767676] py-[20px] border-b ">
                        Category 1{" "}
                        <span >
                          <HiPlus />
                        </span>{" "}
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="py-[15px]">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={handelItemthre}
                >
                  <h3 className="text-[20px] font-bold text-[#262626]   ">
                    {" "}
                    Shop by Brand
                  </h3>
                  {itemThre == true ? (
                    <MdOutlineArrowDropDown className="text-[22px]" />
                  ) : (
                    <MdArrowDropUp className="text-[22px]" />
                  )}
                </div>
                <div className="">
                  {itemThre && (
                    <ul>
                      {brand.map((branditem) => (
                      <li onClick={()=>handelBrand(branditem)} className="flex justify-between items-center text-[16px] font-normal text-[#767676] py-[20px] border-b cursor-pointer ">
                        {branditem}{" "}
                        <span>
                          <HiPlus />
                        </span>{" "}
                      </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className="py-[15px]">
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={handelItemfor}
                >
                  <h3 className="text-[20px] font-bold text-[#262626]   ">
                    {" "}
                    Shop by Price
                  </h3>
                  {itemFor == true ? (
                    <MdOutlineArrowDropDown className="text-[22px]" />
                  ) : (
                    <MdArrowDropUp className="text-[22px]" />
                  )}
                </div>
                <div className="">
                  {itemFor && (
                    <ul>
                                        
                      <li onClick={()=>handelPriceShow({low:0 , high:10})} className="flex justify-between items-center text-[16px] font-normal text-[#767676] py-[20px] border-b cursor-pointer ">
                        <h4>0$ - 9$</h4>{" "}
                        <span>
                          <HiPlus />
                        </span>{" "}
                      </li>
                      <li onClick={()=>handelPriceShow({low:10 , high:20})} className="flex justify-between items-center text-[16px] font-normal text-[#767676] py-[20px] border-b cursor-pointer ">
                        <h4>10$ - 19$</h4>{" "}
                        <span>
                          <HiPlus />
                        </span>{" "}
                      </li>
                      <li onClick={()=>handelPriceShow({low:20 , high:30})} className="flex justify-between items-center text-[16px] font-normal text-[#767676] py-[20px] border-b cursor-pointer ">
                        <h4>20$ - 29$</h4>{" "}
                        <span>
                          <HiPlus />
                        </span>{" "}
                      </li>
                      <li onClick={()=>handelPriceShow({low:30 , high:40})} className="flex justify-between items-center text-[16px] font-normal text-[#767676] py-[20px] border-b cursor-pointer ">
                        <h4>30$ - 39$</h4>{" "}
                        <span>
                          <HiPlus />
                        </span>{" "}
                      </li>
                      <li onClick={()=>handelPriceShow({low:40 , high:50})} className="flex justify-between items-center text-[16px] font-normal text-[#767676] py-[20px] border-b cursor-pointer ">
                        <h4>40$ - 49$</h4>{" "}
                        <span>
                          <HiPlus />
                        </span>{" "}
                      </li>
                      <li onClick={()=>handelPriceShow({low:50 , high:100})} className="flex justify-between items-center text-[16px] font-normal text-[#767676] py-[20px] border-b cursor-pointer ">
                        <h4>50$ - 99$</h4>{" "}
                        <span>
                          <HiPlus />
                        </span>{" "}
                      </li>
                      <li onClick={()=>handelPriceShow({low:100 , high:500})} className="flex justify-between items-center text-[16px] font-normal text-[#767676] py-[20px] border-b cursor-pointer ">
                        <h4>100$ - 499$</h4>{" "}
                        <span>
                          <HiPlus />
                        </span>{" "}
                      </li>
                      <li onClick={()=>handelPriceShow({low:500 , high:3000})} className="flex justify-between items-center text-[16px] font-normal text-[#767676] py-[20px] border-b cursor-pointer ">
                        <h4>500$ - 2999$</h4>{" "}
                        <span>
                          <HiPlus />
                        </span>{" "}
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="w-[70%]">
              <div className="flex justify-between">
                <div className="flex gap-x-5">
                  <SiWindows  onClick={()=>setListitem("")} className="text-[36px] border p-2  hover:bg-black hover:text-white " />
                  <TfiMenuAlt onClick={handelMenu} className="text-[36px] border text-[#737373] p-2 hover:bg-black hover:text-white " />
                </div>
                <div className="flex gap-x-[40px]">
                  <div className="">
                    <label className="px-[14px]">show :</label>
                    <select className="w-[225px] h-[36px] px-4 bg-transparent border">
                      <option value="hi">__All Components__</option>
                      <option value="">hi</option>
                      <option value="">hi</option>
                    </select>
                  </div>
                  <div className="">
                    <label className="px-[14px]">show :</label>
                    <select  onChange={hanDel} className="w-[139px] h-[36px] px-4 bg-transparent border">
                      <option value="">Number Show</option>
                      <option value="6">6</option>
                      <option value="12">12</option>
                      <option value="18">18</option>
                    </select>
                  </div>
                </div>
              </div>
              {filtercatagory ?
                <Shopeitemreuseable data={allPage} filtercatagory={filtercatagory} listitem={listitem} />
                :
                <h2 className=" py-[100px] text-center text-[50px] font-bold  ">Dose not product available this price</h2>
              }
              {filtercatagory ?
                <Pagination pagenumber={pagenumber} paginate={paginate} next={next} previous={previous} />
                :
                ""
              }
            </div>
          </Flex>
        </div>
      </Container>
    </div>
  );
};

export default Shopepage;
