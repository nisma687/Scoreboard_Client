import Baller from "../../components/Baller/Baller";
import BallerDataTable from "../../components/Baller/BallerDataTable";


const DashBoard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Baller/>
            <BallerDataTable/>
        </div>
    );
};

export default DashBoard;