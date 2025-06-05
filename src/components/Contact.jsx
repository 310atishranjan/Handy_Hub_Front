import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation } from 'react-router-dom';
const Contact = () => {
  const location = useLocation();
  console.log(location.state)
  const stateData = location.state;

  const [contact, setContact] = useState({
    name: "",
    phoneNo: "",
    work: "",
    address: "",
    workforceid: stateData,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://handy-hub-backened-2-z771.onrender.com/api/v1/work/contact",
        contact,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
          responseType: "blob", // Correct placement of responseType
        }
      );
  
      // Check if the response is a PDF
      const contentType = response.headers["content-type"];
      console.log(response);
      if (contentType && contentType.includes("application/pdf")) {
        // Create a Blob for the PDF
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl); // Open PDF in a new tab
  
        // const link = document.createElement("a");
        // link.href = pdfUrl;
        // link.download = "form-data.pdf";
        // link.click();
  
        // Success Toast and Reset Form
        toast.success("Form submitted successfully, and PDF generated!");
        setContact({
          name: "",
          phoneNo: "",
          work: "",
          address: "",
          workforceid: "",
        });
      } else {
        console.error(Error);
        throw new Error("Received data is not a PDF.");
      }
    } catch (err) {
      console.error(err);
      console.log(err);
      toast.error("Error submitting form or generating PDF.");
    }
  };

  const handleForm = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    
    <div className="md:flex flex-col border-2">
      <div className="md:flex-row flex justify-around flex-col item-center">
        <div>
          <h1 className="text-xl font-bold text-blue-300">Map Location</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14509.957801855542!2d84.11714119753056!3d24.606810057213085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398c50747fffa757%3A0x636462797425c28e!2sNabinagar%2C%20Bihar%20824301!5e0!3m2!1sen!2sin!4v1713333088446!5m2!1sen!2sin"
            className="w-96 h-96"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="md:flex flex-col ml-6">
            <div className="font-semibold text-2xl mb-6">Contact Form</div>
            <div className="mb-6">
              <input
                name="name"
                value={contact.name}
                onChange={handleForm}
                placeholder="Name"
                className="text-center w-64 h-10 bg-gray-300 border-2 border-red-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <input
                name="phoneNo"
                value={contact.phoneNo}
                onChange={handleForm}
                placeholder="Mobile-No"
                className="text-center w-64 h-10 bg-gray-300 border-2 border-red-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <input
                name="work"
                value={contact.work}
                onChange={handleForm}
                placeholder="Work"
                className="text-center w-64 h-10 bg-gray-300 border-2 border-red-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <input
                name="address"
                value={contact.address}
                onChange={handleForm}
                placeholder="Address"
                className="text-center w-64 h-10 bg-gray-300 border-2 border-red-300 rounded-lg"
              />
            </div>
            <div className="mb-6">
              <input
                name="workforceid"
                value={contact.workforceid}
                onChange={handleForm}
                placeholder="WorkForce_Id(search in workforce list)"
                className="text-center w-72 h-10 bg-gray-300 border-2 border-red-300 rounded-lg"
              />
            </div>
            <div className="mb-6 bg-gray-400 rounded-lg p-2 text-center w-64">
              <button className="text-center h-7" type="submit">
                Send Form
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="md:flex-row flex justify-around mt-4 flex-col">
        <div className="w-58 h-24 border-2 border-red-400 pl-4 pr-4">
          <h1 className="text-center font-semibold text-2xl text-red-400 p-2">
            Address
          </h1>
          <p className="text-center">Sonpura Nabinagar Auranagabd Bihar 824301</p>
        </div>
        <div className="w-68 h-24 border-2 border-red-400 pr-8 pl-8">
          <h1 className="text-center p-2 font-semibold text-red-400 text-xl">
            Contact Details
          </h1>
          <div className="md:gap-5 flex-row flex justify-center align-middle gap-5">
            <p className="text-center">Email: aa@gmail.com</p>
            <p className="text-center">Phone-No: 9999-999-999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
