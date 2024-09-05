import {useState,useEffect} from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
const Pay = () => {
    const [hourtowork,sethourtowork]=useState('');
    const [workpay,setworkpay]=useState('');
    const [totalamount,settotal]=useState('');
    const [name,setname]=useState('');
    const [address,setaddress]=useState('');
    const [mobileNo,setmobileNo]=useState('');
    const [work,setwork]=useState('');
    const [workforceid,setworkforceid]=useState('');
    
    const handleSubmit=async(e)=>{
      e.preventDefault();
      try{
        const response = await axios.post(
          "http://localhost:5000/api/v1/work/pay",
          { name,address,mobileNo,work,workforceid,totalamount,workpay,hourtowork},
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        toast.success(response.data.message);
      }catch(err){
        toast.error("pay failed");
      }
    }
    useEffect(() => {
        settotal(hourtowork * workpay);
      }, [hourtowork, workpay]);
  return (
    <div className='m-10'>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-col justify-center items-center gap-7 mb-10'>

            <div><h1 className='font-medium text-2xl bg-gray-200 rounded-sm pl-5 pr-5'>Pay After The Service</h1></div> 
            <div><input value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Name' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><input value={address} onChange={(e)=>{setaddress(e.target.value)}} placeholder='Address' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><input value={mobileNo} onChange={(e)=>{setmobileNo(e.target.value)}} type="number" placeholder='Phone-No' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><input value={work} onChange={(e)=>{setwork(e.target.value)}} placeholder='Type of Work Done' className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><input value={workforceid} onChange={(e)=>{setworkforceid(e.target.value)}} type="number" placeholder='WorkForce_Id'  className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><h1 className='text-center'>No of Hour work</h1><input placeholder='Work per hour' value={hourtowork} type="number" onChange={(e)=>{sethourtowork(Number(e.target.value))}}className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><h1 className='text-center'>Pay Price per hour</h1><input placeholder='Pay Prices of Worker' value={workpay} type="number" onChange={(e)=>{setworkpay(Number(e.target.value))}} className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><h1 className='text-center'>Total Amount: </h1><input placeholder={`${totalamount}`} value={totalamount} onChange={(e)=>{settotal(e.target.value)}} className='h-12 w-96 pl- pr- text-center rounded'></input></div>
            <div><button className='bg-red-300 w-28 h-9 rounded-md' type="submit">Pay</button></div>

        </div>
        </form>
    </div>
  )
}

export default Pay;