import React from 'react'

const Header = () => {
  return (
    <>
    <div className='flex justify-between border-y shadow-md shadow-gray-300 p-3'>
        <span className='font-bold bg-slate-500 bg-clip-text cursor-pointer flex-shrink-0'>LOGO.</span>
        <ul className=' md:flex gap-5 text-gray-600 hidden  '>
       <li><a href="/">Home</a></li>
       <li><a href="">Explore</a></li>
       <li><a href="">Deals</a></li>
       <li><a href="">Contact</a></li>
        </ul>
    </div>
    </>
  )
}

export default Header