import { useScrollAnimation } from '../../Hook/AnimationHook';

const Maps = () => {
  const [ref, animate] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`row-start-2 col-start-1 transition ${animate ? "animate-ease-in-left duration-200" : ""}`}
    >
      <div className="h-full bg-white rounded-lg overflow-hidden shadow-lg group">
        <div className="aspect-[4/3] relative bg-gray-200">
          <iframe
            title="Gallery Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.210999305821!2d85.3239601!3d27.7061642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190daec4e917%3A0x9a27383f12b0a1d6!2sGallery%20Location!5e0!3m2!1sen!2snp!4v1721354852710"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Maps;
