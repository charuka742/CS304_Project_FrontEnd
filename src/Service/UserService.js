import axios from "axios";

const USERS_Base_REST_API_URL = "http://localhost:8080/api/v1/users";

class UserService{
     getAllUsrs(){
        return axios.get(USERS_Base_REST_API_URL)
    }
 
     addUser(userDetails){
        return axios.post(USERS_Base_REST_API_URL, userDetails)
        
    }    

     updateUser(userId, userDetails){
        return axios.put(USERS_Base_REST_API_URL+ `/${userId}` , + userId, userDetails)
        
    }

     getUserById(userId){
        return axios.get(USERS_Base_REST_API_URL + `/${userId}`, userId)
    }

     deleteUser(userId){
        return axios.delete(USERS_Base_REST_API_URL+ `/${userId}`, userId)
        
    }

}
export default new UserService();