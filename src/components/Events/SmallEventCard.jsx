import { FaCalendar, FaClock } from "react-icons/fa";

const SmallEventCard = ({ event, refProp, animate, className = "" }) => {
  return (
    <div
      ref={refProp}
      className={`${animate ? "animate-ease-in-left duration-300" : ""} ${className}`}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 left-3">
            <span className="bg-textcolor text-white px-2 py-1 rounded-full text-xs font-semibold">
              {event.category}
            </span>
          </div>
        </div>
        <div className="p-5 text-left">
          <h3 className="font-bold text-textcolor text-lg mb-2 line-clamp-2">{event.title}</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <FaCalendar className="w-3 h-3" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaClock className="w-3 h-3" />
              <span>{event.time}</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm line-clamp-3">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default SmallEventCard;