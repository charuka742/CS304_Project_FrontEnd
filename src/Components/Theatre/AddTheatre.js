import React, { useEffect, useState } from "react";
import TheatreService from "../../Service/TheatreService";
import { useParams } from "react-router-dom";

const AddTheatre = () => {
  const [theatreData, setTheatreData] = useState({
    theatreName: "",
    email: "",
    city: "",
    teleNo: "",
    managerName: "",
    managerNo: "",
    noOfTotalSeats: "",
    standardSeats: "",
    premiumSeats: "",
    vipSeats: "",
  });

  const { theatreId } = useParams();

  const handleChange = (e) => {
    setTheatreData({ ...theatreData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      TheatreService.AddTheatre(theatreData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      // success message or redirect
    } catch (error) {
      console.error(error);
      // error message or display errors to user
    }
    console.log(theatreData);
  };

  useEffect(() => {
    if (theatreId) {
      TheatreService.getMovieById(theatreId)
        .then((response) => {
          console.log(response);
          setTheatreData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [theatreId]);

  const title = () => {
    if (theatreId) {
      return (
        <div className="justify-center">
          <p className="px-5 pb-6 flex justify-center text-3xl font-bold text-gray-800 uppercase">
            UPDATE THE THEATRE DETAILS
          </p>
          {/* <a
            href="/movieDetails"
            className=" font-sans bg-transparent hover:bg-blue-500 text-blue-700 font-bold uppercase hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          >
            BACK
          </a> */}
        </div>
      );
    } else {
      return (
        <div className="justify-center">
          <p className=" px-5 pb-6 flex justify-center text-3xl font-bold text-gray-800 uppercase">
            ADD THE THEATRE DETAILS
          </p>
          {/* <a
            href="/movieDetails"
            className="font-sans bg-transparent hover:bg-blue-500 text-blue-700 font-bold uppercase hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          >
            BACK
          </a> */}
        </div>
      );
    }
  };

  // const handleGenreChange = (e) => {
  //   const genreArr = e.target.value.split(",");
  //   settheatreData({
  //     ...theatreData,
  //     genre: genreArr,
  //   });
  // };

  // const handleCrewChange = (e) => {
  //   const crewArr = e.target.value.split(",");
  //   settheatreData({
  //     ...theatreData,
  //     crew: crewArr,
  //   });
  // };

  return (
    <section className="mt-50 mb-50 flex justify-center items-center h-screen shadow-5xl rounded-xl">
      <div className="w-full max-w-xl">
        <form
          className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div>{title()}</div>

          <div className="mt-4">
            <label
              htmlFor="theatreName"
              className="block text-gray-700 font-bold mb-2"
            >
              Theater Name:
            </label>
            <input
              type="text"
              name="theatreName"
              id="theatreName"
              placeholder="Enter the Name:"
              value={theatreData.theatreName}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="email" className=" block text-gray-700 font-medium">
              Email:
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter Theatre email:"
              value={theatreData.email}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="city" className=" block text-gray-700 font-medium">
              City:
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="Theatre city:"
              value={theatreData.city}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="teleNo"
              className=" block text-gray-700 font-medium"
            >
              Contact No:
            </label>
            <input
              type="text"
              name="teleNo"
              id="teleNo"
              placeholder="Enter the Contact No:"
              value={theatreData.teleNo}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="managerName"
              className=" block text-gray-700 font-medium"
            >
              Manager Name:
            </label>
            <input
              type="text"
              name="managerName"
              id="managerName"
              placeholder="Manager Name:"
              value={theatreData.managerName}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="managerNo"
              className=" block text-gray-700 font-medium"
            >
              Manager Contact No:
            </label>
            <input
              type="text"
              name="managerNo"
              id="managerNo"
              placeholder="Enter Contact No:"
              value={theatreData.managerNo}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="standardSeats"
              className=" block text-gray-700 font-medium"
            >
              No of Standard Seats:
            </label>
            <input
              type="number"
              name="standardSeats"
              id="standardSeats"
              placeholder="No of Standard Seats:"
              value={theatreData.standardSeats}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="premiumSeats"
              className=" block text-gray-700 font-medium"
            >
              No of Premium Seats:
            </label>
            <input
              type="number"
              name="premiumSeats"
              id="premiumSeats"
              placeholder="No of Premium Seats:"
              value={theatreData.premiumSeats}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="vipSeats"
              className=" block text-gray-700 font-medium"
            >
              No of VIP Seats:
            </label>
            <input
              type="number"
              name="vipSeats"
              id="vipSeats"
              placeholder="No of VIP Seats:"
              value={theatreData.vipSeats}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mt-4">
            <p className="block text-gray-700 font-medium">
              Total No of Seats in {theatreData.theatreName} is{" "}
              {theatreData.vipSeats +
                theatreData.standardSeats +
                theatreData.premiumSeats}
              .
            </p>
          </div>
          <div className="flex mt-4">
            <div className="flex items-start py-2 px-15   justify-center">
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                SUBMIT
              </button>
            </div>
            <div className="flex items-end py-2 px-15 justify-center">
              <button
                type="Cancel"
                className="bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                <a href="/theatreDetails">CANCEL</a>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddTheatre;
