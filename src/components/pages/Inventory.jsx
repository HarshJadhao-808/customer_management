import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
    const [data,setData] = useState([])
	const token = JSON.parse(localStorage.getItem("Token"))
	const decoded = jwtDecode(token)
	const user_id = decoded.id
	const getBooks = async () => {
		const res = await axios.post("http://localhost:5555/api/book/getInventory",{user_id});
		setData(res.data.data)
		// console.log(res.data.data)
	};
	useEffect(() => {
		getBooks();
	}, []);
	const Navigate = useNavigate()
	const statusUpdate = async(book_id) => {
		const res = await axios.post("http://localhost:5555/api/book/Addtosold",{user_id,book_id});
		console.log(res)
		Swal.fire({
						text: "Sold Successfully !",
						icon: "success",
					});
					Navigate("/trades")
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
				<tbody>
				{data.map((el) => (
					el.status == "buyed" ?
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
								onClick={() => statusUpdate(el._id)}
								className="border-2 text-[10px] text-center sm:text-[18px] px-3 bg-[#DCFCE7] text-[#166534]">Sell</td>
						)}
					</tr>
					:
					""
				))}
				</tbody>
			</table>
		</div>
	);
}

export default Inventory
