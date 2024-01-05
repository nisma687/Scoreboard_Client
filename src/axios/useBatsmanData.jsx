import { useEffect, useState } from "react";
import { axiosPublic } from "./useAxios";


const useBatsmanData = () => {
    const [batsmanData, setBatsmanData] = useState([]);
    useEffect(() => {
        axiosPublic.get("/batsmans")
            .then((res) => {
                setBatsmanData(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return { batsmanData};
};

export default useBatsmanData;