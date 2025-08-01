import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { useScrollAnimation } from '../../Hook/AnimationHook'

const ContactInfo = () => {
    const [ref, animate] = useScrollAnimation();
  return (
    <div
          ref={ref}
          className={`row-start-1 col-start-3 transition ${animate ? "animate-ease-in-right duration-300" : ""}`}
        >
          <div className="h-full bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-textcolor mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-textcolor mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-sm text-gray-600">
                    Babar Mahal Revisited<br />
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaPhone className="w-5 h-5 text-textcolor mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-sm text-gray-600">+977-1-4218048</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaEnvelope className="w-5 h-5 text-textcolor mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-sm text-gray-600">info@siddharthaartgallery.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaClock className="w-5 h-5 text-textcolor mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Hours</p>
                  <p className="text-sm text-gray-600">
                    Mon-Fri: 10AM-6PM<br />
                    Sat: 10AM-5PM<br />
                    Sun: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ContactInfo;