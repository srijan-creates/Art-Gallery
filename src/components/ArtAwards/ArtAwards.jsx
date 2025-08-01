import { FaArrowRight } from "react-icons/fa";
import ArtAwardsData from "../../constants/ArtAwardsData";
import { useScrollAnimation } from "../../Hook/AnimationHook";

const ArtAwards = () => {
  const animations = [
    useScrollAnimation(),
    useScrollAnimation(),
    useScrollAnimation(),
  ];

  return (
    <div className="bg-gray-400/10 py-8">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
        <div className="font-display flex flex-col gap-8">
          <h2 className="mx-auto text-center">Art Awards</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {ArtAwardsData.map((award, index) => {
              const [ref, animate] = animations[index];
              return (
                <div key={award.id} ref={ref}>
                  <div
                    className={`flex flex-col items-center gap-8 group ${
                      animate ? `animate-ease-in-up ${award.delay} cursor-pointer` : ""
                    }`}
                  >
                    <div className="max-w-[350px] sm:max-w-[400px] max-h-[300px] overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                      <img
                        src={award.image}
                        alt={award.title}
                        className="object-center object-cover w-full h-full"
                      />
                    </div>

                    <div className="flex flex-col gap-2 items-center">
                      <p className="font-bold text-center line-clamp-1">{award.title}</p>
                      <span className="uppercase flex gap-2 items-center font-bold text-gray-700 group-hover:text-textcolor transition-all duration-300 cursor-pointer">
                        View More
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtAwards;
