import { useScrollAnimation } from "../../Hook/AnimationHook";
import { background2 } from "../../constants/images";

const Background = () => {
  const [ref, animate] = useScrollAnimation();

  return (
    <div
      className="relative md:h-screen bg-cover bg-center bg-no-repeat overflow-hidden md:bg-fixed h-[500px]"
      style={{
        backgroundImage: `url(${background2})`,
      }}
    >
      <div className="h-full flex items-center justify-center lg:sticky lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-60">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
          <div
            ref={ref}
            className={`bg-black/50 backdrop-blur-sm p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg text-white border border-white/20 shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl ${animate ? "animate-ease-in-left delay-500" : ""}`}
          >
            <p className="text-sm sm:text-base md:text-lg lg:w-[400px] g:text-xl xl:text-2xl leading-snug mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-justify">
              The Art Gallery believes that culture is an important component of development and coordinates special
              events that bring together artists, writers, and musicians. The Gallery focuses on various areas such as
              socio-cultural and political issues, as it believes that art can play a significant role in shaping
              national and international perceptions.
            </p>
            <div className="">
              <button className="btn">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
