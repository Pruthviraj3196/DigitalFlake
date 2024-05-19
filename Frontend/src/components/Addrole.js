import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";

const AddRole = () => {
  return (
    <div>
        <div className="Homepage ">  
        <div className="border-2 w-[250px] flex-col bg-[rgb(222,226,230)] h-[550px]">
        <Link to="/page-with-tabs"><h2 className='ml-[15px] mb-[10px] mt-4 flex items-center gap-[60px]'> <MdHome /> Home <FaArrowAltCircleRight /></h2></Link>
        <h2 className='ml-[15px] mb-[10px] flex items-center gap-[64px]'> <FaMapMarked /> State <FaArrowAltCircleRight /></h2>
        <h2 className='ml-[15px] mb-[10px]  flex items-center gap-[68px]'> <FaCity /> City <FaArrowAltCircleRight /></h2>
        <h2 className='ml-[15px] flex items-center gap-[41px]' > <MdFactory /> WearHouse <FaArrowAltCircleRight /></h2>
      </div>
          <div className="flex-col">
                <div className="mr-[-200px]">
                      <p className='flex items-center'> <BsArrowLeft />  Add Role</p>
                      <input type='text' placeholder='' className="border-[1px] rounded border-black mt-4"></input>
                </div>
                <div className='mt-[440px] ml-[650px]'>
                      <button className="border-2 rounded-[20px] p-1 w-[100px]">Cancel</button>
                      <button className=" ml-6 border-2 rounded-[20px] bg-[rgb(124,69,133)] p-1 w-[100px]">Save</button>
                </div>
          </div>
        </div>  
    </div>
  );
};

export default AddRole;
