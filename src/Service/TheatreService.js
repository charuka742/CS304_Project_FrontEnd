
import axios from "axios";

const THEATRE_Base_REST_API_URL = "http://localhost:8080/api/v1/theatres";

class TheatreService{
     getAllTheatres(){
        return axios.get(THEATRE_Base_REST_API_URL)
    }
 
     addTheatre(theatreDetails){
        return axios.post(THEATRE_Base_REST_API_URL, theatreDetails)
        
    }    

     updateTheatre(theatreId, theatreDetails){
        return axios.put(THEATRE_Base_REST_API_URL+ `/${theatreId}` , + theatreId, theatreDetails)
        
    }

     getTheatreById(theatreId){
        return axios.get(THEATRE_Base_REST_API_URL + `/${theatreId}`, theatreId)
    }

     deleteTheatre(theatreId){
        return axios.delete(THEATRE_Base_REST_API_URL+ `/${theatreId}`, theatreId)
        
    }

}


const TheatreServiceInstance = new TheatreService();
export default TheatreServiceInstance;