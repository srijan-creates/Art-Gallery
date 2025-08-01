import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { GiAbstract097 } from "react-icons/gi";
import { SocialLinks } from "../../constants/SocialLinks";
import { FooterLinks } from "../../constants/FooterLinks";

const Footer = () => {
  return (
    <div className="bg-black text-white font-display py-5 flex flex-col gap-8">
      <div className="flex flex-col items-center gap-8 border-b-1 border-gray-300 py-5">
        <div className="font-logo text-3xl sm:text-4xl md:text-5xl lg:text-6xl flex items-center gap-4">
          <GiAbstract097 aria-hidden="true" />
          Art Gallery
        </div>

        <div className="flex gap-4 text-2xl text-gray-300">
          {SocialLinks.map((data) => (
            <a
              key={data.id}
              href={data.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={data.name}
              className="hover:text-textcolor transition"
            >
              <data.icon />
            </a>
          ))}
        </div>

        {/* Mobile Layout: Simple 2 columns */}
        <div className="block md:hidden w-full max-w-sm mx-auto">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {FooterLinks.slice(0, -1).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-center py-1 text-xs text-gray-300 hover:text-textcolor transition duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
          {/* Contact Us centered in its own row */}
          <div className="flex justify-center mt-2">
            <a
              href={FooterLinks[FooterLinks.length - 1].href}
              className="text-center py-1 text-xs text-gray-300 hover:text-textcolor transition duration-200"
            >
              {FooterLinks[FooterLinks.length - 1].label}
            </a>
          </div>
        </div>

        {/* Desktop Layout: Original horizontal with separators */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-x-2 gap-y-2 text-sm text-center text-gray-300">
          {FooterLinks.map((link, index) => (
            <div key={link.href}>
              <a
                href={link.href}
                className="hover:text-textcolor transition px-2"
              >
                {link.label}
              </a>
              {index < FooterLinks.length - 1 && (
                <span className="text-gray-500" aria-hidden="true">
                  |
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="text-gray-400 flex flex-col gap-2 items-center text-xs">
        <span>Copyright &copy; {new Date().getFullYear()} Art Gallery</span>
        <span>All Rights Reserved.</span>
      </div>
    </div>
  );
};

export default Footer;