import { FaCalendar, FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const MainEvent = ({ event, refProp, animate, className = "" }) => {
  return (
    <div
      ref={refProp}
      className={`md:col-span-2 md:row-span-2 ${animate ? "animate-ease-in-up duration-500" : ""} ${className}`}
    >
      <div className="h-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
        <div className="relative h-80 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="bg-textcolor text-white px-3 py-1 rounded-full text-sm font-semibold">
              {event.category}
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm opacity-90">
              <div className="flex items-center gap-1">
                <FaCalendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaClock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>
          <button className="btn flex items-center gap-2 max-w-max uppercase font-semibold tracking-wide">
            Learn More <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainEvent;





