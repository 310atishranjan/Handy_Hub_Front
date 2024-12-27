import axios from "axios";
import {useState } from "react";
import { toast } from "react-toastify";

function Rating() {
    const [rate,setrate]=useState(0);
   const handleSubmit=async()=>{
    try{
        const response=await axios.post('http://localhost:5000/api/v1/user/rating',{
            rate:rate,
        });
        if(response.data.status==200){
            toast.success("THANKS FOR RATING")
        }
    }catch(err){
        console.log(err);
    }
   }
   const handleChange=(e)=>{
    setrate(e.target.value);
   }
  return (
    <>
        <div className="flex flex-col justify-center items-center h-screen w-screen">
            <h1 className="mb-4">Rating Field</h1>
            <div className="mb-4">
                <select value={rate} onChange={handleChange}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <button onClick={handleSubmit} className="bg-red-300 rounded-lg p-4 text-white font-bold">Submit</button>
        </div>
    </>
  )
}

export default Rating;