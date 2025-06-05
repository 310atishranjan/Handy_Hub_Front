import axios from "axios";
import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RequestService = () => {

    const [workpay,setworkpay]=useState('');
    const [name,setname]=useState('');
    const [address,setaddress]=useState('');
    const [mobileNo,setmobileNo]=useState('');
    const [work,setwork]=useState('');
    const [Aadhar_Card,setAadhar_Card]=useState('');
    const [exp,setexp]=useState('');
    const nav=useNavigate();
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
        const response = await axios.post(
          "https://handy-hub-backened-2-z771.onrender.com/api/v1/work/join",
          { name,address,mobileNo,work,workpay,Aadhar_Card,exp },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        setname('');
        setaddress('');
        setmobileNo('');
        setwork('');
        setworkpay('');
        setAadhar_Card('');
        setexp('');
        toast.success(response.data.message);
        nav('/');
      }catch(err){
        console.log(err);
        toast.error("Join failed");
      }
    }
  return (
    <div className='m-10'>
            <form onSubmit={handleSubmit}>
            <div className='flex flex-col justify-center items-center gap-7 mb-10'>
                <div><h1 className='font-medium text-2xl bg-gray-200 rounded-sm pl-5 pr-5'>Request To Join As Worker</h1></div> 
                <div><input value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Name' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
                <div><input value={address} onChange={(e)=>{setaddress(e.target.value)}} placeholder='Address' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
                <div><input value={mobileNo} onChange={(e)=>{setmobileNo(e.target.value)}} type="number" placeholder='Phone-No' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
                <div><input value={work} onChange={(e)=>{setwork(e.target.value)}} placeholder='Type of Work' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
                <div><h1 className='text-center'>Pay Price per hour</h1><input placeholder='Pay Prices of Worker' value={workpay} type="number" onChange={(e)=>{setworkpay(Number(e.target.value))}} className='h-12 w-96 pl- pr- text-center rounded'></input></div>
                <div><input value={Aadhar_Card} onChange={(e)=>{setAadhar_Card(e.target.value)}} placeholder='Aadhar_card' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
                <div><input value={exp} onChange={(e)=>{setexp(e.target.value)}} placeholder='Year of Experience' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
                <div><button className='bg-red-300 w-44 h-9 rounded-md' type="submit">Request To JOIN</button></div>
            </div>
            </form>
        </div>
  )
}
export default RequestService;