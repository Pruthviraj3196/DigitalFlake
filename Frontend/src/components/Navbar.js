import React from 'react';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img className="imges ml-5" src='https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png'></img>
      <div className="mr-6">
      < CgProfile />
      </div>
    </nav>
  );
};

export default Navbar;
