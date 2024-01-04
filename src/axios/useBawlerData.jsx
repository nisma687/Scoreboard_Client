import { useEffect, useState } from "react";
import { axiosPublic } from "./useAxios";


const useBawlerData = () => {
    const [bawlerData, setBawlerData] = useState([]);
    useEffect(() => {
        axiosPublic.get("/bawlers")
        .then((res)=>{
            setBawlerData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, []);
    return {bawlerData};
};

export default useBawlerData;