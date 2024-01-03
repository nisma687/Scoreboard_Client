import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';

const Navbar = () => {
  const {user,logout}=useContext(AuthContext);
  const handleLogOut=()=>{
    logout()
    .then(res=>{
      console.log(res);
      Swal.fire({
        icon: 'success',
        title: 'Logged Out Successfully',
        showConfirmButton: false,
        timer: 1500
      })
    
    })
    .catch(err=>{
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    })
  }
    const navlinks=<>
    <li><NavLink>Home</NavLink></li>
     {user?"":<li><NavLink to="/login">Login</NavLink></li>}
     {user?"":<li><NavLink to="/register">Register</NavLink></li>}
    
     
     
    </>
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        Cricket ScoreBoard
    </a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
      {user && <div className="flex items-center">
          <span className="text-sm mr-2">Welcome {user.email}</span>
          <button onClick={handleLogOut} className="btn btn-ghost btn-sm">Logout</button>
      </div>}
  </div>
</div>
    );
};

export default Navbar;