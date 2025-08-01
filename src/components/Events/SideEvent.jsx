import { FaCalendar, FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const SideEvent = ({ event, refProp, animate, className = "" }) => {
  return (
    <div
      ref={refProp}
      className={`md:col-span-2 ${animate ? "animate-ease-in-up duration-400" : ""} ${className}`}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
        <div className="flex flex-col md:flex-row">
          <div className="relative md:w-1/3 h-48 md:h-auto overflow-hidden">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-3 left-3">
              <span className="bg-textcolor text-white px-2 py-1 rounded-full text-xs font-semibold">
                {event.category}
              </span>
            </div>
          </div>
          <div className="md:w-2/3 p-6 flex flex-col justify-start text-left">
            <h3 className="font-bold text-textcolor text-xl mb-3">{event.title}</h3>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
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
            <div className="flex flex-col gap-4">
              <p className="text-gray-700 leading-relaxed">{event.description}</p>
              <button className="btn flex items-center gap-2 max-w-max uppercase font-semibold tracking-wide">
                Learn More <FaArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideEvent;