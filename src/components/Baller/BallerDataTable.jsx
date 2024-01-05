
import useBawlerData from "../../axios/useBawlerData";


const BallerDataTable = () => {
  
  const {bawlerData}=useBawlerData();
  // console.log(bawlerData);
  // bawlerData.map((bawler)=>console.log(bawler.name));

    return (
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
    );
};

export default BallerDataTable;