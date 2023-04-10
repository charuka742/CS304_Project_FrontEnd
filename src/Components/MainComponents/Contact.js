import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";

function ContactUs() {
  return (
    <div className="max-h-screen bg-gray-100 flex flex-col justify-center py-6 sm:px-3 lg:px-4">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Contact Us
          </h2>
          <div className="mt-6 space-y-6 grid grid-cols-1">
            <div>
              <FaEnvelope size={20} className=" text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-gray-700">
                You can send us an email at{" "}
                <a
                  href="mailto:youremailaddress@example.com"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  zerozinema@gmail.com
                </a>{" "}
                with any questions, concerns, or feedback you may have. We
                strive to respond to all emails within 24 hours, but it may take
                longer during busy periods.
              </p>
            </div>

            <div>
              <FiChevronDown size={20} className="text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-gray-700">
                If you prefer to speak with us over the phone, you can reach us
                at{" "}
                <a
                  href="tel:123-456-7890"
                  className="text-indigo-600 hover:text-indigo-500"
                >
                  +94764759812
                </a>
                . Our customer service representatives are available Monday to
                Friday, 9am-5pm, to assist you with any questions or issues you
                may have.
              </p>
            </div>
            <div classname="mt-6 space-y-6">
              <div className=" flex items-center space-x-4">
                <p className="text-gray-700">
                  You can also reach us on social media, and we'll do our best
                  to get back to you as soon as possible.
                </p>
              </div>
              <div className="flex items-center justify-center mt-4 space-x-4">
                <a
                  href="https://www.facebook.com/zerozinema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-900"
                >
                  <span className="sr-only">Facebook</span>
                  <FaFacebook size={25} className="" />
                </a>
                <a
                  href="https://www.linkedin.com/company/zerozinema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-900"
                >
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin size={25} className="" />
                </a>
                <a
                  href="https://www.instagram.com/zerozinema"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#c92bb7]"
                >
                  <span className="sr-only">Instagram</span>
                  <FaInstagram size={25} className="" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCV7Gx9zOuV7uy1fzkguVZqg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-700"
                >
                  <span className="sr-only">YouTube</span>
                  <FaYoutube size={25} className="" />
                </a>
                <a
                  href="https://wa.me/94764759812"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-green-700"
                >
                  <span className="sr-only">WhatsApp</span>
                  <FaWhatsapp size={25} className="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
