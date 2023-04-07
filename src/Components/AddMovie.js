import React, { useEffect, useState } from "react";
import MovieService from "../Service/MovieService";
import { useParams } from "react-router-dom";

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
  // console.log(movieId)

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      MovieService.addMovie(movieData)
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
      MovieService.getMovieById(movieId)
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
        <p className="px-5 flex justify-center text-2xl font-bold text-gray-800 uppercase">
          UPDATE THE MOVIE DETAILS
        </p>
      );
    } else {
      return (
        <p className="px-5 flex justify-center text-2xl font-bold text-gray-800 uppercase">
          ADD THE MOVIE DETAILS
        </p>
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
    <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
      <div>
        {title()}
        
      </div>

      <div className="mt-4">
        <label htmlFor="title" className=" block text-gray-700 font-medium">
          Movie Title:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter the title:"
          value={movieData.title}
          onChange={handleChange}
          className="w-full text-black border-gray-900 rounded-md mt-1"
          required
        />
      </div>

      <div className="mt-4">
        <label htmlFor="language" className=" block text-gray-700 font-medium">
          Language:
        </label>
        <input
          type="text"
          name="language"
          id="language"
          placeholder="Enter the language:"
          value={movieData.language}
          onChange={handleChange}
          className="w-full text-black border-gray-300 rounded-md mt-1"
          required
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="description"
          className=" block text-gray-700 font-medium"
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
          className="w-full text-black border-gray-300 rounded-md mt-1"
          required
        />
      </div>
      <div className="mt-4">
        <label htmlFor="rating" className=" block text-gray-700 font-medium">
          IMDB Rating:
        </label>
        <input
          type="text"
          name="rating"
          id="rating"
          placeholder="Enter the rating:"
          value={movieData.rating}
          onChange={handleChange}
          className="w-full text-black border-gray-300 rounded-md mt-1"
          required
        />
      </div>
      <div className="mt-4">
        <label htmlFor="genre" className=" block text-gray-700 font-medium">
          Genre (","):
        </label>
        <input
          type="text"
          name="genre"
          id="genre"
          placeholder="Genres:"
          value={movieData.genre}
          onChange={handleGenreChange}
          className="w-full text-black border-gray-300 rounded-md mt-1"
          required
        />
      </div>
      <div className="mt-4">
        <label htmlFor="crew" className=" block text-gray-700 font-medium">
          Crew (","):
        </label>
        <input
          type="text"
          name="crew"
          id="crew"
          placeholder="Cast & Crew:"
          value={movieData.crew}
          onChange={handleCrewChange}
          className="w-full text-black border-gray-300 rounded-md mt-1"
          required
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="trailerLink"
          className=" block text-gray-700 font-medium"
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
          className="w-full text-black border-gray-300 rounded-md mt-1"
          required
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="downloadLink"
          className=" block text-gray-700 font-medium"
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
          className="w-full text-black border-gray-300 rounded-md mt-1"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="director" className=" block text-gray-700 font-medium">
          Director:
        </label>
        <input
          type="text"
          name="director"
          id="director"
          placeholder="Director of the movie:"
          value={movieData.director}
          onChange={handleChange}
          className="w-full text-black border-gray-300 rounded-md mt-1"
          required
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="releaseDate"
          className=" block text-gray-700 font-medium"
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
          className="w-full text-black border-gray-300 rounded-md mt-1"
          required
        />
      </div>
      <div className="mt-4">
        <label htmlFor="runtime" className=" block text-gray-700 font-medium">
          Runtime (min):
        </label>
        <input
          type="text"
          name="runtime"
          id="runtime"
          placeholder="Runtime in min:"
          value={movieData.runtime}
          onChange={handleChange}
          className="w-full text-black border-gray-300 rounded-md mt-1"
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
  );
};

export default AddMovieForm;
