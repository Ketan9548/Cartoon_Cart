import React from 'react'
import { NavLink } from 'react-router-dom'

const Footers = () => {
  return (
    <>
      <div className='bg-blue-gray-100'>
        <div className='flex justify-center text-2xl'>
          Cartoon Here
        </div>
        <div className='flex justify-center'>
          <div className='flex flex-row'>
            <p className='ml-4 mr-4 bg-gray-600 pl-2 pr-2 hover:font-bold hover:opacity-70'><NavLink to="">Contact Us</NavLink></p>
            <p className='ml-4 mr-4 bg-gray-600 pl-2 pr-2 hover:font-bold hover:opacity-70'><NavLink>About Us</NavLink></p>
            <p className='ml-4 mr-4 bg-gray-600 pl-2 pr-2 hover:font-bold hover:opacity-70'><NavLink>Sitemap</NavLink></p>
            <p className='ml-4 mr-4 bg-gray-600 pl-2 pr-2 hover:font-bold hover:opacity-70'><NavLink>More</NavLink></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footers