import React from "react";
import "./Testimonial.css";
import AVTR1 from "./../../assets/avatar1.jpg";
import AVTR2 from "./../../assets/avatar2.jpg";
import AVTR3 from "./../../assets/avatar3.jpg";
import AVTR4 from "./../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const testimonialData = [
  {
    avatar: AVTR1,
    name: "Amanda Biggins",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    avatar: AVTR2,
    name: "Mike Razer",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    avatar: AVTR3,
    name: "Adams Fletcher",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    avatar: AVTR4,
    name: "Anita Halloway",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        pagination={{ clickable: true }}
        spaceBetween={40}
        modules={[Pagination]}
        className="mySwipper container testimonials__container"
      >
        {testimonialData.map((data, idx) => (
          <SwiperSlide key={idx} className="testimonial">
            <div className="client__avatar">
              <img src={data.avatar} alt="" />
            </div>
            <h5 className="client__name">{data.name}</h5>
            <small className="client__review">{data.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
