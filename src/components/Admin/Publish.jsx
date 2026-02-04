import axios from 'axios'
import React, { useState } from 'react'
import Swal from "sweetalert2";

const Publish = () => {

  const [book , setBook] = useState({
    title:"",
    author:"",
    price:"",
    image:""
  })

  const saveit = (e) => {
    setBook({...book, [e.target.name] : e.target.value})
  }

  const sendit = async() => {
    event.preventDefault()
    const res = await axios.post("http://localhost:5555/admin/publishbook", book);
    let message = res.data.message 
      Swal.fire({
            text: message,
            icon: "success",
          })
  }
  return (
		<div>
			<div className="h-13 sm:h-18 "></div>
			<form onSubmit={sendit} className="mt-12 sm:w-[50%] w-[80%] m-auto shadow-[0_10px_25px_rgba(0,0,0,2.12)] p-10 flex flex-col gap-3">
        <label className='text-center font-bold text-[12px] sm:text-[24px]'>Publish New Book</label>
        <label className='text-[12px] sm:text-[18px] font-bold '>Title :</label>
        <input onChange={saveit} className='border-1 text-center rounded-[20px] h-6 sm:h-8' type="text" name='title' />
        <label className='text-[12px] sm:text-[18px] font-bold '>Author :</label>
        <input onChange={saveit} className='border-1 text-center rounded-[20px] h-6 sm:h-8' type="text" name='author' />
        <label className='text-[12px] sm:text-[18px] font-bold '>Price :</label>
        <input onChange={saveit} className='border-1 text-center rounded-[20px] h-6 sm:h-8' type="text" name='price' />
        <label className='text-[12px] sm:text-[18px] font-bold '>Image : (/image/path)</label>
        <input onChange={saveit} className='border-1 text-center rounded-[20px] h-6 sm:h-8' type="text" name='image' />
      <span className='border- col-span-2 flex justify-center sm:justify-end items-center h-10 mt-10'>
        <input type="submit" value="Publish Book" className=' sm:text-[18px] text-[12px] border-2 py-2 px-8 font-bold text-white bg-black rounded-[10px] hover:scale-110 duration-75 transition-all ' />
      </span>
      </form>
		</div>
	);
}

export default Publish
