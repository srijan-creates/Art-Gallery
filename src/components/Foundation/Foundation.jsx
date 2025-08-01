import React, { useState } from "react";
import Slider from "react-slick";
import { background, background1, background2 } from "../../constants/images";
import { useScrollAnimation } from "../../Hook/AnimationHook";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { headline, paragraphs } from "../../constants/FoundationText";

const Foundation = () => {
  const [ref, animate] = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);
  const contentRef = React.useRef(null);

  const images = [background, background1, background2];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  return (
    <div className="bg-secondary overflow-x-hidden pt-8 md:my-20">
      <div className="max-w-7xl font-display mx-auto py-10 my-6 px-2 sm:px-4">
        <div className="flex flex-col gap-6">
          <h2 className="mx-auto">Arts Foundation</h2>

          <div ref={ref} className={`${animate ? "animate-ease-in-up" : ""}`}>
            <div className="overflow-hidden rounded-lg h-[400px]">
              <Slider {...settings}>
                {images.map((img, idx) => (
                  <div key={idx} className="h-[400px]">
                    <img
                      src={img}
                      alt={`Foundation slide ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="font-semibold text-2xl md:w-1/3 flex items-start">
              <>
                {headline.map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </>
            </div>

            <div className="flex flex-col gap-8 text-lg md:w-2/3">
              <div
                ref={contentRef}
                className={`text-lg text-justify space-y-4 transition-all duration-300 ${
                  showMore
                    ? "max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200"
                    : "line-clamp-[8]"
                }`}
                style={
                  showMore
                    ? {
                        scrollbarWidth: "thin",
                        scrollbarColor: "#9ca3af #e5e7eb",
                      }
                    : {}
                }
              >
                {paragraphs.map((para, i) => (
                  <p key={i} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="flex justify-start">
                <button
                  onClick={() => {
                    if (showMore && contentRef.current) {
                      contentRef.current.scrollTop = 0;
                    }
                    setShowMore(!showMore);
                  }}
                  className="text-textcolor cursor-pointer font-semibold underline hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-textcolor focus:ring-opacity-50 rounded"
                >
                  {showMore ? "Show Less" : "Show More"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foundation;
