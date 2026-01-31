import React, { useState } from 'react'
import logo from "/src/assets/bookstore_logo.png";
import { Link } from 'react-router-dom';
const Navbar = ({setSideshow,sideshow}) => {
	const Token = JSON.parse(localStorage.getItem("Token"))
	const username="Harsh"
	console.log(sideshow)
  return (
		<div onClick={()=> setSideshow(false)} className=" fixed z-3 w-screen h-8 sm:h-14 bg-amber-700 flex  justify-between items-center ">
			<Link to="/">
				<img
					src={logo}
					className=" w-10 sm:w-16 rounded-[50px] ml-3"
					alt="logo"
				/>
			</Link>
			{Token ? (
				<>
					<div className="flex items-center justify-around w-40 sm:w-100 sm:w-60  text-white ">
						<Link to="/gallery">
							<div className="hidden sm:block cursor-pointer group">
								<h1>Gallery</h1>
								<div className="border-2 w-0 transition-all duration-300 group-hover:w-full scale-0 group-hover:scale-100"></div>
							</div>
						</Link>
						<Link to="/inventory">
							<div className="hidden sm:block cursor-pointer group">
								<h1>Inventory</h1>
								<div className="border-2 w-0 transition-all duration-300 group-hover:w-full scale-0 group-hover:scale-100"></div>
							</div>
						</Link>
						<Link to="/trades">
							<div className=" hidden sm:block cursor-pointer group">
								<h1>Trades</h1>
								<div className="border-2 w-0 transition-all duration-300 group-hover:w-full scale-0 group-hover:scale-100"></div>
							</div>
						</Link>
						<div onClick={(e) =>{ (setSideshow(true), e.stopPropagation())}} className=" border-2 w-6 h-6 rounded-2xl sm:w-45 sm:h-8 sm:rounded-[8px] flex items-center bg-gray-600">
							<div  className="border-2 w-6 h-6 rounded-2xl sm:ml-1 flex items-center justify-center slidebar">
								<h1 className="text-amber-300 font-bold">{username[0]}</h1>
							</div>
							<h1 className="hidden sm:block text-[9px] ml-2">
								jadhaoharsh141@gmail.com
							</h1>
						</div>
						<div className={`fixed z-3  right-[-5%] top-0 border-2 w-50 h-full bg-gray-600 ${!sideshow ? "scale-x-0" : "scale-x-100" } sm:hidden scale-x-0 origin-right transition-all duration-300 slidebar-hover:scale-x-100`}>
							<ul className='text-center leading-15'>
								<li className=''>Gallery</li>
								<li className=''>Inventory</li>
								<li className=''>Trades</li>
								<li className=''>logout</li>
							</ul>
						</div>
					</div>
				</>
			) : (
				<div className="flex items-center justify-around w-40 sm:w-60  text-white ">
					<Link to="/login">
						<div className="sm:hover:text-[18px] hover:text-[13px]  cursor-pointer">
							Login
						</div>
					</Link>
					<Link to="/signup">
						<div className="sm:hover:text-[18px] hover:text-[13px]  cursor-pointer">
							Signup
						</div>
					</Link>
				</div>
			)}
		</div>
	);
}

export default Navbar
