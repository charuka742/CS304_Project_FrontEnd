import axios from "axios";

const Movies_Base_REST_API_URL = "http://localhost:8080/api/v1/movies";

class MovieService{
     getAllMvs(){
        return axios.get(Movies_Base_REST_API_URL)
    }
 
     addMovie(movieDetails){
        return axios.post(Movies_Base_REST_API_URL, movieDetails)
        
    }    

     updateMovie(movieId, movieDetails){
        return axios.put(Movies_Base_REST_API_URL+ `/${movieId}` , + movieId, movieDetails)
        
    }

     getMovieById(movieId){
        return axios.get(Movies_Base_REST_API_URL + `/${movieId}`, movieId)
    }

     deleteMovie(movieId){
        return axios.delete(Movies_Base_REST_API_URL+ `/${movieId}`, movieId)
        
    }

}
export default new MovieService();