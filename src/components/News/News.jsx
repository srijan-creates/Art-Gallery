import { NewsData } from "../../constants/NewsData";
import { useScrollAnimation } from "../../Hook/AnimationHook";
import { FaPlus } from "react-icons/fa";

const News = () => {
  const [ref, animate] = useScrollAnimation();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-16 max-w-7xl mx-auto font-display">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mx-auto">
          News & Updates
        </h2>
      </div>

      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
      >
        {NewsData.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            className={`relative rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer group
              ${animate ? `animate-ease-in-up duration-500 delay-${idx * 100}` : ""}`}
          >
            <div className="w-full aspect-[4/3]">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover brightness-40 group-hover:brightness-50 transition-all duration-300"
              />
            </div>

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto">
              <FaPlus className="text-white text-2xl md:text-3xl transition-transform duration-300" />
            </div>

            <div className="absolute bottom-2 left-2 text-white text-sm sm:text-base md:text-lg font-semibold z-10">
              {item.title}
            </div>
          </a>
        ))}
        <div className="flex justify-center items-center">
        <button className="btn ">
          View More
        </button>
      </div>
      </div>

      
    </div>
  );
};

export default News;
