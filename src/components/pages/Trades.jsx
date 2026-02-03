import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'

const Trades = () => {
       
	  const [data,setData] = useState([])
	const getBooks = async () => {
		const res = await axios.get("http://localhost:5555/api/book/getAll");
		setData(res.data)
		console.log(res.data)
	};
	useEffect(() => {
		getBooks();
	}, []);

	const statusUpdate = async(id) => {

	}


    
  return (
		<div>
			<div className="h-15 sm:h-18"></div>
			<table className="border-2 w-[95%] m-auto">
				<thead>
					<tr>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">Book</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">Author</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">Pieces</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">Bought</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">Sold</th>
					</tr>
				</thead>
				{data.map((el) => (
					<tr key={el._id}>
						<td className="border-2 text-[10px] text-center sm:text-[18px] px-3">
							{el.title}
						</td>
						<td className="border-2 text-[10px] text-center sm:text-[18px] px-3">
							{el.author}
						</td>
						<td className="border-2 text-[10px] text-center sm:text-[18px] px-3">
							One
						</td>
						<td className="border-2 text-[10px] text-center sm:text-[18px] px-3">
							{el.price}
						</td>
						<td className="border-2 text-[10px] text-center sm:text-[18px] px-3">
							{(el.price)+(Math.floor(Math.random() *100))}
						</td>
					</tr>
				))}
			</table>
		</div>
	);
}

export default Trades
