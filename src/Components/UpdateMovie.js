// import React, { useState } from "react";
// import MovieService from "../Service/MovieService";



// const UpdateMovie = () => {
//   const [updatedData, setUpdatedData] = useState({
//     title: "",
//     language: "",
//     description: "",
//     rating: "",
//     genre: "",
//     crew: "",
//     trailerLink: "",
//     downloadLink: "",
//     director: "",
//     releaseDate: "",
//     runtime: ""  
//   });


//   const handleChange = (e) => {
//     setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
//   };

  

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         MovieService.updateMovie(updatedData).then((response)=>{
//         console.log(response);
//       }).catch(error =>{
//         console.log(error);
//       })
//       // success message or redirect
//     }catch (error) {
//       console.error(error);
//       // error message or display errors to user
//     }
//     console.log(updatedData);
//   };

//   const handleGenreChange = (e) => {
//     const genreArr = e.target.value.split(",");
//     setUpdatedData({
//       ...updatedData,
//       genre: genreArr,
//     });
//   };

//   const handleCrewChange = (e) => {
//     const crewArr = e.target.value.split(",");
//     setUpdatedData({
//       ...updatedData,
//       crew: crewArr,
//     });
//   };

 

//   return (
//     <form className="max-w-lg mx-auto mt-8" onSubmit={handleSubmit}>
//       <div>
//         <p className="px-5 flex justify-center text-2xl font-bold text-gray-800 uppercase">
//           UPDATE MOVIE DETAILS
//         </p>
//       </div>

//       <div className="mt-4">
//         <label htmlFor="title" className=" block text-gray-700 font-medium">
//           Movie Title:
//         </label>
//         <input
//           type="text"
//           name="title"
//           id="title"
//           placeholder="Change the title:"
//           value={updatedData.title}
//           onChange={handleChange}
//           className="w-full text-black border-gray-900 rounded-md mt-1"
//           required
          
//         />
//       </div>

//       <div className="mt-4">
//         <label htmlFor="language" className=" block text-gray-700 font-medium">
//           Language:
//         </label>
//         <input
//           type="text"
//           name="language"
//           id="language"
//           placeholder="Change the language:"
//           value={updatedData.language}
//           onChange={handleChange}
//           className="w-full text-black border-gray-300 rounded-md mt-1"
//           required
          
//         />
//       </div>
//       <div className="mt-4">
//         <label
//           htmlFor="description"
//           className=" block text-gray-700 font-medium"
//         >
//           Description:

//         </label>
//         <input
//           type="text"
//           name="description"
//           id="description"
//           placeholder="Change the description:"
//           value={updatedData.description}
//           onChange={handleChange}
//           className="w-full text-black border-gray-300 rounded-md mt-1"
//           required
//         />
//       </div>
//       <div className="mt-4">
//         <label htmlFor="rating" className=" block text-gray-700 font-medium">
          
//           IMDB Rating:

//         </label>
//         <input
//           type="text"
//           name="rating"
//           id="rating"
//           placeholder="Change the rating:"
//           value={updatedData.rating}
//           onChange={handleChange}
//           className="w-full text-black border-gray-300 rounded-md mt-1"
//           required
//         />
//       </div>
//       <div className="mt-4">
//         <label htmlFor="genre" className=" block text-gray-700 font-medium">
//           Genre (","):
//         </label>
//         <input
//           type="text"
//           name="genre"
//           id="genre"
//           placeholder="Change Genres:"
//           value={updatedData.genre}
//           onChange={handleGenreChange}
//           className="w-full text-black border-gray-300 rounded-md mt-1"
//           required
//         />
//       </div>
//       <div className="mt-4">
//         <label htmlFor="crew" className=" block text-gray-700 font-medium">
//           Crew (","):
//         </label>
//         <input
//           type="text"
//           name="crew"
//           id="crew"
//           placeholder="Cast & Crew:"
//           value={updatedData.crew}
//           onChange={handleCrewChange}
//           className="w-full text-black border-gray-300 rounded-md mt-1"
//           required
//         />
//       </div>
//       <div className="mt-4">
//         <label
//           htmlFor="trailerLink"
//           className=" block text-gray-700 font-medium"
//         >
//           TrailerLink:

//         </label>
//         <input
//           type="text"
//           name="trailerLink"
//           id="trailerLink"
//           placeholder="Change Movie trailer link:"
//           value={updatedData.trailerLink}
//           onChange={handleChange}
//           className="w-full text-black border-gray-300 rounded-md mt-1"
//           required
//         />
//       </div>
//       <div className="mt-4">
//         <label
//           htmlFor="downloadLink"
//           className=" block text-gray-700 font-medium"
//         >
//           DownloadLink:

//         </label>
//         <input
//           type="text"
//           name="downloadLink"
//           id="downloadLink"
//           placeholder="Change Downloads link:"
//           value={updatedData.downloadLink}
//           onChange={handleChange}
//           className="w-full text-black border-gray-300 rounded-md mt-1"
//         />
//       </div>

//       <div className="mt-4">
//         <label htmlFor="director" className=" block text-gray-700 font-medium">
//           Director:
//         </label>
//         <input
//           type="text"
//           name="director"
//           id="director"
//           placeholder="Change of the movie:"
//           value={updatedData.director}
//           onChange={handleChange}
//           className="w-full text-black border-gray-300 rounded-md mt-1"
//           required
//         />
//       </div>
//       <div className="mt-4">
//         <label
//           htmlFor="releaseDate"
//           className=" block text-gray-700 font-medium"
//         >
//           ReleaseDate:
//         </label>
//         <input
//           type="date"
//           name="releaseDate"
//           id="releaseDate"
//           placeholder="Change released on:"
//           value={updatedData.releaseDate}
//           onChange={handleChange}
//           className="w-full text-black border-gray-300 rounded-md mt-1"
//           required
//         />
//       </div>
//       <div className="mt-4">
//         <label htmlFor="runtime" className=" block text-gray-700 font-medium">
//           Runtime (min):
//         </label>
//         <input
//           type="text"
//           name="runtime"
//           id="runtime"
//           placeholder="Change Runtime:"
//           value={updatedData.runtime}
//           onChange={handleChange}
//           className="w-full text-black border-gray-300 rounded-md mt-1"
//           required
//         />
//       </div>

//       <button
//         type="submit"
//         onSubmit={handleSubmit}
//         className="justify-center mt-8 bg-blue-500 text-white font-bold py-2 px-4 rounded-md uppercase"
//       >
//           Save
//       </button>
//       <button
//         type="submit"
//         className="justify-center ml-5 mt-8 bg-red-500 text-white font-bold py-2 px-4 rounded-md uppercase"
//       >
//         <a href="/update" >
//             Cancel
//         </a>
//       </button>
//     </form>
//   );
// };

// export default UpdateMovie;
