import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show)
    return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
      className=" bg-black text-white hover:text-textcolor hover:bg-white rounded-full max-w-fit fixed bottom-10 right-10 z-50  transition-all delay-75 cursor-pointer p-5 hidden md:block hover:border hover:border-textcolor"
    >
      <FaArrowUp className="text-2xl md:text-3xl"/>
    </button>
  );
};

export default ScrollToTop;