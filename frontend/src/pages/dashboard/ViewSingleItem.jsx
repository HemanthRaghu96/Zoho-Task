import React, { useEffect, useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API } from "../../api/api";


const ViewSingleItem = () => {
    const [data, setData] = useState([]);
  const { itemId } = useParams();
  useEffect(() => {
    fetchSelecteData();
  }, []);
  const fetchSelecteData = async () => {
    const response = await axios.get(`${API}getselecteditems/${itemId}`);
    console.log(response.data.selectedItems[0])
    setData(response.data.selectedItems[0]);
  };
  const handleDelete = async () => {
    await axios.delete(`${API}deleteitems/${itemId}`);
  };
  return (
    <section className={open?"ml-16 mt-16  h-screen":"ml-14 mt-16 md:ml-56 h-screen"}>
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">User Details</h1>
        <div className="flex">
          <Link to={`/items/edititem/${itemId}`}>
            <button className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2">
              <MdOutlineEdit className="mr-1" />
              Edit
            </button>
          </Link>
          <Link to={"/items"}>
            <button
              className="px-2 flex items-center bg-buttonColor text-white rounded-md mx-2"
              onClick={() => handleDelete()}
            >
              <MdDeleteOutline className="mr-1" />
              Delete
            </button>
          </Link>
          <Link to={"/items"}>
            <HiMiniXMark className="mr-1 md:ml-20 size-7 text-red-500" />
          </Link>
        </div>
      </div>
      <div className="flex mt-3">
        <div className="py-1 my-1 w-40">
        <h1 className="my-1 text-xs md:text-lg">Name</h1>
          <h1 className="my-1 text-xs md:text-lg">Age</h1>
          <h1 className="my-1 text-xs md:text-lg">Gender</h1>
          <h1 className="my-1 text-xs md:text-lg">DOB</h1>
          <h1 className="my-1 text-xs md:text-lg">Mobile</h1>
        </div>
        <div className="py-1 my-1  w-72">
          <h1 className="my-1 text-xs md:text-lg">{data.name}</h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.age == null ? "null" : data.age}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.gender == null ? "null" : data.gender}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.dob == null ? "null" : data.dob}
          </h1>
          <h1 className="my-1 text-xs md:text-lg">
            {data.mobile == null ? "null" : data.mobile}
          </h1>
          
        </div>
      </div>
      
 
    </section>
  )
}

export default ViewSingleItem