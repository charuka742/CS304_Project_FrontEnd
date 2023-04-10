import {BiDetail } from "react-icons/bi";
import {FaCertificate} from "react-icons/fa";
import { useState, useEffect } from "react";
import MovieService from "../../Service/MovieService";
import im from "../../Assets/pic.jpg"
// import {RiVideoLine} from 'react-icons/ri'

const Main = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getAllMvs()
  }, []);

  const getAllMvs = () => {
    MovieService.getAllMvs()
      .then((response) => {
        setMovie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most Popular Movies</h3>
      </div>
      <div className="secContent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
        {movie.map(({ movieId, imgSrc, title, language, director, rating, trailerLink, releaseDate, description }) => {
          
          return (
            <div key={movieId} className="singleDestination rounded-lg shadow-lg ml-8 mr-4 overflow-hidden" style={{backgroundImage: `url(${im})`, backgroundSize: 'cover'}} >
              {/* <div className="imageDiv">
                <img src={imgSrc} alt={title} />
              </div> */}
              <div className="cardInfo p-6 md:p-8 lg:p-12 xl:p-16">
                <h4 className="Title text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium mb-2">{title}</h4>
                <div className="content flex items-center mb-4">
                  <FaCertificate className="icon mr-2" />
                  <span className="name text-gray-600">{language}</span>
                </div>
                <div className="content flex items-center mb-4">
                  <span className="name text-gray-600">{"By: "+ director}</span>
                </div>
                <div className="Year flex items-center">
                  <div className="rating bg-[#0c4a6e] text-white rounded-3xl py px-2 mr-4">
                    <span className="ratingAA text-lg md:text-lg lg:text-lg xl:text-lg font-medium">{rating}</span>
                    <small className="text-xs md:text-xs lg:text-xs xl:text-xs font-medium">+2</small>
                  </div>
                  <div className="releaseDate">
                    <h5 className="text-gray-600 text-xs md:text-xs lg:text-xs xl:text-xs font-medium">{releaseDate}</h5>
                  </div>
                </div>
                <div className="desc text-gray-600 text-xs md:text-xs lg:text-xs xl:text-xs font-medium mt-4">
                  <p>{description}</p>
                </div>
                <button href={`/${movie.movieId}`} className="btn flex items-center mt-6 bg-[#9333ea] hover:bg-[#64748b] text-white rounded-3xl py-2 px-4 transition duration-300 ease-in-out">
                  Details <BiDetail className="icon ml-2" />
                </button>
                {/* <button href={`/${movie.movieId}`} className="btn flex items-center mt-6 bg-[#9333ea] hover:bg-[#64748b] text-white rounded-3xl py-2 px-4 transition duration-300 ease-in-out">
                  trailer <RiVideoLine className="icon ml-2 mr-2" />
                </button> */}
              </div>
            </div>
          );
        })}
        
      </div>
    </section>
  );
};

export default Main;
