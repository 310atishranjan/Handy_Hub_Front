import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SlUser } from "react-icons/sl";
import { useNavigate } from "react-router-dom";

const GetWorkForce = () => {
  const [workforce, setWorkforce] = useState([]);
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('');
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    name: '',
    mobileNo: '',
    work: '',
    workexperiences: '',
    workpay: '',
    rating: ''
  });

  const nav = useNavigate();

  useEffect(() => {
    const rolelocal = localStorage.getItem("role");
    setRole(rolelocal);

    const fetchData = async () => {
      try {
        const response = await axios.get("https://handy-hub-backened-2-z771.onrender.com/api/v1/work/get-workforce", {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        });
        if (response) {
          setWorkforce(response.data.data);
        }
      } catch (err) {
        toast.error("Unable to fetch workforce");
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (val) => {
    nav('/contact', { state: val });
  };

  const handleEdit = (worker) => {
    setEditId(worker._id);
    setEditData({
      name: worker.name,
      mobileNo: worker.mobileNo,
      work: worker.work,
      workexperiences: worker.workexperiences,
      workpay: worker.workpay,
      rating: worker.rating
    });
  };

  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/api/v1/user/edit/${editId}`, editData);
      toast.success("Worker updated successfully");
      setEditId(null);
      // Refresh workforce data
      const refreshed = await axios.get("https://handy-hub-backened-2-z771.onrender.com/api/v1/work/get-workforce");
      setWorkforce(refreshed.data.data);
    } catch (err) {
      toast.error("Failed to update");
      console.error(err);
    }
  };
  const handleDelete = async (id) => {
  try {
    const confirmed = window.confirm("Are you sure you want to delete this worker?");
    if (!confirmed) return;

    await axios.delete(`http://localhost:5000/api/v1/user/delete/${id}`);
    toast.success("Worker deleted successfully");

    // Refresh list after deletion
    const response = await axios.get("https://handy-hub-backened-2-z771.onrender.com/api/v1/work/get-workforce");
    setWorkforce(response.data.data);
  } catch (err) {
    toast.error("Failed to delete worker");
    console.error(err);
  }
};

  const filteredWorkforce = search
    ? workforce.filter((element) => element.work.toLowerCase().includes(search.toLowerCase()))
    : workforce;

  return (
    <div>
      <h1 className="flex justify-center mt-5 text-2xl font-bold">Page Contains the WorkForce Details</h1>
      <div className="flex justify-center gap-2 items-center my-4">
        <h1>Search Work</h1>
        <input
          placeholder="Filter-WorkType"
          onChange={(e) => setSearch(e.target.value)}
          className="text-black text-lg bg-gray-200 rounded-lg text-center ml-2"
        />
      </div>

      <div className="grid grid-cols-4 gap-7 m-4">
        {filteredWorkforce.map((element, index) => (
          <div key={element._id} className="border-orange-600 border-2 pl-4 pr-4 pb-4 m-auto rounded shadow-lg bg-gradient-to-r from-orange-400 to-purple-500">
            <div className="text-white font-semibold text-xl m-2">
              <div className="flex flex-row gap-2 justify-center mb-4">
                <SlUser className="h-8 w-8" />
                <h1>S.No. {index + 1}</h1>
              </div>

              {editId === element._id ? (
                <div className="space-y-2">
                  Name: <input name="name" value={editData.name} onChange={handleEditChange} className="w-full p-1 rounded text-black" />
                  Mobileno:<input name="mobileNo" value={editData.mobileNo} onChange={handleEditChange} className="w-full p-1 rounded text-black" />
                  Work:<input name="work" value={editData.work} onChange={handleEditChange} className="w-full p-1 rounded text-black" />
                  Workexperience:<input name="workexperiences" value={editData.workexperiences} onChange={handleEditChange} className="w-full p-1 rounded text-black" />
                  Workpay:<input name="workpay" value={editData.workpay} onChange={handleEditChange} className="w-full p-1 rounded text-black" />
                  Rating:<input name="rating" value={editData.rating} onChange={handleEditChange} className="w-full p-1 rounded text-black" />
                  <div className="flex justify-between mt-2">
                    <button className="bg-green-600 text-white px-3 py-1 rounded" onClick={handleUpdate}>Save</button>
                    <button className="bg-red-600 text-white px-3 py-1 rounded" onClick={() => setEditId(null)}>Cancel</button>
                  </div>
                </div>
              ) : (
                <>
                  <h1 className="font-bold mb-1 text-black">WorkForce_Id: {element.workforceid}</h1>
                  <h1 className="mb-1">Name: {element.name}</h1>
                  <h1 className="mb-1">Contact: {element.mobileNo}</h1>
                  <h1 className="mb-1">Work: {element.work}</h1>
                  <h1 className="mb-1">Experience: {element.workexperiences} Years</h1>
                  <h1 className="mb-1">Pay: {element.workpay}/hr</h1>
                  <h1 className="mb-1">Rating: {element.rating}</h1>
                </>
              )}
            </div>

            <div className="flex justify-between">
              <button className="bg-purple-500 text-white px-2 py-1 rounded hover:bg-green-400" onClick={() => handleSubmit(element.workforceid)}>Call Now</button>
              
              {
              role=="admin"?
              <>
              <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-yellow-400" onClick={() => handleEdit(element)}>Edit Worker</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-pink-400" onClick={()=>{handleDelete(element._id)}}>Delete Worker</button>
            </>
            :"" }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetWorkForce;