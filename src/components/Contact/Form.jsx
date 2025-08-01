import { FaPaperPlane } from 'react-icons/fa';
import { useScrollAnimation } from '../../Hook/AnimationHook'

const Form = () => {
    const [ref, animate] = useScrollAnimation();
  return (
    <div
          ref={ref}
          className={`row-start-1 col-start-2 row-span-2 transition ${animate ? "animate-ease-in-up duration-500" : ""}`}
        >
          <div className="h-full bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-textcolor mb-6">Send Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-all duration-300">
                  <option>General Inquiry</option>
                  <option>Artwork Purchase</option>
                  <option>Exhibition Information</option>
                  <option>Artist Collaboration</option>
                  <option>Press & Media</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-all duration-300 resize-none"
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>

              <button className="btn w-full flex items-center justify-center gap-2">
                <FaPaperPlane className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
  )
}

export default Form