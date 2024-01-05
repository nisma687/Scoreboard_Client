import useBatsmanData from "../../axios/useBatsmanData";
import useBawlerData from "../../axios/useBawlerData";


const ScoreBoardTable = () => {
    const { batsmanData}=useBatsmanData();
    // console.log(batsmanData);
    const {bawlerData}=useBawlerData();
    // console.log(bawlerData);
    return (
        <div>
            {/* table 1 */}
            <div>
            <div>
                <h3 className="text-center
                italic my-2
                 text-xl font-semibold text-blue-400">
                    BatsMan ScoreBoard
                </h3>
            </div>
            <div className="overflow-x-auto">
                
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Status</th>
        <th>4s</th>
        <th>6s</th>
        <th>Run</th>
      </tr>
    </thead>
    {batsmanData.map((batsman,index)=>(
      <tbody key={index}>
      <tr>
        <td>{index+1}</td>
        <td>{batsman.name}</td>
        <td>{batsman.status}</td>
        <td>{batsman.four}</td>
        <td>{batsman.six}</td>
        <td>{batsman.run}</td>
      </tr>
    </tbody>
    ))}
  </table>
            </div>
            </div>


            {/* table 2 */}
            <div>
                {/* heading */}
            <div>
                <h3 className="text-center
                italic my-4
                 text-xl font-semibold text-blue-400">
                    Bawler ScoreBoard
                </h3>
            </div>
            {/* table */}
            <div>
            <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Bowler Name</th> 
        <th>O</th> 
        <th>NB</th> 
        <th>W</th> 
        <th>Wd</th> 
        <th>R</th> 
        <th>M</th>
      </tr>
    </thead> 
    {
      bawlerData.map((bawler,index)=>(
        <tbody key={index}>
      <tr>
        <td>{index+1}</td> 
        <td>{bawler.name}</td> 
        <td>{bawler.over}</td> 
        <td>{bawler.noball}</td> 
        {/* {bawler.wicket==0?<td>{bawler.wicket=="true"?bawler.wicket="1":bawler.wicket=0
        }</td>:<td>{bawler.wicket=="true"?bawler.wicket=bawler.wicket+1:bawler.wicket
      }</td> } */}
        <td>{bawler.wicket}</td>
        <td>{bawler.wide}</td>
        <td>{bawler.run}</td> 
        <td>{bawler.maiden}</td>
      </tr>
    </tbody>
      ))
    }
   
  </table>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ScoreBoardTable;