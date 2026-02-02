import React, { useState } from 'react'
import Navbar from '../Navbar'

const Inventory = () => {
    
  return (
		<div>
			<div className="h-15 sm:h-18"></div>
			<table className='border-2 w-[95%] m-auto'>
				<thead>
					<th className='text-[17px] font-extrabold '>Book</th>
					<th className='text-[17px] font-extrabold '>Author</th>
					<th className='text-[17px] font-extrabold '>Price</th>
					<th className='text-[17px] font-extrabold '>Pieces</th>
					<th className='text-[17px] font-extrabold '>Status</th>
				</thead>
			</table>
		</div>
	);
}

export default Inventory
