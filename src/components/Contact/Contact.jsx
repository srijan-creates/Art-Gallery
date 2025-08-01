import Form from "./Form";
import ContactInfo from "./ContactInfo";
import SocialMedia from "./SocialMedia";
import { useScrollAnimation } from "../../Hook/AnimationHook";
import Maps from "./Maps";

const Contact = () => {
  const [ref, animate] = useScrollAnimation();

  return (
    <div className="bg-secondary">
        <div className="font-display w-full max-w-7xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="flex flex-col gap-8 h-full">
          <div
            ref={ref}
            className={`${animate ? "animate-ease-in-up duration-500" : ""}`}
          >
            <h2 className=" text-textcolor mb-4">Get In Touch</h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Have questions about our exhibitions, want to inquire about artwork,
              or interested in collaborating? We'd love to hear from you.
            </p>
            <button className="btn">Visit Gallery</button>
          </div>

          <Form className="flex-grow" />
        </div>
        <div className="flex flex-col gap-8 h-full">
          <div className="flex-grow">
            <ContactInfo className="h-full" />
          </div>
          <div className="flex-grow">
            <Maps className="h-full" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;
