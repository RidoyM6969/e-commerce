import React from 'react'
import Container from './Container'
import Flex from "./Flex"
import Newarrivalreuseable from './Newarrivalreuseable'
import newfirst from "../assets/newfirst.png"
import newsec from "../assets/newsec.png"
import newthre from "../assets/newthre.png"
import newfor from "../assets/newfor.png"
import clockImg from "../assets/clock.png"
import capImg from "../assets/cap.png"
import tableImg from "../assets/table.png"
import headphoneImg from "../assets/headphone.png"
import sunglassImg from "../assets/sunglass.png"
const NewArrival = () => {
  return (
    <>
    <div className='pt-[217px] '>
    <Container>
      <Flex className="justify-between">
        <a href="">
        <Newarrivalreuseable img={newfirst} title="Basic Crew Neck Tee Copy" price="$44.00" model="new" color="black" />
        </a><a href="">
        <Newarrivalreuseable img={newsec} title="Basic Crew Neck Tee Copy" price="$44.00" model="new"  color="black"/>
        </a>
        <a href="">
        <Newarrivalreuseable img={newthre} title="Basic Crew Neck Tee Copy" price="$44.00" model="new" color="white" />
        </a>
        <a href="">
        <Newarrivalreuseable img={newfor} title="Basic Crew Neck Tee Copy" price="$44.00" model="new" color="black" />
        </a>
      </Flex>

      <div className="pt-[130px]">
        <a href="#">
        <img src={clockImg} alt="" />
        </a>
      </div>

        <div className="pt-[128px] pb-[128px]">
        <h2 className='font-bold text-[39px] pb-[48px]'>Special Offers</h2>
        <div className="">
          <Flex className="justify-between">
          <a href="">
        <Newarrivalreuseable img={capImg} title="Basic Crew Neck Tee Copy" price="$44.00" model="new" color="black" />
        </a><a href="">
        <Newarrivalreuseable img={tableImg} title="Basic Crew Neck Tee Copy" price="$44.00" model="new"  color="black"/>
        </a>
        <a href="">
        <Newarrivalreuseable img={headphoneImg} title="Basic Crew Neck Tee Copy" price="$44.00" model="new" color="white" />
        </a>
        <a href="">
        <Newarrivalreuseable img={sunglassImg} title="Basic Crew Neck Tee Copy" price="$44.00" model="new" color="black" />
        </a>
          </Flex>
        </div>
        </div>
    </Container>

    </div>
    </>
  )
}

export default NewArrival
