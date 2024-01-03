import { useContext, useEffect, useState } from "react";
import { axiosPublic } from "./useAxios";
import { AuthContext } from "../providers/AuthProvider";


const useAdmin = () => {
    const {user}=useContext(AuthContext);
    const [isAdmin,setIsAdmin]=useState(false);
    axiosPublic.get("/users")
  .then((res)=>{
    const admin=res.data.filter((us)=>us.email===user.email && us.status==="admin");
    console.log(admin);
    const isAdmin=admin.length>0?true:false;
    console.log(isAdmin);
    setIsAdmin(isAdmin);
  })

    return isAdmin;
};

export default useAdmin;