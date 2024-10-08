import React from 'react'
import Container from "../components/Container"
import { Link } from 'react-router-dom'
import aboutfirst from "../assets/abouti.png"
import aboutsecond from "../assets/aboutj.png"
const Aboutpage = () => {
  return (
    <div className='py-24'>
      <Container>
        <div className="">
          <h2 className='font-bold text-[39px] capitalize'>about</h2>
          <div className="flex gap-x-1 text-[12px] capitalize">
            <Link to="/">
              <h3>home</h3>
            </Link>
            &gt;
            <h3>about</h3>
          </div>
        </div>
        <div className="flex items-end justify-between py-[100px] ">
          <div className="w-[50%] ">
            <img className='w-[90%]' src={aboutfirst} alt="" />
          </div>
          <div className="w-[50%] ">
            <img className='w-[90%]' src={aboutsecond} alt="" />
          </div>
        </div>
        <div className="">
          <p className='text-[39px] font-normal '>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
        </div>

        <div className="pt-[118px] pb-14 flex justify-between items-center">
          <div className="w-[506px]">
          <h3 className='text-[25px] font-bold pb-2  '>Our Vision</h3>
            <p className='text-[16px] font-normal '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
          <div className="w-[506px]">
          <h3 className='text-[25px] font-bold pb-2  '>Our Story</h3>
            <p className='text-[16px] font-normal '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
          </div>
          <div className="w-[506px]">
          <h3 className='text-[25px] font-bold pb-2  '>Our Vision</h3>
            <p className='text-[16px] font-normal '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Aboutpage
