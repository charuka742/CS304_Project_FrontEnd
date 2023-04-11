import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaBars } from "react-icons/fa";
import {MdOutlineLocalMovies} from "react-icons/md";
import {RiArrowRightSLine} from "react-icons/ri";
import {GiTheater} from "react-icons/gi";
import {VscFeedback} from "react-icons/vsc";
import {AiOutlineGift} from "react-icons/ai";



function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => {
    setIsMobile(!isMobile);
  };

  return (
    <aside
      className={`bg-gray-900 text-gray-500 ${
        isMobile ? "h-screen" : "h-screen"
      } w-64 flex flex-col ${isMobile ? "absolute top-0 left-0 z-50" : ""}`}
    >
      <div className="uppercase p-4 flex items-center justify-between">
        <Link to="/" className="text-white font-bold text-2xl">
          Dashboard
        </Link>
        <button
          className="text-gray-500 hover:text-white focus:outline-none focus:text-white lg:hidden"
          aria-label="Toggle sidebar"
          onClick={toggleSidebar}
        >
          <RiArrowRightSLine size={15} className={`mr-3 ${isMobile ? "hidden" : ""}`} />
          <FaBars size={15} className={`mr-3 ${isMobile ? "" : "hidden"}`} />
        </button>
      </div>

      <nav className={`flex-grow ${isMobile ? "block" : "hidden"} lg:block`}>
        <ul className="mt-6">
          
          <li className="px-4 py-2 rounded-sm mb-0.5">
            <Link
              to="/"
              className="flex items-center uppercase text-white opacity-75 hover:opacity-100"
            >
              <FaHome size={15} className="mr-3" />
              Home
            </Link>
          </li>

          <li className="px-4 py-2 rounded-sm mb-0.5">
            <Link
              to="/movieDetails"
              className="flex items-center uppercase text-white opacity-75 hover:opacity-100"
            >
              <MdOutlineLocalMovies size={15} className="mr-3" />
              Movies
            </Link>
          </li>

          <li className="px-4 py-2 rounded-sm mb-0.5">
            <Link
              to="/theatreDetails"
              className="flex items-center uppercase text-white opacity-75 hover:opacity-100"
            >
              <GiTheater size={15} className="mr-3" />
              Theatres
            </Link>
          </li>
          <li className="px-4 py-2 rounded-sm mb-0.5">
            <Link
              to="/userDetails"
              className="flex items-center uppercase text-white opacity-75 hover:opacity-100"
            >
              <FaUsers size={15} className="mr-3" />
              Users
            </Link>
          </li>

          <li className="px-4 py-2 rounded-sm mb-0.5">
            <Link
              to="/addPromotions"
              className="flex items-center uppercase text-white opacity-75 hover:opacity-100"
            >
              <AiOutlineGift size={15} className="mr-3" />
              Promotions
            </Link>
          </li>

          <li className="px-4 py-2 rounded-sm mb-0.5">
            <Link
              to="/feedbacks"
              className="flex items-center uppercase text-white opacity-75 hover:opacity-100"
            >
              <VscFeedback size={15} className="mr-3" />
              FeedBacks
            </Link>
          </li>

          {/* <li className="px-4 py-2 rounded-sm mb-0.5">
            <Link
              to="/notifications"
              className="flex items-center uppercase text-white opacity-75 hover:opacity-100"
            >
              <IoIosNotificationsOutline size={15} className="mr-3" />
              Notifications
            </Link>
          </li> */}

          {/* <li className="px-4 py-2 rounded-sm mb-0.5">
            <Link
              to="/documents"
              className="flex items-center uppercase text-white opacity-75 hover:opacity-100"
            >
              <FaFileAlt size={15} className="mr-3" />
              Documents
            </Link>
          </li> */}

        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
