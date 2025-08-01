import React from "react";
import SlickSlider from "react-slick";
import infoCarouselData from "../../constants/InfoCarouselData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InfoCarousel = () => {
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    swipeToSlide: true,
    cssEase: "ease-in-out",
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="py-12 max-w-7xl mx-auto px-4">
      <SlickSlider {...settings}>
        {infoCarouselData.map((card) => {
          const Icon = card.icon;
          return (
            <div key={card.id} className="px-4">
              <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
                <div className="mb-4">
                  <Icon className="text-4xl text-textcolor
                  " />
                </div>
                <h3 className="font-semibold text-xl text-gray-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 flex-grow">{card.description}</p>
              </div>
            </div>
          );
        })}
      </SlickSlider>
    </div>
  );
};

export default InfoCarousel;
