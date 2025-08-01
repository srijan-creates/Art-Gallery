import { useScrollAnimation } from "../../Hook/AnimationHook";
import AutoPlay from "./Autoplay";

const Artist = () => {
  const [ref, animate] = useScrollAnimation();

  return (
    <div className="font-display py-16" ref={ref}>
      <h2
        className={` text-center md:mx-auto ${
          animate ? "animate-ease-in-left duration-300 delay-500" : ""
        }`}
      >
        Featured Artist
      </h2>
      <div ref={ref}>
        <div className={`${animate ? "animate-ease-in-up duration-300 delay-500" : ""}`}>
          <AutoPlay />
        </div>
      </div>
    </div>
  );
};

export default Artist;
