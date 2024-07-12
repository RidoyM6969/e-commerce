import Container from './Container'
import React from 'react'
import Flex from './Flex'
import { FaTruck } from "react-icons/fa6";
import { FaArrowRotateLeft } from "react-icons/fa6";
const Phonesell = () => {
  return (
    <div className='px-4 pt-[10px]'>
      <Container>
        <Flex className="justify-between items-center">
            <div className="flex items-center gap-x-[9px]">
                <span className='font-bold lg:text-[22px] text-[14px]'>2</span>
                <h4 className='lg:text-[16px] md:text-[16px] font-normal text-[10px]'>Two years warranty</h4>
            </div>
            <div className="flex items-center gap-x-[9px]">
                <span className='font-bold lg:text-[22px] text-[14px]'><FaTruck/></span>
                <h4 className='lg:text-[16px] md:text-[16px] font-normal text-[10px]'>Two years warranty</h4>
            </div>
            <div className="flex items-center gap-x-[9px]">
                <span className='font-bold lg:text-[22px] text-[14px]'><FaArrowRotateLeft/></span>
                <h4 className='lg:text-[16px] md:text-[16px] font-normal text-[10px]'>Two years warranty</h4>
            </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Phonesell
