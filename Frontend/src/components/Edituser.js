import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { useState } from 'react';

const Edituser = () => {
      const [image, setImage] = useState(null);
      const handleSubmit = (e) => {
    e.preventDefault();
  };

  
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
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
     <div>
       <h2 className="text-2xl font-bold mb-4">Edit User</h2>
       <form onSubmit={handleSubmit} className="space-y-4">
       <div className="flex gap-10">
         <div>
         <label className="block">Name:</label>
           <input
            type="text"
            className="border border-gray-300 px-[120px] py-1 rounded-md w-[350px]"
          />
        </div>
        <div>
          <label className="block">Mobile:</label>
          <input
            type="text"
            className="border border-gray-300 px-[120px] py-1 rounded-md w-[350px]"
          />
        </div>
        <div>
          <label className="block">Email:</label>
          <input
            type="email"
            className="border border-gray-300 px-[120px] py-1 rounded-md w-[300px]"
          />
        </div>
        </div>

        <div className="flex gap-12">
          <div>
            <label className="block">Role:</label>
            <select
              className="border border-gray-300 px-[12px] py-1 rounded-md w-[250px]"
            >
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
              <option value="caller">Caller</option>
              <option value="account">Account</option>
            </select>
          </div>
          <div>
            <label className="block">Upload Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-[100px] border-gray-300 px-[60px] h-[100px] py-1 rounded-md w-[150px]"
            />
          </div>
          <div className=' ml-[100px]'>
            <label className="block">Status:</label>
            <select
              className="border border-gray-300 px-[120px] py-1 rounded-md w-full"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </div>
      </form>
      <div className='mt-[280px] ml-[800px]'>
                      <button className="border-2 rounded-[20px] p-1 w-[100px]">Cancel</button>
                      <button className=" ml-6 border-2 rounded-[20px] bg-[rgb(124,69,133)] p-1 w-[100px]">Save</button>
       </div>
    </div>

        </div>  
    </div>
  );
};

export default Edituser;
