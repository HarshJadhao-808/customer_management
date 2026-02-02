import React, { useState } from 'react'
import Navbar from '../Navbar'

const Gallery = () => {
            const [sideshow, setSideshow] = useState(false);
    
  return (
		<div>
			<Navbar setSideshow={setSideshow} sideshow={sideshow} />
		</div>
	);
}

export default Gallery
