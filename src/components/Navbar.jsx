import {useContext, useState } from 'react';
import {Link} from "react-scroll";
import {Link as LL} from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import Login from './Login';
import LoginPage from './Login_page';
import { useEffect } from 'react';
import axios from 'axios';
import { Context } from '../main';
const Navbar = () => {
    const [show,setshow]=useState(false);
    const [loginShow,setloginShow]=useState(false);
    const [userinfo, setuserinfo] = useState({});
    const {isAuthenticated,setisAuthenticated}=useContext(Context);
    const handlelogout=async()=>{
      try {
        await axios.post("http://localhost:5000/api/v1/user/logout", {
          withCredentials: true,
        });
        setisAuthenticated(false);
        setloginShow(false);
        // window.location.reload(); // optional: only if you want to reset everything
        }catch (err) {
        console.error("Logout failed", err);
      }
    }
    const handleLogin=()=>{
      setshow(!show);
      setloginShow(!loginShow);
    }
   useEffect(() => {
  const fetchCookies = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/v1/user/get-cookies", {
        withCredentials: true,
      });
      console.log("Fetched cookie token:", response.data.data);
      setuserinfo(response.data.data);
      setisAuthenticated(true);
    } catch (error) {
      console.error("Error fetching cookies:", error);
    }
  };

  
    fetchCookies();
}, []);

  return (
    <nav>
        <div className='logo'>
          <img src="/logo.jpg" alt="Logo" className='w-24 h-24 rounded-3xl'/>
        </div>
        <div className={show ? "navLinks showmenu":"navLinks"}>
        <div className='links'>
          {/* <Link to="home" spy={true} smooth={true} duration={500}>Home</Link> */}
          <LL to="/">Home</LL>
          <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
          <Link to="services" spy={true} smooth={true} duration={500}>Services</Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
          {/* <LL to='/login' className='bg-red-300 pl-2 pr-2 rounded-md text-white'>Login</LL> */}
          {/* <button onClick={()=>(setloginShow(true))} className='bg-red-300 pl-2 pr-2 rounded-md text-white font-semibold'>Login</button> */}
          {!isAuthenticated?<button  onClick={handleLogin} className='bg-red-400 text-white p-2 rounded-md' type="submit">
            Login
          </button>:<button onClick={handlelogout} className='bg-red-400 text-white p-2 rounded-md'>Logout</button>}
          {loginShow ? <LoginPage onClose={()=>{setloginShow(false)}}><Login onClose={()=>{setloginShow(false)}}/></LoginPage>:"" }
          
        </div>
    </div>
    <div className='hamburger' onClick={()=>setshow(!show)}><GiHamburgerMenu/></div>
    </nav>
  )
}

export default Navbar