import {useState} from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
const Pay = () => {
    const [workexperiences,setworkexperiences]=useState('');
    const [workpay,setworkpay]=useState('');
    const [altmobileNo,setaltmobileNo]=useState('');
    const [name,setname]=useState('');
    const [address,setaddress]=useState('');
    const [mobileNo,setmobileNo]=useState('');
    const [work,setwork]=useState('');
    const [workforceid,setworkforceid]=useState('');
    
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
        const response = await axios.post(
          "https://handy-hub-backened-2.onrender.com/api/v1/work/add-workforce",
          { name,address,mobileNo,altmobileNo,work,workforceid,workpay,workexperiences},
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        toast.success(response.data.message);
      }catch(err){
        toast.error("add workforce Failed");
      }
    }
  
  return (
    <div className='m-10'>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center gap-7 mb-10'>

            <div><h1 className='font-medium text-2xl bg-gray-200 rounded-sm pl-5 pr-5'>Add WorkForce</h1></div> 
            <div><input value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Name' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><input value={address} onChange={(e)=>{setaddress(e.target.value)}} placeholder='Address' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><input value={mobileNo} onChange={(e)=>{setmobileNo(e.target.value)}} type="number" placeholder='Phone-No' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><input value={altmobileNo} onChange={(e)=>{setaltmobileNo(e.target.value)}} type="number" placeholder='Alt Phone-No' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><input value={work} onChange={(e)=>{setwork(e.target.value)}} placeholder='Type of Work Done' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><input value={workforceid} onChange={(e)=>{setworkforceid(e.target.value)}} type="number" placeholder='WorkForce_Id'  className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><h1 className="text-center">Work Pay</h1><input value={workpay} onChange={(e)=>{setworkpay(e.target.value)}} type="text" placeholder='Work Pay' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><h1 className="text-center">Work Experiences</h1><input value={workexperiences} onChange={(e)=>{setworkexperiences(e.target.value)}} type="number" placeholder='WorkForce_Id'  className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><button className='bg-red-300 w-32 h-9 rounded-md ' type="submit">Add WorkForce</button></div>

        </div>
        </form>
    </div>
  )
}

export default Pay;