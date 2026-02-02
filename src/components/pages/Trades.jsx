import React, { useState } from 'react'
import Navbar from '../Navbar'

const Trades = () => {
       
    
  return (
		<div>
			<div className="h-15 sm:h-18"></div>
			<table className="border-2 w-[95%] m-auto">
				<thead>
					<th className="text-[17px] font-extrabold ">Book</th>
					<th className="text-[17px] font-extrabold ">Author</th>
					<th className="text-[17px] font-extrabold ">Pieces</th>
					<th className="text-[17px] font-extrabold ">Bought</th>
					<th className="text-[17px] font-extrabold ">Sold</th>
				</thead>
			</table>
		</div>
	);
}

export default Trades
