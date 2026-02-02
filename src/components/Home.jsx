import React, { useState } from 'react'
import Navbar from './Navbar'

const Home = () => {
  	const [sideshow, setSideshow] = useState(false);
  return (
    <div onClick={()=> setSideshow(false)} className=' w-screen h-full '>
      <Navbar setSideshow={setSideshow} sideshow={sideshow}/>
      <div className='h-17'></div>
      <div className=' h-full w-full p-4 grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {/* <div className='border-2 h-60 '></div> */}
      </div>
    </div>
  )
}

export default Home
