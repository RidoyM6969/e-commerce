import React from 'react'
import Container from './Container'
import addImg1 from "../assets/Ad_1.png"
import addImg2 from "../assets/Ad_2.png"
import addImg3 from "../assets/Ad_3.png"
import Flex from './Flex'

const Furniture = () => {
  return (
    <div className='xl:py-[174px] lg:py-[80px] py-[50px] px-3 '>
        <Container>
            <Flex className="justify-between">
            <div className="w-[48%]">
                    <img src={addImg1} alt="" />
                </div>
                <div className="w-[48%]">
                    <div className="">
                        <img src={addImg2} alt="" />
                    </div>
                    <div className="xl:pt-[40px] md:pt-[20px] lg:pt-[26px] pt-[9px]">
                        <img src={addImg3} alt="" />
                    </div>
                </div>
            </Flex>
        </Container>
      
    </div>
  )
}

export default Furniture
