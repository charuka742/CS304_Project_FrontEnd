import React, { useState } from "react";
import Rating from "react-rating";
import { FiSend } from "react-icons/fi";
import { HiOutlineStar, HiStar } from "react-icons/hi";

const AddFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [newFeedback, setNewFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFeedbacks([
      ...feedbacks,
      {
        feedback: newFeedback,
        rating: rating,
        customerName: customerName,
        id: feedbacks.length,
      },
    ]);
    setNewFeedback("");
    setRating(0);
    setCustomerName("");
  };

  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-900">
          Feedback
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="font-bold mb-2 text-blue-700 dark:text-blue-900">
              Rating
            </label>
            <Rating
              emptySymbol={<HiOutlineStar className="text-yellow-500" />}
              fullSymbol={<HiStar className="text-yellow-500" />}
              onClick={(value) => setRating(value)}
              initialRating={rating}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold mb-2 text-blue-700 dark:text-black-200">
              Comment
            </label>
            <textarea
              className="border border-blue-300 dark:border-blue-600 rounded-md p-2 h-32"
              value={newFeedback}
              onChange={(e) => setNewFeedback(e.target.value)}
            ></textarea>
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold mb-2 text-blue-700 dark:text-black-200">
              Name
            </label>
            <input
              className="border border-blue-300 dark:border-blue-600 rounded-md p-2"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center"
          >
            <FiSend className="mr-2" />
            Submit
          </button>
        </form>
        {feedbacks.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-200">
              Previous Feedbacks
            </h2>
            {feedbacks.map((feedback) => (
              <div
                key={feedback.id}
                className="bg-white border border-blue-300 dark:border-blue-600 rounded-md p-4 mb-4"
              >
                <div className="flex justify-between mb-2">
                  <Rating
                    emptySymbol={<HiOutlineStar className="text-yellow-500" />}
                    fullSymbol={<HiStar className="text-yellow-500" />}
                    initialRating={feedback.rating}
                    readonly
                  />
                  <div className="text-blue-200 dark:text-blue-400">
                    {feedback.customerName}
                  </div>
                </div>
                <div className="text-blue-500 dark:text-blue-400">
                  {feedback.feedback}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default AddFeedback;
