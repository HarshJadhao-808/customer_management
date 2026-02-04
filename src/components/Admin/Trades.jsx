import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ATrades = () => {
  const [data,setData] = useState([])
 

  const getTraders = async () => {
      const res = await axios.get("http://localhost:5555/admin/getTraders");
      setData(res.data.traders)
      console.log(res.data.traders)
  } 


  // for(let i=0 ; i<data.length ; i++ ){
  //   const trades = {
  //     buyed : 0,
  //     sold : 0
  //   }
  //   for(let j=0 ;j<data[i].Inventory.length ; j++){
  //     if(data[i].Inventory[j].status == "buyed"){
  //       trades.buyed++
  //     }else if (data[i].Inventory[j].status == "sold"){
  //       trades.sold++
  //     }
  //   }
  //   setData({...data[i],trades})
  // }


  useEffect(()=>{
    getTraders()
  },[])

  return (
		<div>
			<div className="h-13 sm:h-18 "></div>
			<table className="border-2 w-[95%] m-auto">
				<thead>
					<tr>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">Username</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">User id</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">Contact</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">E-mail</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">Buyed</th>
						<th className="text-[10px] sm:text-[17px] font-extrabold ">Sold</th>
					</tr>
				</thead>
        		<tbody>
					{          
          data.map((el) =>
            (
						<tr key={el._id}>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-1">
								{el.Username}
							</td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-1">
								{el._id}
							</td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-5">
								{el.Contact}
							</td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-1">
								{el.Email}
							</td>
              <td className="border-2 text-[10px] text-center sm:text-[18px] px-3 bg-[#DCFCE7] text-[#166534]"></td>
							<td className="border-2 text-[10px] text-center sm:text-[18px] px-5 text-[#991B1B] bg-[#FEE2E2]"> </td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ATrades
