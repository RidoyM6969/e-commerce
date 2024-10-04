import React from 'react'
import Container from "./Container"
import Flex from "./Flex"
import logo from "../assets/Logo.png"
const Footer = () => {
  return (
    <div className='py-[100px] bg-[#F5F5F3]'>
      <Container>
        <Flex className="justify-between">
            <div className="w-[12%]">
                <ul>
                    <h6 className='font-bold text-base uppercase text-[#262626] pb-[17px]'>menu</h6>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>home</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>shope</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>about</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>journal</li>
                </ul>
            </div>
            <div className="w-[12%]">
                <ul>
                    <h6 className='font-bold text-base uppercase text-[#262626] pb-[17px]'>shope</h6>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>category1</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>category2</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>category3</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>category4</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>category5</li>
                </ul>
            </div>
            <div className="w-[12%]">
                <ul>
                    <h6 className='font-bold text-base uppercase text-[#262626] pb-[17px]'>help</h6>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>Privacy Policy</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>Terms & Conditions</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>Special E-shop</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>Shipping</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[6px] capitalize'>Secure Payments</li>
                </ul>
            </div>
            <div className="w-[20%]">
                <ul>
                    <li className='font-bold text-base uppercase text-[#262626]'>(052) 611-5711</li>
                    <li className='font-bold text-base uppercase text-[#262626] pt-[6px]'>company@domain.com</li>
                    <li className='font-normal text-sm text-[#6D6D6D] pt-[15px] capitalize'>575 Crescent Ave. Quakertown, PA 18951</li>
                </ul>
            </div>
            <div className="w-[35%]">
                <img className='w-[121px] ml-[100px]' src={logo} alt="" />
                <div className="">
                    <p className='mt-[299px] ml-[100px]'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
                </div>
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Footer
