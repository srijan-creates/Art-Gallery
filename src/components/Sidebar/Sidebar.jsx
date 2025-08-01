import React from "react";
import HamburgerMenu from "../Navbar/HamburgerMenu";
import { SocialLinks } from "../../constants/SocialLinks";

const Sidebar = () => {
  return (
    <div>
      <div className="">
        <div className=" right-2 sm:right-10 w-[50px] z-3">
          <div className="flex flex-col gap-8 items-center">
            <HamburgerMenu />
            <div className="">
              <ul className="md:flex md:flex-col hidden gap-4 justify-center">
                {SocialLinks.map((data) => (
                  <li
                    key={data.id}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <a
                      href={data.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={data.name}
                      className="hover:text-textcolor transition-colors"
                    >
                      {data.icon && <data.icon size={30} />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
