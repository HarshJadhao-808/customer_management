import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [blur,setBlur] = useState(true)
    const navigate = useNavigate()
    useEffect(()=>{
      blur == false ? navigate("/") : ""
    },[blur])
  return (
		<div
			onClick={() => setBlur(false)}
			className="fixed z-4 backdrop-blur-[2px] bg-transparent h-screen w-screen flex justify-center items-center"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="h-120 w-[90%] bg-[#F2F4F7] rounded-[15px] flex flex-col justify-center items-center gap-5"
			>
				<h1 className="text-[#1F2937] text-[18px] sm:text-[24px] font-medium ">
					Sign Up
				</h1>
				<div className="border-1 border-[#E5E7EB] w-[80%]"></div>
                <form className='boder-3 w-[80%] flex flex-col gap-3 items-center justify-center'>
                    <input className=' border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-12 h-8 ' placeholder='UserName'  type="text" name='username'/>
                    <input className=' border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-12 h-8 ' placeholder='Email'  type="email" name='email'/>
                    <input className=' border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-12 h-8 ' placeholder='Password'  type="password" name='password'/>
                    <input className=' border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-12 h-8 ' placeholder='Phone no.'  type="text" name='phone'/>
                    <input className=' border-1 border-[#D1D5DB] w-[100%] sm:w-[50%] pl-2 sm:h-20 h-15 ' placeholder='Address'  type="text" name='address'/>
                    <input className='' placeholder='Address'  type="submit" name='address'/>
                </form>
			</div>
		</div>
	);
}

export default Signup
