import { FaClock, FaMap, FaMapPin, FaPhone } from "react-icons/fa6";
import TopBanner from "../../Components/Top_Banner/TopBanner";
import { MdEmail } from "react-icons/md";
// import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <TopBanner title={"Contact Us"} path={"Home / Contact"} />

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Contact Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              Have a question or need help with your car service booking?
              We’re here to assist you. Contact us through any of the following
              ways, and our team will get back to you shortly.
            </p>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FaPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Phone</h3>
                  <p className="text-gray-600">+880 1745-678910</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <MdEmail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">Email</h3>
                  <p className="text-gray-600">support@autonex.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FaMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    Location
                  </h3>
                  <p className="text-gray-600">
                    123 AutoCare Street, Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <FaClock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    Mon - Sat: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              Send Us a Message
            </h3>
            <form className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-100 rounded-lg p-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-100 rounded-lg p-3 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Write your message..."
                  rows={4}
                  className="w-full border border-gray-300 focus:border-blue-600 focus:ring focus:ring-blue-100 rounded-lg p-3 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
