import React from "react";
import banImg from "../assets/banner.png";
import Slider from "react-slick";
const Banner = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "120px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          color: "transparent",
          borderRight: "1px transparent solid",
          padding: "10px 0",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>
          <img src={banImg} alt="" />
        </h3>
      </div>
      <div>
        <h3>
          <img src={banImg} alt="" />
        </h3>
      </div>
      <div>
        <h3>
          <img src={banImg} alt="" />
        </h3>
      </div>
      <div>
        <h3>
          <img src={banImg} alt="" />
        </h3>
      </div>
    </Slider>
  );
};

export default Banner;
