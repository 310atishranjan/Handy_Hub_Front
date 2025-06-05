import { useEffect,useState } from "react"
import axios from "axios";
import { toast } from "react-toastify";
import { SlUser } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const GetWorkForce = () => {
  const [workforce,setworkforce]=useState([]);
  const [search,setsearch]=useState('');
  useEffect(()=>{
    try{
      const fetchData=async()=>{
        const response=await axios.get("https://handy-hub-backened-2-z771.onrender.com/api/v1/work/get-workforce",{
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
        
    });
    if(response){
      setworkforce(response.data.data);
    }
  }
    fetchData();
  }catch(err){
    toast.error("unable to fetch");
  }
  },[]);
  const nav=useNavigate();
  const handleSubmit=(val)=>{
    nav('/contact',{ state:val });
  }
  const filteredWorkforce = search
  ? workforce.filter((element) => element.work.toLowerCase().includes(search.toLowerCase()))
  : workforce;
  return (
    <div>
      <h1 className="flex justify-center align-middle mt-5 text-2xl font-bold">Page Contains the WorkForce Details</h1>
      <div className="flex justify-center">
        <h1>Search Work</h1>
        <input placeholder="Filter-WorkType" onChange={(e)=>{setsearch(e.target.value)}} className="text-black text-lg bg-gray-200 rounded-lg text-center ml-2"></input>
      </div>
      <div className="grid grid-cols-4 gap-7 m-4 ">
        {
              filteredWorkforce.map((element,index)=>{
                return(
                <>
                <div key={index} className="border-orange-600 border-2 pl-4 pr-4 pb-4 m-auto rounded shadow-[0px_6px_6px_rgba(167, 15, 194, 0.5)] bg-gradient-to-r from-orange-400 to-purple-500">
                  <div className="text-white font-semibold text-xl m-2">
                    <div className="flex flex-row gap-2 justify-center mb-4"><h1><SlUser className="h-8 w-8"/></h1>
                    <h1 className="text-center"> S.No. {index+1}</h1></div>
                  <h1 className="font-bold mb-1 text-black">WorkForce_Id: {element.workforceid}</h1>
                  <h1 className="font-semibold mb-1 ">Name: {element.name}</h1>
                  <h1 className="font-semibold mb-1">Contact-Info: {element.mobileNo}</h1>
                  <h1 className="font-semibold mb-1 ">Work: {element.work}</h1>
                  <h1 className="font-semibold mb-1 ">WorkExperiences: {element.workexperiences} Years</h1>
                  <h1 className="font-semibold mb-1 ">WorkPay: {element.workpay} per hour</h1>
                  <div>
                    <h1>Rating: {element.rating}</h1>
                  </div>
                  <div className="flex justify-center items-center mt-2">
                     <button className="border-2 px-4 py-2 bg-purple-500 rounded-md hover:bg-green-400" onClick={()=>handleSubmit(element.workforceid)}>Call Now</button> </div>
                  </div>
                </div>
                </>
                )
              })
            }
      </div>
    </div>
  )
}

export default GetWorkForce