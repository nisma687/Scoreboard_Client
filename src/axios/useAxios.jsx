import axios from "axios";
 
export const axiosPublic= axios.create({
    baseURL:"https://cricket-scoreborad-server.vercel.app",
    

});
const useAxios = () => {
    return axiosPublic;
 };
 
 export default useAxios; 