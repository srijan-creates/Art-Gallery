import { events } from "../../constants/Events";
import { useScrollAnimation } from "../../Hook/AnimationHook";
import MainEvent from "./MainEvent";
import EventInfo from "./EventInfo";
import SmallEventCard from "./SmallEventCard";
import SideEvent from "./SideEvent";

const Events = () => {
  const [ref1, animate1] = useScrollAnimation();
  const [ref2, animate2] = useScrollAnimation();
  const [ref3, animate3] = useScrollAnimation();
  const [ref4, animate4] = useScrollAnimation();
  const [ref5, animate5] = useScrollAnimation();

  return (
    <div className="font-display w-full max-w-7xl mx-auto py-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <MainEvent event={events[0]} refProp={ref1} animate={animate1} className="order-2 md:order-none" />
        <EventInfo refProp={ref2} animate={animate2} className="order-1 md:order-none" />
        <SmallEventCard event={events[1]} refProp={ref3} animate={animate3} className="order-3 md:order-none" />
        <SmallEventCard event={events[2]} refProp={ref4} animate={animate4} className="order-4 md:order-none" />
        <SideEvent event={events[3]} refProp={ref5} animate={animate5} className="order-5 md:order-none" />
      </div>
    </div>
  );
};

export default Events;