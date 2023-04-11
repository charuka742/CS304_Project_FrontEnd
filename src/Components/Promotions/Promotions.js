import React, { useState } from "react";
import { FaRegCalendarAlt, FaRegClock, FaTicketAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const promotions = [
  {
    theater: "ABC Cinemas",
    title: "Monday Madness",
    description:
      "Get 50% off on all tickets purchased on Mondays. Applicable on all movies and showtimes.",
    location: "123 Main St, Anytown, USA",
    date: "April 19, 2023",
    time: "7:30 PM",
  },
  {
    theater: "XYZ Cinemas",
    title: "Weekend Bonanza",
    description:
      "Buy 1 ticket and get 1 free on Saturdays and Sundays. Valid only for select movies and showtimes.",
    location: "456 Broadway, Anytown, USA",
    date: "April 22, 2023",
    time: "2:00 PM",
  },
];

const PromotionsPage = () => {
  const [selectedPromotion, setSelectedPromotion] = useState(null);

  const handlePromotionClick = (promotion) => {
    setSelectedPromotion(promotion);
  };

  const handleBackClick = () => {
    setSelectedPromotion(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {selectedPromotion ? (
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-3xl font-bold">
                {selectedPromotion.theater}
              </h1>
              <button
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={handleBackClick}
              >
                <IoMdArrowRoundBack className="text-xl" />
              </button>
            </div>
            <h2 className="text-xl font-bold mb-4">
              {selectedPromotion.title}
            </h2>
            <p className="mb-4">{selectedPromotion.description}</p>
            <div className="flex items-center mb-4">
              <HiOutlineLocationMarker className="text-gray-600 mr-2" />
              <p>{selectedPromotion.location}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaRegCalendarAlt className="text-gray-600 mr-2" />
              <p>{selectedPromotion.date}</p>
            </div>
            <div className="flex items-center mb-4">
              <FaRegClock className="text-gray-600 mr-2" />
              <p>{selectedPromotion.time}</p>
            </div>
            <Link
              to="/reservation"
              className="bg-yellow-500 text-white py-2 px-4 rounded-md flex items-center"
            >
              <FaTicketAlt className="mr-2" />
              Reserve Tickets
            </Link>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-6">Promotions</h1>
            {promotions.map((promotion, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-6 cursor-pointer mb-6"
                onClick={() => handlePromotionClick(promotion)}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">{promotion.theater}</h2>
                  <p className="text-gray-600">{promotion.date}</p>
                </div>
                <h3 className="text-xl font-bold mb-4">{promotion.title}</h3>
                <p className="mb-4">{promotion.description}</p>
                <div className="flex items-center">
                  <HiOutlineLocationMarker className="text-gray-600 mr-2" />
                  <p>{promotion.location}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PromotionsPage;
