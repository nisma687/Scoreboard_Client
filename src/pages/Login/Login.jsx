import { useContext } from "react";
import img from "../../assets/img/6343825.jpg";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
const Login = () => {
    const {login}=useContext(AuthContext);
    const {
        register,
        handleSubmit,
        reset,
       
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        login(data.email,data.password)
        .then((result)=>{
            console.log(result.user);
            Swal.fire({
                icon: 'success',
                title: 'Logged In Successfully',
                showConfirmButton: false,
                timer: 1500
              })
            reset();
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
        Cricket ScoreBoard
        Login</h2>
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
            <span className="label-text">Email</span>
          </label>
          <input
            {...register("email", { required: true })}
           type="email" placeholder="email" className="input input-bordered" required />
           {errors.email && <span
            className="text-red-500">This field is required</span>}
           
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            {...register("password", { required: true })}
           type="password" placeholder="password" className="input input-bordered" required />
              {errors.password && <span
                className="text-red-500">Password is required</span>}
         
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

export default Login;