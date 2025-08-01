import { useState } from "react";
import { Menulists } from "../../constants/Menulists";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { SocialLinks } from "../../constants/SocialLinks";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleAccordion = (id) => {
    setActiveAccordion((prev) => (prev === id ? null : id));
  };


  return (
    <div className="relative font-display z-50">
      <button
        className="block z-50 relative p-2"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <IoMdClose 
            size={24} 
            className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white cursor-pointer" 
          />
        ) : (
          <RxHamburgerMenu 
            size={24} 
            className="sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 cursor-pointer" 
          />
        )}
      </button>

      {isOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 bg-black bg-opacity-95 text-white shadow-lg h-screen overflow-x-hidden overflow-y-auto transition-transform duration-300 ease-in-out transform-gpu
          w-full sm:w-96 md:w-[400px] lg:w-[450px] xl:w-[500px]
          p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={closeMenu}
          aria-label="Close menu"
          className="absolute top-8 sm:top-10 md:top-12 right-8 sm:right-10 md:right-7 text-white p-2"
        >
          <IoMdClose 
            size={28} 
            className="sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 cursor-pointer hover:text-textcolor" 
          />
        </button>

        <ul className="pt-16 sm:pt-18 md:pt-20 lg:pt-22 flex flex-col gap-4 sm:gap-5 md:gap-6">
          {Menulists.map((item) => {
            const isAccordion = item.icon && item.icon2;
            const isActive = activeAccordion === item.id;

            return (
              <li key={item.id} className="text-lg sm:text-xl md:text-xl lg:text-2xl uppercase text-white">
                <div
                  className="flex justify-between items-center cursor-pointer hover:text-textcolor transition-colors duration-200 py-2"
                  onClick={() =>
                    isAccordion ? toggleAccordion(item.id) : closeMenu()
                  }
                >
                  <span>{item.name}</span>
                  {isAccordion &&
                    (isActive ? (
                      <item.icon2 size={14} className="sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    ) : (
                      <item.icon size={14} className="sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                    ))}
                </div>

                {isAccordion && isActive && (
                  <ul className="mt-2 sm:mt-3 ml-3 sm:ml-4 flex flex-col gap-1 sm:gap-2 text-xs sm:text-sm md:text-base">
                    <li className="hover:text-textcolor cursor-pointer transition-colors duration-200 py-1">
                      Overview
                    </li>
                    <li className="hover:text-textcolor cursor-pointer transition-colors duration-200 py-1">
                      Our Team
                    </li>
                    <li className="hover:text-textcolor cursor-pointer transition-colors duration-200 py-1">
                      History
                    </li>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        <div className="text-lg sm:text-xl md:text-xl mt-4 sm:mt-5 md:mt-6">
          <input
            type="search"
            placeholder="Search"
            className="w-full px-3 py-2 sm:px-4 sm:py-3 text-white rounded-lg border bg-transparent text-sm sm:text-base focus:ring-2 focus:ring-textcolor transition-all duration-200"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                closeMenu();
              }
            }}
          />
        </div>

        <div className="text-xs sm:text-sm md:text-base leading-5 flex flex-col gap-1 sm:gap-2 mt-4 sm:mt-5 md:mt-6">
          <p className="font-semibold">Exhibition Hours</p>
          <p>Sunday - Friday: 11:00 am - 05:00 pm</p>
          <p>Saturday: 12:00 - 5:00 pm</p>
        </div>

        <ul className="flex gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-5 md:mt-6">
          {SocialLinks.map((data) => (
            <li key={data.id}>
              <a
                href={data.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={data.name}
                className="hover:text-textcolor transition-colors duration-200 p-1"
              >
                {data.icon && (
                  <data.icon 
                    size={18} 
                    className="sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" 
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
