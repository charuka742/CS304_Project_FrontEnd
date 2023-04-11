import { FaCertificate } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import Data from './data';

function MostPopularMovies() {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Popular Movies
        </h3>
      </div>
      <div className="secContent grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Data.map(({ id, imgSrc, FilmName, Category, rating, Year, Description }) => {
          return (
            <div data-aos="fade-up" className="singleDestination bg-white rounded-lg overflow-hidden shadow-md">
              <div className="imageDiv">
                <img src={imgSrc} alt={FilmName} className="w-full" />
              </div>
              <div className="cardInfo p-4">
                <h4 className="FilmName text-xl font-bold mb-2">{FilmName}</h4>
                <div className="content flex items-center mb-2">
                  <FaCertificate className="icon mr-1" />
                  <span className="name text-gray-600">{Category}</span>
                </div>

                <div className="Year flex items-center mb-2">
                  <div className="rating flex items-center mr-4">
                    <span className="ratingAA font-bold text-gray-800 text-lg">{rating}</span>
                    <small className="text-gray-500 ml-1">+2</small>
                  </div>
                  <div className="price">
                    <h5 className="text-gray-600 text-sm">{Year}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p className="text-gray-600 text-sm">{Description}</p>
                </div>
                <button className="btn flex items-center bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
                  Details <BiDetail className="icon ml-2" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MostPopularMovies;
