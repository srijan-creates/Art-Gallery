import { background1, pattern } from "../../constants/images";
import { useScrollAnimation } from "../../Hook/AnimationHook";

const Mission = () => {
  const [ref1, animate1] = useScrollAnimation();
  const [ref2, animate2] = useScrollAnimation();
  const [ref3, animate3] = useScrollAnimation();

  const imageAnimation = animate1 ? "animate-ease-in-left duration-300" : "";
  const headingAnimation = animate2 ? "animate-ease-in-right duration-300" : "";
  const textAnimation = animate3 ? "animate-ease-in-up duration-300" : "";

  return (
    <div className="relative bg-secondary font-display px-6 pb-16 md:px-16 overflow-hidden">
      <div className="absolute inset-0 opacity-5 z-0">
        <img
          src={pattern}
          alt="Background pattern"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div
            ref={ref1}
            className={`w-full h-full rounded-lg overflow-hidden shadow-lg ${imageAnimation}`}
          >
            <img
              src={background1}
              alt="Art gallery mission background"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-6">
            <div
              ref={ref2}
              className={`flex flex-col gap-2 ${headingAnimation}`}
            >
              <h2 className="">Our Mission</h2>
              <span className="italic text-md md:text-lg text-gray-500">
                "Where creativity meets purpose."
              </span>
            </div>
            <p
              ref={ref3}
              className={`text-lg md:text-xl text-justify leading-relaxed max-w-3xl ${textAnimation}`}
            >
              At our gallery, we believe art is more than just visual
              expression—it's a bridge between cultures, a voice for the
              unheard, and a catalyst for change. Our mission is to showcase
              diverse artistic voices from around the world, nurturing
              creativity, conversation, and connection. We aim to create an
              inclusive space where both emerging and established artists can
              share their stories, challenge perceptions, and inspire new ways
              of thinking. Through curated exhibitions, educational programs,
              and community collaborations, we strive to make art accessible to
              all and to foster a deeper appreciation for the power of artistic
              expression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
