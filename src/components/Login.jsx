import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
      const [blur, setBlur] = useState(true);
			const navigate = useNavigate();
			useEffect(() => {
				blur == false ? navigate("/") : "";
			}, [blur]);
  return (
    <div onClick={ () => setBlur(false)} className='fixed z-4 backdrop-blur-[2px] bg-transparent h-screen w-screen flex justify-center items-center'>
       <div onClick={ (e) => e.stopPropagation()}  className='border-3 h-80 w-[90%] bg-[#F2F4F7] '>

      </div>
    </div>
  )
}

export default Login
