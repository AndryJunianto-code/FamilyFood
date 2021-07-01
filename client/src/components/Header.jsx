import React from 'react'

export default function Header() {
    return (
        <div className='text-gray-50 text-center h-80 relative flex items-center justify-center flex-col'>
            <img className='w-full h-full object-fit absolute top-0 left-0 opacity-50' alt="img" src="images/header.png"/>
            <div className='z-10'>
            <h1 className='text-3xl uppercase tracking-wider mb-4'>It's all about family</h1>
            <h2 className='text-gray-300'>Lorem ipsum dolor sit, Lorem, ipsum dolor.</h2>
            <button className='px-4 py-2 text-sm tracking-widest border-2 border-white rounded-full bg-opacity-0 transition-all duration-200 linear my-2 hover:bg-gray-100 hover:bg-opacity-20'>Visit Menu</button>
            <div>Don't have an account? <span className='font-semibold'>Register</span></div>
            </div>
        </div>
    )
}
