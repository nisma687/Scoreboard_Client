
import { useForm } from "react-hook-form";
import img from "../../assets/img/4707071.jpg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';
import useAxios, { axiosPublic } from "../../axios/useAxios";

const Register = () => {
    const {createUser}=useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
       
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        createUser(data.email,data.password)
        .then((result)=>{
            console.log(result.user);
            const info={
                name:data.name,
                email:data.email
            }
            axiosPublic.post("/addUser",info)
            .then((res)=>{
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Registered Successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
                reset();
            })
            .catch((err)=>{
                console.log(err);
            })

            
        })
        .catch((error)=>{
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
        })

      }
    return (
        <div className="hero min-h-screen bg-base-200">
            
        <div className="hero-content flex-col lg:flex-row">
          <div>
          <h2 className="text-2xl
          mb-4
          font-semibold text-center">
            Registration Page
              </h2>
              <img 
              className="h-[500px] w-[700px] object-cover"
              src={img} />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name"
                {...register("name", { required: true })} 
                className="input input-bordered"  />
                 {errors.name && <span
                    className="text-red-500">This field is required</span>}
                 
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" 
                {...register("email", { required: true })}
                placeholder="email" className="input input-bordered"  />
                    {errors.email && <span
                className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"
               {...register("password", { required: true,maxLength: 20,minLength: 8 })}
                 placeholder="password" className="input input-bordered" />
                {errors.password?.type==="required" && <span
                className="text-red-500">This field is required</span>}
                {
                     errors.password?.type==="maxLength" && <span className="text-red-600">Password should be less than 20 characters</span>
                  }
                  {
                     errors.password?.type==="minLength" && <span className="text-red-600">Password should be more than 8 characters</span>
                 }
              
               
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;