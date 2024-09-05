
const About = () => {
  return (
    <div className=" bg-red-200 h-full m-7 pb-10">
      <h1 className="flex justify-center text-2xl text-black font-semibold ">ABOUT</h1>
      <div className="md:flex-row justify-center flex flex-col items-center">
        <div className="md: ml-2 mt-4 mb-5 "><img src='/hub.jpg' className="w-96 h-72"></img></div>
        
        <div className="md:mt-12 ml-1 text-center font-medium text-xl leading-loose">
          <p className="">Welcome to Workforce Hub, your trusted platform for connecting skilled tradespeople with customers in need of quality services. 
            <br/>Whether you’re looking for a plumber, painter, carpenter, or any other professional, 
            <br/>Workforce Hub makes it easy to find reliable experts in your area.
          </p>
          <h1 className="mt-2">
          At Workforce Hub, our mission is to bridge the gap between skilled workers and those who need their services. 
          We are committed to creating a platform that is both accessible and reliable, 
          ensuring that every job, big or small, is completed with professionalism and expertise.</h1>
          </div>
      </div>
    </div>
  )
}

export default About