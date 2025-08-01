import { useScrollAnimation } from "../../Hook/AnimationHook";

const Application = () => {
  const [ref, animate] = useScrollAnimation();
  return (
    <div className="max-w-7xl mx-auto font-display px-4">
      <div
        className={`flex flex-col my-8`}
        ref={ref}
      >
        <div className={`flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 lg:gap-8 mx-4 sm:mx-6 lg:mx-8 ${animate ? "animate-ease-in-up duration-500 delay-300" : ""}`}>
          <div className="flex-1">
            <p className="text-gray-400 font-medium italic text-xs sm:text-sm">
              Application:
            </p>

            <p className="text-xl sm:text-2xl lg:text-3xl font-medium mb-2 lg:mb-3">
              Residency Duration: 3-6 months
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              Facilities: Studio space, accommodation, material support,
              exhibition opportunity
            </p>
          </div>
          <div className="flex-shrink-0 self-start lg:self-center">
            <button className="btn w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3 text-sm sm:text-base">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;