import React, { useState } from "react";
// import { FaRegCalendarAlt, FaRegClock, FaTicketAlt } from "react-icons/fa";
// import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoMdArrowRoundBack } from "react-icons/io";
// import { Link } from "react-router-dom";

const feedbacks = [
  {
    title: "Avengers: Endgame",
    description: "One of the best movies ever made!",
    rating: 5,
    reply: "Thank you for your feedback! We're glad you enjoyed the movie.",
  },
  {
    title: "The Lion King",
    description: "I loved the music and the animation was amazing.",
    rating: 4,
    reply: "Thank you for your feedback! We're glad you enjoyed the movie.",
  },
  {
    theater: "ABC Cinemas",
    description: "The seats were uncomfortable and the sound quality was poor.",
    rating: 2,
    reply: "We're sorry to hear that you had a bad experience. We'll work on improving our facilities.",
  },
];

const FeedbackList = () => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const handleFeedbackClick = (feedback) => {
    setSelectedFeedback(feedback);
  };

  const handleBackClick = () => {
    setSelectedFeedback(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {selectedFeedback ? (
          <div className="bg-white shadow-md rounded-md p-6">
            <div className="flex justify-between items-center mb-6">
              
              <h1 className="text-3xl font-bold">
                {selectedFeedback.title || selectedFeedback.theater}
              </h1>
              <button
                className="text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={handleBackClick}
              >
                <IoMdArrowRoundBack className="text-xl" />
              </button>

            </div>
            
            <h2 className="text-xl font-bold mb-4">
              Rating: {selectedFeedback.rating}
            </h2>

            <p className="mb-4">{selectedFeedback.description}</p>
            {selectedFeedback.reply && (
              <div className="bg-gray-200 rounded-md p-4 mb-4">
                <p className="font-bold">Reply:</p>
                <p>{selectedFeedback.reply}</p>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold mb-6">Feedbacks</h1>
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-md p-6 cursor-pointer mb-6"
                onClick={() => handleFeedbackClick(feedback)}
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">{feedback.title || feedback.theater}</h2>
                  {feedback.title && <p className="text-gray-600">{feedback.rating} stars</p>}
                </div>
                <p className="mb-4">{feedback.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackList;
