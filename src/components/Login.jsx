import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Context } from '../main'
const Login = ({ onClose }) => {
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
const {setisAuthenticated,setUser}=useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        // "https://handy-hub-backened-2-z771.onrender.com/api/v1/user/login",
        "http://localhost:5000/api/v1/user/login",
        { mobileNo, password },
        {
          method: 'POST',
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      
      toast.success("Login success");
      console.log(response.data);
      // localStorage.setItem("role",response.data.role);
      // localStorage.setItem("token", response.data.token);
      
      setMobileNo('');
      setPassword('');
      
      onClose(); // Close the modal
     
      navigate("/"); // Navigate to home page
      await fetchCookies();
    } catch (err) {
      console.log(err);
      toast.error("Login failed");
    }
  };

      const fetchCookies = async () => {
        try {
          const response = await axios.get("http://localhost:5000/api/v1/user/get-cookies", {
            withCredentials: true,
          });
          setisAuthenticated(true);
          console.log("Cookie token:", response.data.data);
          setUser(response.data.data);
        } catch (error) {
          console.error("Error fetching cookies:", error);
        }
      };

  return (
    <div className='flex justify-center align-middle p-8'>
      <form onSubmit={handleSubmit}>
        <h1 className='text-center text-xl font-bold mb-2'>Login</h1>
        <div>
          <input
            placeholder='Mobile-No'
            value={mobileNo}
            type="text"
            onChange={(e) => setMobileNo(e.target.value)}
            className='h-12 w-44 text-center mb-4 border-2 border-red-300 rounded-lg text-black'
          />
        </div>
        <div>
          <input
            placeholder='Password'
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className='h-12 w-44 text-center mb-4 border-2 border-red-300 rounded-lg text-black'
          />
        </div>
        <div className='flex justify-center flex-col'>
          <button className='bg-red-400 text-white p-2 rounded-md' type="submit">
            Login
          </button>
          <div className="flex gap-4">
          <h1>Not registered ? </h1>
          <Link to="/sign_up">SignUp</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
