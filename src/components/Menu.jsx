import Container from './Container'
import Flex from './Flex'
import logo from "../assets/Logo.png"
import { HiOutlineMenu } from "react-icons/hi";
import { GiCrossMark } from "react-icons/gi";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    let [show , getShow] = useState(false)
    let handelShow = () => {
        getShow(!show)
    }

  return (
    <div className='py-6 lg:py-[40px] lg:pl-4 '>
      <Container>
        <Flex className="justify-between lg:w-[80%]">
            <div className="ml-14 lg:ml-0">
                <img className='w-[66px]' src={logo} alt="" />
            </div>
            <div className={`lg:static ${show == true? " bg-[#00000088] absolute top-[50px] w-[120px] left-0 duration-300 ease-in-out z-[999]": " absolute top-[50px] left-[-350px] duration-300 ease-in-out z-[999]"}`}>
                <ul className='lg:flex'>
                  <Link to="/" className='lg:text-[#767676] py-3 pl-4 pr-11 lg:py-0 lg:px-10 font-dmsans capitalize text-[14px] font-bold lg:hover:text-[#262626] text-[#ffffff89] hover:text-white hover:ml-3 lg:hover:ml-0 duration-300 ease-in-out hover:cursor-pointer'>home</Link>
                  <Link to="/shope" className='lg:text-[#767676] py-3 pl-4 pr-11 lg:py-0 lg:px-10 font-dmsans capitalize text-[14px] font-bold lg:hover:text-[#262626] text-[#ffffff89] hover:text-white hover:ml-3 lg:hover:ml-0 duration-300 ease-in-out hover:cursor-pointer'>shope</Link>
                  <Link to="/about" className='lg:text-[#767676] py-3 pl-4 pr-11 lg:py-0 lg:px-10 font-dmsans capitalize text-[14px] font-bold lg:hover:text-[#262626] text-[#ffffff89] hover:text-white hover:ml-3 lg:hover:ml-0 duration-300 ease-in-out hover:cursor-pointer'>about</Link>
                  <Link to="/contacts" className='lg:text-[#767676] py-3 pl-4 pr-11 lg:py-0 lg:px-10 font-dmsans capitalize text-[14px] font-bold lg:hover:text-[#262626] text-[#ffffff89] hover:text-white hover:ml-3 lg:hover:ml-0 duration-300 ease-in-out hover:cursor-pointer'>contacts</Link>
                  <Link to="/journal" className='lg:text-[#767676] py-3 pl-4 pr-11 lg:py-0 lg:px-10 font-dmsans capitalize text-[14px] font-bold lg:hover:text-[#262626] text-[#ffffff89] hover:text-white hover:ml-3 lg:hover:ml-0 duration-300 ease-in-out hover:cursor-pointer'>journal</Link>
                </ul>
            </div>
            <div className="lg:hidden absolute left-[16px] text-xl" onClick={handelShow}>
                {show == true? <GiCrossMark/>: <HiOutlineMenu/>}
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Menu
