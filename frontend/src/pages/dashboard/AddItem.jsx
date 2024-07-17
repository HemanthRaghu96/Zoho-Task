import axios from "axios";
import React, { useState } from "react";
import { HiMiniXMark } from "react-icons/hi2";
import { Link, useNavigate } from "react-router-dom";
import { API } from "../../api/api";

export default function AddItem() {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [mobile, setMobile] = useState("");
  
  const handleSave = async () => {
    try {
      const newData = {
        name,
        age,
        gender,
        dob,
        mobile,
      };
      const response = await axios.post(`${API}additems`, newData);
      await navigate(`/items`);
      setError(false);
    } catch (error) {
      console.log("Error", error.message);
      setError(true);
    }
  };
  return (
    <section
      className={
        open
          ? "ml-16 mt-16  h-full overflow-y-auto"
          : "ml-14 mt-16 md:ml-56 h-full overflow-y-auto"
      }
    >
      <div className="flex justify-between mr-5 md:mr-10 lg:mr-20">
        <h1 className="font-semibold text-xl">New User </h1>
        <Link to={"/items"}>
          <HiMiniXMark className="mr-1 size-7 text-red-500" />
        </Link>
      </div>
      {/* First set of data */}
      <div className="flex flex-col md:flex-row justify-start ">
        <div className="mt-5 w-[220px] md:w-[320px]">
          <div className="flex justify-between  my-4">
            <h1 className="text-xs md:text-base">Name*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex justify-between  my-4">
            <h1 className="text-xs md:text-base">Age*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="flex justify-between  my-4">
            <h1 className="text-xs md:text-base">Gender*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <div className="flex justify-between  my-4">
            <h1 className="text-xs md:text-base">DOB*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="flex justify-between  my-4">
            <h1 className="text-xs md:text-base">Mobile*</h1>
            <input
              type="text"
              className="border-2 rounded-md px-2 h-5 md:h-8 w-[8.5rem]"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* Second set of data */}

      {error ? (
        <div className="flex my-4">
          <h1 className="text-xs md:text-base text-red-500">
            Kindly fill all the mandatory (*) fields{" "}
          </h1>
        </div>
      ) : (
        ""
      )}
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
  );
}
