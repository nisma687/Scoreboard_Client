import Cricketer from "./Cricketer";
import CricketerTable from "./CricketerTable";


const CricketerDashBoard = () => {
    return (
        <div className="grid md:grid-cols-2">
            <Cricketer/>
            <CricketerTable/>
        </div>
    );
};

export default CricketerDashBoard;