import { useForm } from "react-hook-form";

import { Button, Label, TextInput, Select } from "flowbite-react";

import { axiosPublic } from "../../axios/useAxios";
import useBatsmanData from "../../axios/useBatsmanData";
import { Tooltip } from 'react-tooltip'

const Cricketer = () => {
  const { register, handleSubmit, reset } = useForm();
  const { batsmanData } = useBatsmanData();
  // console.log(batsmanData);

  const handlePlayerAdd = (e) => {
    e.preventDefault();
    const player = e.target.playerName.value;
    const playerData = { name: player, run: 0, four: 0, six: 0, status: "out" };

    if (player === "") {
      alert("Please Enter a Player Name");
      return;
    }
    // console.log(playerData);
    axiosPublic
      .post("/batsmans", playerData)
      .then((res) => {
        console.log(res);
        alert("Player Added Successfully");
        window.location.reload();
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data) => {
    // console.log(data);
    const batsman = data.names;
    let run = data.run;
    const four = data.four;
    const six = data.six;
    const status = data.status;
    if (run === "") {
      run = 0;
    }
    const dataofBatesMan = {
      name: batsman,
      run: run,
      four: four,
      six: six,
      status: status,
    };
    // console.log(datas);

    const realBatsman = batsmanData.filter(
      (batsman) => batsman.name == data.names
    )[0];
    // console.log(realBatsman);
    // id batsman
    const id = realBatsman._id;
    console.log(id);
    axiosPublic
      .patch(`/batsman/${id}`, dataofBatesMan)
      .then((res) => {
        console.log(res.data);
        alert("Score Updated Successfully");
        reset();
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });

    // reset();
  };
  return (
    <div
      className="mt-2 bg-slate-200 
    rounded-lg ga
    p-5 m-3  "
    >
      <div>
        <h1 className="text-xl font-bold">Update Score of Cricketer here</h1>
      </div>
      <div>
        <h1 className="text-xl my-4 font-bold ">Add a cricketer</h1>
        {/* first form */}
        <form onSubmit={handlePlayerAdd} action="">
          <div>
            <TextInput
              className="w-2/4"
              id="player"
              name="playerName"
              type="text"
            />
            <button
            data-tooltip-id="adding" data-tooltip-content="Add a player first"
             className="my-3 btn btn-info">
            
              Add Player</button>
              <Tooltip id="adding" />
          </div>
        </form>
      </div>
      {/* second form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex max-w-md flex-col gap-4"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Select The player" />
          </div>
          <Select
            id="names"
            className="w-3/4"
            {...register("names", { required: true })}
          >
            {batsmanData.map((batsman) => {
             
              return (
                <option 
                className="text-green-500"
                key={batsman._id} value={batsman.name}>
                  {batsman.status === "not-out" ? batsman.name : batsman.name + "*(out)"}
                </option>
              );
              
            })}
          </Select>
        </div>
        <div>
          <div className="mb-2 ">
            <Label htmlFor="four" value="4s" />
          </div>
          <Select
            id="four"
            className="w-3/4"
            {...register("four", { required: false })}
          >
            <option value="0">0</option>
            <option value="1">4</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 ">
            <Label htmlFor="six" value="6s" />
          </div>
          <Select
            id="six"
            className="w-3/4"
            {...register("six", { required: false })}
          >
            <option value="0">0</option>
            <option value="1">6</option>
          </Select>
        </div>
        <div className="flex items-center gap-2">
          <div className="mb-2 block">
            <Label htmlFor="status" value="status" />
          </div>
          <Select
            id="status"
            className="w-2/4"
            {...register("status", { required: true })}
          >
            <option value="not-out">notOut</option>
            <option value="out">out</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="run" value="Run" />
          </div>
          <TextInput
            id="run"
            className="w-3/4"
            {...register("run", { required: false })}
            type="text"
          />
        </div>

        <div className="text-center ">
          <Button
            className="w-2/4 
        
         btn btn-success"
         data-tooltip-id="result" data-tooltip-content="Submit to see the result"
            type="submit"
          >
            Submit
          </Button>
          <Tooltip id="result" />
        </div>
      </form>
    </div>
  );
};

export default Cricketer;
