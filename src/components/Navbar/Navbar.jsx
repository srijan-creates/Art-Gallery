import { GiAbstract097 } from 'react-icons/gi';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`bg-secondary fixed top-0 left-0 w-full md:static md:w-auto z-50 transition-shadow duration-300 ${
        hasShadow ? 'shadow-xl' : ''
      }`}
    >
      <div className="mx-6 md:mx-10 mt-6 md:mt-10 bg-secondary">
        <div className="flex items-start justify-between">
          <Link to="/">
            <div className="flex items-center gap-2 text-4xl md:text-7xl font-logo cursor-pointer">
              <span className="text-5xl md:text-6xl">
                <GiAbstract097 />
              </span>
              <span className="font-semibold">Art Gallery</span>
            </div>
          </Link>
          <div>
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
