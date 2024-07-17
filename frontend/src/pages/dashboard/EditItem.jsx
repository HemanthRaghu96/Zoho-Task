import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../api/api";
import axios from "axios";
import Topbar from "../global/Topbat";

const EditItem = () => {
    const { itemId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchSelecteData();
  }, []);
  const fetchSelecteData = async () => {
    const response = await axios.get(`${API}getselecteditems/${itemId}`);
    setData(response.data.selectedItems[0]);
  };
  return
   data ? <EditItems data={data} itemId={itemId} /> : "Loading...";
}

export default EditItem
function EditItems({ data, itemId }) {
  const navigate = useNavigate();
  const [name, setName] = useState(data.name ||"");
  const [age, setAge] = useState(data.age ||"");
  const [gender, setGender] = useState(data.gender|| "");
  const [dob, setDob] = useState(data.dob||"");
  const [mobile, setMobile] = useState(data.mobile||"");

  const handleSave = async () => {
    const editedData = {
        name,
        age,
        gender,
        dob,
        mobile,
    };
    const response = await axios.put(`${API}edititems/${itemId}`, editedData);
    await navigate(`/items/${itemId}`);
  };
  return (
    <>
       <Topbar />
      
    <section className={open?"ml-16 mt-16  h-full overflow-y-auto":"ml-14 mt-16 md:ml-56 h-full overflow-y-auto"}>
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">{name} </h1>
        <Link to={"/items"}>
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* First set of data */}
      <div className="flex flex-col lg:flex-row justify-start ">
        <div className="mt-5 w-[220px] md:w-[320px]">
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Name*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Age*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Gender*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">DOB*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
          </div>
          <div className="flex justify-between my-4">
            <h1 className="text-xs md:text-base">Mobile*</h1>
            <input
              type="text"
              className="text-xs md:text-base border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            />
          </div>
        </div>
      
      </div>
     
    
     
      <div className="flex my-4">
        <button
          className="border rounded-lg bg-buttonColor text-white px-2 py-1 mr-3"
          onClick={() => handleSave()}
        >
          Save
        </button>
        <button
          className="border rounded-lg px-2 py-1"
          onClick={() => navigate("/items")}
        >
          Cancel
        </button>
      </div>
     
    </section>
    </>
  );
}
