import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { MdFactory } from "react-icons/md";

const EditRole = () => {
  const navigate = useNavigate();

  const handleSave = () => {
    // Implement save functionality here
    navigate('/roles');
  };

  const handleCancel = () => {
    navigate('/roles');
  };

  return (


    <div>
    <div className="Homepage ">  
    <div className="border-2 w-[250px] flex-col bg-[rgb(222,226,230)] h-[550px]">
        <Link to="/page-with-tabs"><h2 className='ml-[15px] mb-[10px] mt-4 flex items-center gap-[60px]'> <MdHome /> Home <FaArrowAltCircleRight /></h2></Link>
        <h2 className='ml-[15px] mb-[10px] flex items-center gap-[64px]'> <FaMapMarked /> State <FaArrowAltCircleRight /></h2>
        <h2 className='ml-[15px] mb-[10px]  flex items-center gap-[68px]'> <FaCity /> City <FaArrowAltCircleRight /></h2>
        <h2 className='ml-[15px] flex items-center gap-[41px]' > <MdFactory /> WearHouse <FaArrowAltCircleRight /></h2>
      </div>
      <div className="w-full h-screen p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Edit Role</h1>
      <div className='flex gap-3'>
      <input
        type="text"
        className="border p-2 w-[300px] mb-4 rounded-[10px]"
        placeholder="Enter role name"
      />
      <select className="border p-2 w-[300px] mb-4 rounded-[10px]">
        <option value="admin">Admin</option>
        <option value="superadmin">Superadmin</option>
        <option value="caller">Caller</option>
        <option value="account">Account</option>
      </select>
      </div>
      <div className="flex gap-2 ml-[900px] mt-[350px]">
        <button
          className="px-4 py-2 bg-[rgb(124,69,133)] text-white rounded"
          onClick={handleSave}
        >
          Save
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </div>
    </div>  
</div>

  );
};

export default EditRole;
