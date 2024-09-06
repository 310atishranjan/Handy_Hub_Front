import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = ({ onClose }) => {
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://handy-hub-backened-2.onrender.com/api/v1/user/login",
        { mobileNo, password },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success("Login success");
      localStorage.setItem("token", response.data.token);
      setMobileNo('');
      setPassword('');
      
      onClose(); // Close the modal
      navigate("/"); // Navigate to home page
    } catch (err) {
      console.log(err);
      toast.error("Login failed");
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
            className='h-12 w-52 text-center mb-4 border-2 border-red-300 rounded text-black'
          />
        </div>
        <div>
          <input
            placeholder='Password'
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className='h-12 w-52 text-center mb-4 border-2 border-red-300 rounded text-black'
          />
        </div>
        <div className='flex justify-center'>
          <button className='bg-red-400 text-white p-2 rounded-md' type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
