import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Inventory = () => {
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
						<th className="text-[10px] sm:text-[17px] font-extrabold ">
							Author
						</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">
							Price
						</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">
							Pieces
						</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">
							Status
						</th>
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
							{el.price}
						</td>
						<td className="border-2 text-[10px] text-center sm:text-[18px] px-3">
							One
						</td>
						{el.status == "sold" ? (
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-3 text-[#991B1B] bg-[#FEE2E2]">
								{el.status}
							</td>
						) : (
							<td
								onClick={() => statusUpdate(el.id)}
								className="border-2 text-[10px] text-center sm:text-[18px] px-3 bg-[#DCFCE7] text-[#166534]">Sell</td>
						)}
					</tr>
				))}
			</table>
		</div>
	);
}

export default Inventory
