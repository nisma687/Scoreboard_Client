
import ScoreBoardTable from "./ScoreBoardTable";


const ScoreBoard = () => {
    
    return (
        <div>
            <h3 className="text-2xl
            text-blue-800
             font-bold text-center">Ongoing Match...</h3>
             <div>
                    <h1 className="text-xl
                    text-blue-800 italic my-2
                    font-semibold text-center">ScoreBoard</h1>
             </div>
                <div className="bg-slate-300
                rounded-lg ga flex-shrink-0
                ">
                    <ScoreBoardTable/>
                </div>

        </div>
    );
};

export default ScoreBoard;