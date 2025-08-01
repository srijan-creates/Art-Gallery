import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import {
  head1,
  head2,
  head3,
  head4,
  head5,
  head6,
} from "../../constants/images";

const NextArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 -right-5 z-10 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black rounded-full p-2 shadow-md transition duration-300 cursor-pointer"
  >
    <HiChevronRight className="w-6 h-6" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    onClick={onClick}
    className="absolute top-1/2 -left-5 z-10 transform -translate-y-1/2 bg-white/90 hover:bg-white text-black rounded-full p-2 shadow-md transition duration-300 cursor-pointer"
  >
    <HiChevronLeft className="w-6 h-6" />
  </div>
);

const AutoPlay = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 1000,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const images = [head1, head2, head3, head4, head5, head6];

  return (
    <div className="slider-container py-10 px-4 max-w-7xl mx-auto relative">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div key={idx}>
            <div className="group w-80 h-80 mx-auto overflow-hidden relative rounded-2xl shadow-md transition-all duration-300 hover:scale-105 cursor-pointer">
              <img
                src={img}
                alt={`Artist ${idx + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-300 group-hover:brightness-25"
              />
              <p className="absolute bottom-4 left-6 text-xl text-white font-bold drop-shadow">
                Artist Name
              </p>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl font-semibold">
                  View Detail
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlay;
