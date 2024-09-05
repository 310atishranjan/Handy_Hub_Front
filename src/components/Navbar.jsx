import {useState } from 'react';
import {Link} from "react-scroll";
// import {Link as LL} from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import Login from './Login';
import LoginPage from './Login_page';
const Navbar = () => {
    const [show,setshow]=useState(false);
    const [loginShow,setloginShow]=useState(false);
    const [local,setlocal]=useState(false);
    const handlelogout=()=>{
      setlocal(true); // it re-render components
      localStorage.clear();
      window.location.reload()
    }
    const handleLogin=()=>{
      setshow(!show);
      setloginShow(!loginShow);
    }
  return (
    <nav>
        <div className='logo'>
          <img src="/logo.jpg" alt="Logo" className='w-24 h-24 rounded-3xl'/>
        </div>
        <div className={show ? "navLinks showmenu":"navLinks"}>
        <div className='links'>
          <Link to="home" spy={true} smooth={true} duration={500}>Home</Link>
          <Link to="about" spy={true} smooth={true} duration={500}>About</Link>
          <Link to="services" spy={true} smooth={true} duration={500}>Services</Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
          {/* <LL to='/login' className='bg-red-300 pl-2 pr-2 rounded-md text-white'>Login</LL> */}
          {/* <button onClick={()=>(setloginShow(true))} className='bg-red-300 pl-2 pr-2 rounded-md text-white font-semibold'>Login</button> */}
          {!localStorage.getItem("token")?<button  onClick={handleLogin} className='bg-red-400 text-white p-2 rounded-md' type="submit">
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