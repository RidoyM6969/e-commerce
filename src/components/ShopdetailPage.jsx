import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from './Container'
import Flex from './Flex'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { FaPlus,FaMinus  } from "react-icons/fa6";
import { Rate } from 'antd';
import { useDispatch, useSelector } from "react-redux"
import { addTocart } from './slice/productSlice'

const ShopdetailPage = () => {
  
  let productid = useParams()
  
  
  let [shopDetails, setShopdetasils] = useState([])
  let [rate, setRating] = useState([])  
  
    const getId = () =>{
        axios.get(`https://dummyjson.com/products/${productid.id}`).then((response)=>{
          setShopdetasils(response.data)
          setRating(response.data.reviews[0]);          
        })}
      useEffect(()=>{
          getId()
      },[])
    
    

  let calintRating = Array.from({ length: 5 }, (_,index) => {
      let number = index + 0.5
    return (
      shopDetails.rating > index+1 ? <IoIosStar className='text-[gold]'/>:shopDetails.rating > number ?<IoIosStarHalf  className='text-[gold]'/>:<IoIosStarOutline  className='text-[gold]'/>
      )
    })

  let [show , setShow]=useState(false)
  let [futuri, setFuturi] = useState(false)

  let dispatch = useDispatch()
  
  let handelAddcart = (item) => {
      dispatch(addTocart({...item , qun:1}));      
  }    

  
  
  return (
    <div className="py-[100px]">
          <Container>
      <Flex className="flex-wrap items-center justify-start">
        {shopDetails?.images?.map((item) => (
          <img className="w-[47%] bg-[#D8D8D8] mt-11 mr-11" src={item} alt="" />
        ))}
      </Flex>
      <div className="flex items-center pt-[150px]">
        {calintRating}
        <p className="pl-3">1 Review</p>
      </div>
      <div className="flex gap-x-3 items-center py-6">
        <del>$88.00</del>
        <h3 className="font-bold text-[20px]">$44.00</h3>
      </div>
      <div className="pb-4">
        <h3 className="font-semibold text-[18px] ">STATUS: {shopDetails.availabilityStatus}</h3>
      </div>
      <div className="mt-[13px] w-[500px] flex justify-between py-9">
        <div className="">
          <button className="lg:py-[16px] lg:px-[60px] py-[8px] px-[20px] border lg:text-[16px] text-[14px] font-bold hover:bg-black hover:text-white duration-300 ease-in-out ">
            Add to Wish List
          </button>
        </div>
          <Link to="/cart">
            <div className="">
              <button onClick={()=>handelAddcart(shopDetails)} className="lg:py-[16px] lg:px-[70px] py-[8px] px-[20px] border lg:text-[16px] text-[14px] font-bold hover:bg-black hover:text-white duration-300 ease-in-out ">
                Add to Cart
              </button>
          </div>
          </Link>
      </div>
      <div className="w-[600px] py-5">
        <div onClick={()=>setShow(!show)} className="font-bold text-[16px] flex items-center justify-between border-y-2 p-2 ">
        <h2>FEATURES  & DETAILS</h2>
            { show == true? <FaMinus/>:<FaPlus/>}
        </div>
          {show &&
            <p>{ shopDetails.description}</p>
          }
        <div onClick={()=>setFuturi(!futuri)} className="font-bold text-[16px] flex items-center justify-between border-b-2 p-2 ">
        <h2>SHIPPING & RETURNS</h2>
            { futuri == true? <FaMinus/>:<FaPlus/>}
        </div>
          {futuri &&
            <p>{ shopDetails.description}</p>
          }
        </div>
        
        <div className=" py-5">
            <div className="flex items-center gap-x-11">
            <h3 className='text-[20px] font-bold'>Description</h3>
            <span>{ `Reviews (${rate.reviews})`}</span>
            </div>
          <div className="flex gap-x-11 items-center py-5">
            <h2 className='text-[17px]'>{ rate.reviewerName}</h2>
            <Rate disabled value={rate.rating} className='text-[14px]' />
            </div>
            <p>{ rate.comment}</p>
        </div>
    </Container>
    </div>
  );
}

export default ShopdetailPage
