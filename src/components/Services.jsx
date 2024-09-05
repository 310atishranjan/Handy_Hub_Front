import { useState } from "react"

function Services(){
  const [showp,setshowp]=useState(true);
  const services=[
    {
      id:1,
      url:"/painter.avif",
      title:"PAINTER"
    },
    {
      id:2,
      url:"/plumber.jpg",
      title:"PLUMBER"
    },
    {
      id:3,
      url:"/carpenter.jpg",
      title:"CARPENTER"
    },
    {
      id:4,
      url:"/construction.avif",
      title:"CONSTRUCTION"
    },
    {
      id:5,
      url:"/sweeper.webp",
      title:"SWEEPER"
    },
    {
      id:6,
      url:"/electricians.jpg",
      title:"ELECTRICIANS"
    },
    {
      id:7,
      url:"/painter.avif",
      title:"RO TECHNICIANS"
    },
    {
      id:8,
      url:"/construction.avif",
      title:"MISTRY",
    }
  ]
  return (
    // <div className="m-8">
    // <h1 className="font-bold text-xl mb-4"> Our Services</h1>
    // <div className="md:grid-cols-3 grid grid-cols-2 gap-4 ">
    //     {
    //       // services.map((element,id)=>{
    //       //   return(
    //       //   <div className="ml-8 item" key={id}>
    //       //     <img src={element.url} alt="painter"></img>
    //       //     <h3>{element.title}</h3>
    //       //   </div>
    //       //    )
    //       // })
          
    //     }
    // </div>
    // </div>
    <div className="services container ml-8">
        <h1 className="font-bold text-xl mb-4"> Our Services</h1>
          <div className="banner">
          {
            services.map((element,index)=>{
              return(
                <>
                  <div className="item" key={index}>
                    <h3>{element.title}</h3>
                    <img src={element.url} alt={element.title}/>
                  </div>
                </>
              )
            })
          }
          </div>
        </div>
  )
}

export default Services;