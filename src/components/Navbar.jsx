import React from 'react'
import logo from "/src/assets/bookstore_logo.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
		<div className="fixed z-3 w-screen h-8 sm:h-14 bg-amber-700 flex  justify-between items-center ">
			<Link to="/">
            <img
				src={logo}
				className=" w-10 sm:w-16 rounded-[50px] ml-3"
				alt="logo"
                />
            </Link>
			<div className="flex items-center justify-around w-40 sm:w-60  text-white ">
                <Link to="/login">
				<div className="sm:hover:text-[18px] hover:text-[13px]  cursor-pointer">Login</div>
                </Link>
                <Link to="/signup">
				<div className="sm:hover:text-[18px] hover:text-[13px]  cursor-pointer">Signup</div>
                </Link>
                
			</div>
		</div>
	);
}

export default Navbar
