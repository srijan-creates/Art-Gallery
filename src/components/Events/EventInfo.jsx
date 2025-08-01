// EventInfo.js
const EventInfo = ({ refProp, animate, className = "" }) => {
  return (
    <div
      ref={refProp}
      className={`flex flex-col gap-6 justify-center text-center md:text-left ${animate ? "animate-ease-in-right duration-500" : ""} ${className}`}
    >
      <h2 className="text-textcolor">Upcoming Events</h2>
      <p className="leading-relaxed text-gray-700">
        Join us for inspiring exhibitions, artist talks, workshops, and special events that bring the art community together.
      </p>
      <button className="btn max-w-max mx-auto md:mx-0 uppercase font-semibold tracking-wide">
        View All Events
      </button>
    </div>
  );
};

export default EventInfo;