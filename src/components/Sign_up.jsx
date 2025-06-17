import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Login from "./Login";

const Register = () => {
  const [name,setname]=useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://handy-hub-backened-2-z771.onrender.com/api/v1/user/register",
        { name,mobileNo, password, role:"user"},
        {
          method: 'POST',
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response.data);
      toast.success("Register success");

      setMobileNo('');
      setPassword('');
      
      navigate("/"); // Navigate to home page
    } catch (err) {
      console.log(err);
      toast.error("Register failed");
    }
  };

  return (
    <div className='flex justify-center align-middle p-8'>
      <form onSubmit={handleSubmit}>
        <h1 className='text-center text-xl font-bold mb-2'>Register Page</h1>
        <div>
          <input
            placeholder='Name'
            value={name}
            type="text"
            onChange={(e) => setname(e.target.value)}
            className='h-12 w-56 text-center mb-4 border-2 border-red-300 rounded-lg text-black'
          />
        </div>
        <div>
          <input
            placeholder='Mobile-No'
            value={mobileNo}
            type="text"
            onChange={(e) => setMobileNo(e.target.value)}
            className='h-12 w-56 text-center mb-4 border-2 border-red-300 rounded-lg text-black'
          />
        </div>
        <div>
          <input
            placeholder='Password'
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className='h-12 w-56 text-center mb-4 border-2 border-red-300 rounded-lg text-black'
          />
        </div>
        <div className='flex justify-center flex-col'>
          <button className='bg-red-400 text-white p-2 rounded-md' type="submit">
            Register
          </button>
        <div className="flex gap-4">
            <h1>Already an Acccount ?</h1>
            <Link to='/login'>Login</Link>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
