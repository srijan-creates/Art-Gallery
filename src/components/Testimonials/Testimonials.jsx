import React from "react";
import Slider from "react-slick";
import { testimonials } from "../../constants/TestimonialsData";
import { FaQuoteRight as Quote, FaStar as Star, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <div
    className=" hidden md:block absolute -mx-10 top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-20 text-textcolor hover:text-textcolor/80"
    onClick={onClick}
    style={{ fontSize: "2rem" }}
  >
    <FaChevronRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="hidden md:block absolute -mx-10 top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-20 text-textcolor hover:text-textcolor/80"
    onClick={onClick}
    style={{ fontSize: "2rem" }}
  >
    <FaChevronLeft />
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="font-display w-full max-w-7xl py-16 mx-auto  px-6">
      <h2 className=" text-textcolor mb-8 text-center md:mx-auto">
        What Our Visitors Say
      </h2>
      <Slider {...settings} className="testimonial-slider">
        {testimonials.map(({ id, name, role, quote, rating, image }) => (
          <div key={id} className="p-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer h-full flex flex-col">
              <div className="relative h-48 overflow-hidden rounded-t-lg">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <Quote className="absolute top-4 right-4 text-white text-3xl opacity-50" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex mb-3">
                  {[...Array(rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4 flex-grow leading-relaxed">
                  "{quote}"
                </p>
                <div>
                  <h4 className="font-bold text-textcolor text-lg">{name}</h4>
                  <p className="text-gray-600">{role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
