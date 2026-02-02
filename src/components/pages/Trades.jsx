import React, { useState } from 'react'
import Navbar from '../Navbar'

const Trades = () => {
        const [sideshow, setSideshow] = useState(false);
    
  return (
    <div>
      <Navbar setSideshow={setSideshow} sideshow={sideshow}/>
      
    </div>
  )
}

export default Trades
