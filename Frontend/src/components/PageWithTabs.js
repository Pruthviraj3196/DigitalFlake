import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Roles from './Roles';
import UserInfo from './UserInfo';
import { FaHandHolding } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { MdHome } from "react-icons/md";


const PageWithTabs = () => {
  return (
    <div className='dataload'>
      <nav className="border-2 w-[250px] flex-col bg-[rgb(222,226,230)] h-[550px]">
      <h2 className='ml-[15px] mb-[10px] mt-4 flex items-center gap-[48px]'> <MdHome /> Home <FaArrowAltCircleRight /></h2>
        <Link to="todo-list"><h2 className='ml-[15px] mb-[10px] flex items-center gap-[50px]'> <FaHandHolding /> Roles <FaArrowAltCircleRight /></h2></Link>
        <Link to="user-info"><h2 className='ml-[15px]  mb-[10px] flex items-center gap-[50px]'> <CgProfile /> Users <FaArrowAltCircleRight /></h2></Link>
      </nav>
      <Routes>
        <Route path="todo-list" element={<Roles />} />
        <Route path="user-info" element={<UserInfo />} />
      </Routes>
    </div>
  );
};

export default PageWithTabs;
