import { SocialLinks } from "../../constants/SocialLinks";
import { useScrollAnimation } from "../../Hook/AnimationHook";

const SocialMedia = () => {
    const [ref, animate] = useScrollAnimation();
  return (
    <div
          ref={ref}
          className={`row-start-2 col-start-3 transition ${animate ? "animate-ease-in-right duration-200" : ""}`}
        >
          <div className="h-full bg-textcolor text-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
            <p className="text-sm opacity-90 mb-6">
              Stay connected with our latest exhibitions, events, and artist features.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {SocialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300 group"
                  >
                    <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-semibold">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
  )
}

export default SocialMedia