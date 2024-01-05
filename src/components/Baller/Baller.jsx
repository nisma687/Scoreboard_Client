import { useForm } from "react-hook-form";
import { Button, Checkbox, Label, TextInput,Select } from 'flowbite-react';
// import axios from "axios";
import { axiosPublic } from "../../axios/useAxios";
import useBawlerData from "../../axios/useBawlerData";



const Baller = () => {
    const { register, handleSubmit,reset } = useForm();
    const {bawlerData}=useBawlerData();
    // console.log(bawlerData);
    const handlePlayerAdd=(e)=>{
        e.preventDefault();
        const player=e.target.playerName.value;
        const playerData={name:player,run:0,over:0,wicket:0,maiden:0,noball:0,wide:0};

        console.log(playerData);
        if(player===""){
            alert("Please Enter a Player Name");
            return;
        }
        const playerObj=bawlerData.filter((bawler)=>bawler.name===player);
        if(playerObj.length>0){
            
            alert("Player Already Exists");
            return;
        }
        
        axiosPublic.post("/bawlers",playerData)
        .then((res)=>{
            console.log(res);
            alert("Player Added Successfully");
            window.location.reload();
            bawlerData.push(playerData);
            reset();
        })
        .catch((err)=>{
            console.log(err);
        })
    }
   
  const onSubmit = data => {


    // const bawler=ballerObj[0];
    // bawler.run=bawler.run+data.run;
    // bawler.over=bawler.over+0.1;
    // console.log(data);
   
    
    const bowler = data.names;
    const run = data.run;
    let Wicket = 0;
    let noball = 0;
    let Wide = 0;
    const isWicket = data.isWicket;
    const isNoball = data.isNoball;
    const isWide = data.isWide;
    const maiden = data.maiden;
    const mainBowler=bawlerData.filter((bawler)=>bawler.name===bowler)[0];
    console.log(mainBowler);
    const id=mainBowler._id;
    console.log(id);
    if(isWide === true && isNoball === true){
        console.log("you can't take wide and noball at a time");
        alert("you can't take wide and noball at a time");
        reset();
        return;
    }
    if(isWide === true && isWicket === true){
        console.log("you can't take wide and wicket at a time");
        alert("you can't take wide and wicket at a time");
        reset();
        return;
    }
    if(isNoball === true && isWicket === true){
        console.log("you can't take noball and wicket at a time");
        alert("you can't take noball and wicket at a time");
        reset();
        return;
    }
    if(isWide === true){
        Wide = 1;
    }
    if(isNoball === true){
        noball = 1;
    }
    if(isWicket === true){
        Wicket = 1;
    }
    const updatedBowlerData={run:mainBowler.run+parseInt(run),
        over:mainBowler.over+0.1,
        wicket:Wicket,
        noball:noball,
        maiden:maiden,
        wide:Wide};
    console.log(updatedBowlerData);
    axiosPublic.patch(`/bawler/${id}`,updatedBowlerData)
    .then((res)=>{
        console.log(res.data);
        alert("Data Updated Successfully");
        reset();
        window.location.reload();
    }
    )
    .catch((err)=>{
        console.log(err);
    })
    
    


    

    // const bowlerData = { name: bowler, run: run, over: 0.1, wicket: Wicket, maiden: maiden, noball: noball, wide: Wide};
    // console.log(bowlerData);
    // axiosPublic.post("/bawler",bowlerData)
    // .then((res)=>{
    //     console.log(res);
    //     alert("Data Inserted Successfully");
    //     reset();
    // })
    // .catch((err)=>{
    //     console.log(err);
    // })

    
  };
    return (
        <div className="mt-2">
            <div>
            <h1 className="text-xl font-bold">Update Score of Bowler here</h1>
            </div>
            <div>
            <h1 className="text-xl my-4 font-bold">Add a player</h1>
            <form 
            onSubmit={handlePlayerAdd}
            action="">
            <div>
        <TextInput id="player" 
       name="playerName"
        type="text" />
        <button className="my-3 btn btn-info">
            Add Player
        </button>
      </div>
            </form>
            </div>
   <form 
    onSubmit={handleSubmit(onSubmit)}
   className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Select The player" />
        </div>
        <Select id="names" 
        {...register("names", { required: true })}
        >
        {
            bawlerData.map((bawler,index)=>(
                <option
                key={index}
                 value={bawler.name}>{bawler.name}</option>
            ))
        }

      </Select>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="run" value="Given Run" />
        </div>
        <TextInput id="run" 
        {...register("run", { required: false })}
        type="text" />
      </div>
      <div className="flex items-center gap-2">
        <div className="mb-2 block">
          <Label htmlFor="wicket" value="Wicket" />
        </div>
        <Checkbox id="wicket" 
        {...register("isWicket", { required: false })}
        />
      </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="noball" value="No ball" />
            </div>
            <Checkbox id="noball" 
            {...register("isNoball", { required: false })}
            />   
        </div>
        <div>
            <div className="mb-2 block">
            <Label htmlFor="wide" value="Wide" />
            </div>
            <Checkbox id="wide" 
            {...register("isWide", { required: false })}
            />
        </div>
       <div>
        <div className="mb-2 block">
          <Label htmlFor="over" value="Over" />
        </div>
        <TextInput id="over" 
        readOnly
       
        {...register("over", { required: false })}
        type="text" />
       </div>
         <div>
          <div className="mb-2 block">
             <Label htmlFor="maiden" value="Maiden" />
          </div>
          <TextInput id="maiden" 
          defaultValue={0}
          {...register("maiden", { required: false })}
          type="number" />
            </div>

      <Button
      
       type="submit">Submit</Button>
     

      


    </form>
        </div>
    );
};

export default Baller;