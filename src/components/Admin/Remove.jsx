import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Remove = () => {
	const [data, setData] = useState([]);

	const getBooks = async () => {
		const res = await axios.get("http://localhost:5555/admin/getBooks");
		setData(res.data);
	};

	useEffect(() => {
		getBooks();
	}, []);

  const deleteBook = async (id) => {
    const res = await axios.delete(`http://localhost:5555/admin/removeBook/${id}`);
    let message = res.data.message
       Swal.fire({
              text: message,
              icon: "success",
              })
        getBooks()
  }

	return (
		<div>
			<div className="h-13 sm:h-18 "></div>
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
							image
						</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">
							Delete
						</th>
					</tr>
				</thead>
				<tbody>
					{data.map((el) => (
						<tr key={el._id}>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-1">
								{el.title}
							</td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-1">
								{el.author}
							</td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-5">
								{el.price}
							</td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-1">
								{el.image}
							</td>
							<td onClick={()=>deleteBook(el._id)} className="border-2 text-[10px] text-center sm:text-[18px] px-5 text-[#991B1B] bg-[#FEE2E2]">
								Delete
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Remove;
