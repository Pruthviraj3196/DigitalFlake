import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaMapMarked } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { MdFactory } from "react-icons/md";

const Home = () => {
  return (
  <div className="Homepage ">  
      <div className="border-2 w-[250px] flex-col bg-[rgb(222,226,230)] h-[550px]">
        <Link to="/page-with-tabs"><h2 className='ml-[15px] mb-[10px] mt-4 flex items-center gap-[60px]'> <MdHome /> Home <FaArrowAltCircleRight /></h2></Link>
        <h2 className='ml-[15px] mb-[10px] flex items-center gap-[64px]'> <FaMapMarked /> State <FaArrowAltCircleRight /></h2>
        <h2 className='ml-[15px] mb-[10px]  flex items-center gap-[68px]'> <FaCity /> City <FaArrowAltCircleRight /></h2>
        <h2 className='ml-[15px] flex items-center gap-[41px]' > <MdFactory /> WearHouse <FaArrowAltCircleRight /></h2>
      </div>
      <div className="flex flex-col justify-center ml-[250px]">
        <img className="welocomimge" src='https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png' alt="DigiFlake Logo"/>
        <h1 className="font-extrabold ml-[90px]">Welcome to DigitalFlake admin</h1>
      </div>
  </div>  
  );
};

export default Home;
