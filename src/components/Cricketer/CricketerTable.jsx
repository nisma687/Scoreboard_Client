import useBatsmanData from "../../axios/useBatsmanData";


const CricketerTable = () => {
    const {batsmanData}=useBatsmanData();
    // console.log(batsmanData);
    return (
        <div>
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
    );
};

export default CricketerTable;