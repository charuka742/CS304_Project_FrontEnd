import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieServiceInstance from "../../Service/MovieService";

const AddMovieForm = () => {
  const [movieData, setMovieData] = useState({
    title: "",
    language: "",
    description: "",
    rating: "",
    genre: "",
    crew: "",
    trailerLink: "",
    downloadLink: "",
    director: "",
    releaseDate: "",
    runtime: "",
  });

  const { movieId } = useParams();

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      MovieServiceInstance.addMovie(movieData)
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
    console.log(movieData);
  };

  useEffect(() => {
    if (movieId) {
      MovieServiceInstance.getMovieById(movieId)
        .then((response) => {
          console.log(response);
          setMovieData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [movieId]);

  const title = () => {
    if (movieId) {
      return (
        <div className="justify-center">
          <p className="px-5 pb-6 flex justify-center text-3xl font-bold text-gray-800 uppercase">
            UPDATE THE MOVIE DETAILS
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
            ADD THE MOVIE DETAILS
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

  const handleGenreChange = (e) => {
    const genreArr = e.target.value.split(",");
    setMovieData({
      ...movieData,
      genre: genreArr,
    });
  };

  const handleCrewChange = (e) => {
    const crewArr = e.target.value.split(",");
    setMovieData({
      ...movieData,
      crew: crewArr,
    });
  };

  return (
    <section className="mt-6 mb-6 px-60  flex  items-center h-max shadow-5xl rounded-xl ">
      <div className="w-full max-w-md justify-center">
        <form className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="text-2xl font-bold mb-6 text-center uppercase" >{title()}</div>

          <div className="mt-4">
            <label
              htmlFor="title"
              className=" block text-gray-700 font-bold pb-4"
            >
              Movie Title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter the title:"
              value={movieData.title}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="language"
              className="block text-gray-700 font-bold mb-2"
            >
              Language:
            </label>
            <input
              type="text"
              name="language"
              id="language"
              placeholder="Enter the language:"
              value={movieData.language}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Enter the description:"
              value={movieData.description}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="rating"
              className="block text-gray-700 font-bold mb-2"
            >
              IMDB Rating:
            </label>
            <input
              type="text"
              name="rating"
              id="rating"
              placeholder="Enter the rating:"
              value={movieData.rating}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="genre" className="block text-gray-700 font-bold mb-2">
              Genre (","):
            </label>
            <input
              type="text"
              name="genre"
              id="genre"
              placeholder="Genres:"
              value={movieData.genre}
              onChange={handleGenreChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label htmlFor="crew" className="block text-gray-700 font-bold mb-2">
              Crew (","):
            </label>
            <input
              type="text"
              name="crew"
              id="crew"
              placeholder="Cast & Crew:"
              value={movieData.crew}
              onChange={handleCrewChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="trailerLink"
              className="block text-gray-700 font-bold mb-2"
            >
              TrailerLink:
            </label>
            <input
              type="text"
              name="trailerLink"
              id="trailerLink"
              placeholder="Movie trailer link:"
              value={movieData.trailerLink}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="downloadLink"
              className="block text-gray-700 font-bold mb-2"
            >
              DownloadLink:
            </label>
            <input
              type="text"
              name="downloadLink"
              id="downloadLink"
              placeholder="Downloads link(if possible)):"
              value={movieData.downloadLink}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="director"
              className="block text-gray-700 font-bold mb-2"
            >
              Director:
            </label>
            <input
              type="text"
              name="director"
              id="director"
              placeholder="Director of the movie:"
              value={movieData.director}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="releaseDate"
              className="block text-gray-700 font-bold mb-2"
            >
              ReleaseDate:
            </label>
            <input
              type="date"
              name="releaseDate"
              id="releaseDate"
              placeholder="Movie released on:"
              value={movieData.releaseDate}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="runtime"
              className="block text-gray-700 font-bold mb-2"
            >
              Runtime (min):
            </label>
            <input
              type="number"
              name="runtime"
              id="runtime"
              placeholder="Runtime in min:"
              value={movieData.runtime}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <button
            type="submit"
            onSubmit={handleSubmit}
            className="justify-center mt-8 bg-blue-500 text-white font-bold py-2 px-4 rounded-md uppercase"
          >
            SUBMIT
          </button>
          <button
            type="submit"
            className="justify-center ml-5 mt-8 bg-red-500 text-white font-bold py-2 px-4 rounded-md uppercase"
          >
            <a href="/moviedetails">CANCEL</a>
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddMovieForm;
