import {useNavigate} from "react-router-dom";
import {Link} from "react-scroll";
import Navbar from "./Navbar";
const Home = () => {
  const nav=useNavigate();
  const getworkforce=()=>{
    nav('/getWorkForce')
  }
  return (
    <>
    <Navbar/>
   <div className="md:flex-row mt-14 flex h-full flex-col-reverse justify-center p-4">
    <div className="">
      <div className="mb-10">
      <h1 className="text-red-400 text-2xl font-bold">Welcome, to WorkForce Hub</h1>
        <h1 >Connecting Talent with Opportunity</h1>
      </div>
    <p className="text-xl">
      Workforce Hub is your one-stop platform for all types of work-related needs. <br/> Whether you are looking for skilled professionals 
      or seeking job opportunities, we have got you covered.</p>
      <div className="text-white border-2 inline-block rounded-md bg-gray-500 p-1 mt-6">
      <Link to="contact" spy={true} smooth={true} duration={500}><button>Contact</button></Link></div>
      <div className="text-white border-2 inline-block rounded-md bg-gray-500 p-1 mt-6"><button onClick={getworkforce}>Get WorkForce List</button></div>
      <div className="text-white border-2 inline-block rounded-md bg-gray-500 p-1 mt-6"><button onClick={()=>{nav('/pay')}}>Pay After Service</button></div>
      {localStorage.getItem("token")?
      <div className="text-white border-2 inline-block rounded-md bg-gray-500 p-1 mt-6"><button onClick={()=>{nav('/addworkforce')}}>Add WorkForce</button></div>:""}
    </div>
    <div className="md: mt-10 mr-2 justify-center items-center"><img src="/work-hub1.jpg" className="h-92 w-96"></img></div>
   </div>
   </>
  )
}

export default Home