import React, { useState } from 'react'
import Navbar from './Navbar'

const Home = () => {
  	const [sideshow, setSideshow] = useState(false);
  return (
    <div onClick={()=> setSideshow(false)} className=' w-screen h-full fixed z-5 bg-amber-950'>
      <Navbar setSideshow={setSideshow} sideshow={sideshow}/>
    </div>
  )
}

export default Home
