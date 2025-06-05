import React, { useState } from 'react'

function Bank_com() {
    const [state,setstate]=useState(false);
    const [area,setarea]=useState(false);
    const [clickstate,setclickstate]=useState(false);
    const [clickarea,setclickarea]=useState(false);
  return (
    <div className='flex flex-col justify-center '>
        <h1>Bank Details</h1>
        <div className='flex flex-col gap-5 w-60'>
        <select onChange={()=>{setstate(true)}}>
            <option>Select Bank</option>
            <option>Bank of india</option>
            <option>State Bank</option>
        </select>
        {/* it doesnot show until above select bank clicked */}
        {/* {state?<select> 
            <option>Select state</option>
            <option>Bihar</option>
            <option>Aurangabad</option>
        </select>:""} */}
        <select onClick={()=>{setclickstate(!clickstate),setclickarea(false)}} onChange={()=>{setarea(true)}}>
       <option>Select state</option>
       {state?<div>
            <option>Bihar</option>
            <option>Aurangabad</option>
            </div>:clickstate==true?console.log("first select state"):""}
        </select>
        <select onClick={()=>{setclickarea(!clickarea)}}>
            <option>Select Area</option>
            {area?<div>
            <option>Nabinagar</option>
            <option>Khiri</option>
            <option>Sonpura</option>
            </div>:clickarea==true? console.log("first select Area"):""}
        </select>
        </div>
    </div>

  )
}

export default Bank_com