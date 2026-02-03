import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios';
import { jwtDecode } from "jwt-decode";


const Gallery = () => {
            const [sideshow, setSideshow] = useState(false);
			const [data,setData] = useState([])
			const getBooks = async() => {
				const response = await axios.get("http://localhost:5555/api/book/getAll");
				setData(response.data)
				console.log(response.data)
			}
			const token = JSON.parse(localStorage.getItem("Token"))
			let user_id
			if(token){
				const decoded = jwtDecode(token)
				user_id = decoded.id
			}

     useEffect(()=>{
		 getBooks()
		},[])

	 const updateStatus = async(id,el) => {
		try {
			const res = await axios.put(`http://localhost:5555/api/book/updateStatus/${id}`, {status: "not available"});
			const book = { ...el, status: "buyed" };
			const responce = await axios.post(`http://localhost:5555/api/book/inventoryByBuyer`, {user_id,book});
			console.log(responce)
			getBooks()
		} catch (error) {
		 console.log(error)
		}

	 }

  return (
		<div>
			<Navbar setSideshow={setSideshow} sideshow={sideshow} />
			<div className="h-13 sm:h-18 "></div>
			<div className=" h-full w-full p-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
				{data.map((el) => (
					<div
						key={el._id}
						className="bg-white  shadow-[0_8px_24px_rgba(0,0,0,0.72)] h-90 sm:h-104 pt-3 sm:pt-2 "
					>
						<img
							className="sm:w-40 sm:h-60 w-30 h-50 m-auto"
							src="https://cdn.kobo.com/book-images/5bd1b65d-33e1-4c0e-8ab0-aa534037a8a1/353/569/90/False/the-prince-330.jpg"
							alt=""
						/>
						<h1 className="sm:text-[20px] text-[15px] font-bold text-center">{el.title}</h1>
						<h1 className="sm:text-[15px] text-[15px]  text-center">{el.author}</h1>
						<h1 className=" font-bold text-[22px] font-extrabold text-center">{`₹${el.price}`}</h1>
						<div onClick={()=>updateStatus(el._id,el)} className="border-2 w-30 sm:w-54 h-12 m-auto flex flex-col justify-center items-center rounded-[10px] bg-black   cursor-pointer select-none transition-all duration-200 ease-out hover:scale-105 hover:bg-gray-900 active:scale-95 ">
							{el.status == "available" ? (
								<>
									<h1 className="text-white font-bold text-[14px] sm:text-[20px] ">Buy</h1>
								</>
							) : (
								<>
									<h1 className="text-white font-bold text-[14px] sm:text-[20px]">Sold Out</h1>
								</>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Gallery
