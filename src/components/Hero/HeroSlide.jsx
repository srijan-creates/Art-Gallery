import SlickSlider from "react-slick";
import { HeroImg1, HeroImg2, HeroImg3, HeroImg4 } from "../../constants/images";

const slides = [HeroImg1, HeroImg2, HeroImg3, HeroImg4];

const HeroSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          dots: false,
        }
      }
    ]
  };

  return (
    <div className="py-40 md:pt-0 md:pb-33 bg-secondary font-display">
      <div className="px-4 sm:px-6 lg:px-8">
        <SlickSlider {...settings} className="h-full w-full z-2 bg-secondary ">
          {slides.map((imgSrc, index) => (
            <div key={index} className="max-w-full bg-secondary">
              <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-around lg:items-center gap-6 lg:gap-12">
                
                <div className="flex flex-col gap-4 sm:gap-6 lg:gap-12 text-center lg:text-left order-2 lg:order-1">
                  <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
                    Art Exhibit-2025
                  </h1>
                  
                  <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4 text-sm sm:text-base lg:text-xl">
                    <span>
                      <strong>WHAT: </strong>Art Exhibit-2025
                    </span>
                    <span>
                      <strong>WHEN: </strong>June 8<sup>th</sup> - July 08<sup>th</sup>, 2025
                    </span>
                    <span>
                      <strong>WHERE: </strong>Art Gallery
                    </span>
                  </div>
                  
                  <button className="btn self-center lg:self-start w-fit px-6 py-3 mt-2">
                    Read More
                  </button>
                </div>

                <div className="w-full sm:w-4/5 md:w-3/4 lg:w-auto mx-auto lg:mx-0 order-1 lg:order-2">
                  <div className="h-48 sm:h-60 md:h-80 lg:h-120 overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-lg">
                    <img
                      src={imgSrc}
                      alt={`Art Exhibit Slide ${index + 1}`}
                      className="w-full h-full object-center object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </SlickSlider>
      </div>
    </div>
  );
};

export default HeroSlide;