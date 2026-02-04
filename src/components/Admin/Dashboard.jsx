import axios from "axios";
import React, { useEffect, useState } from "react";
import DC from "/src/assets/delete_closed.png";

const Dashboard = () => {
	const [data, setData] = useState([]);
	const getUsers = async () => {
		const res = await axios.get("http://localhost:5555/admin/getusers");
		setData(res.data);
	};
	useEffect(() => {
		getUsers();
	}, []);
	return (
		<div>
			<div className="h-13 sm:h-18 "></div>
			<table className="border-2 w-[95%] m-auto">
				<thead>
					<tr>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">
							Username
						</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">
							Email
						</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">
							Contact
						</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">
							Address
						</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">role</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">Delete</th>
					</tr>
				</thead>
				<tbody>
					{data.map((el) => (
						<tr key={el._id}>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-3">{el.Username}</td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-3">{el.Email}</td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-3">{el.Contact}</td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-3">{el.Address}</td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-3">{el.Role}</td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-3 flex items-center justify-between"><img src={DC} className="w-3 sm:w-4" alt="" />Delete</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Dashboard;
