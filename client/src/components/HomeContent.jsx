import React from 'react'
import {Star, StarHalf} from '@material-ui/icons'
import {Link} from 'react-router-dom'

export default function HomeContent() {
    return (
    <div className='text-gray-50 relative'>
        <img src="images/header.png" className='h-full w-full object-cover absolute top-0 left-0 opacity-50' alt="" />
        <div className='relative z-10'>
        <div className='h-96 md:px-36'>
            <div className='h-1/2 flex bg-gray-700 rounded-xl'>
                <img src="https://source.unsplash.com/random" className="w-1/2 h-full rounded-l-xl overflow-hidden" alt="logo" />
                <div className='w-1/2 flex items-center flex-col py-3 px-6 md:text-center md:mt-3'>
                <h1 className='text-lg md:text-xl text-yellow-300 tracking-wide uppercase'>Craving Satisfied</h1>
                <h2 className='text-gray-200 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, esse?</h2>
                </div>
            </div>
            <div className='h-1/2 flex bg-gray-700 rounded-xl'>
                <div className='w-1/2 flex items-center flex-col py-3 px-6 md:text-center md:mt-3'>
                <h1 className='text-lg md:text-xl text-yellow-300 tracking-wide uppercase'>Craving Satisfied</h1>
                <h2 className='text-gray-200 text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, esse?</h2>
                </div>
                <img src="https://source.unsplash.com/random" className="w-1/2 h-full rounded-r-xl overflow-hidden" alt="logo" />
            </div>
        </div>

        <div className='py-2 px-6'>
            <h1 className='text-center mb-3 mt-4 text-yellow-300 text-4xl md:text-5xl tracking-widest'>Top Collection</h1>
            <div className="card my-3 h-72 md:h-80 md:px-36">
            <img className='h-2/3 md:h-4/5 w-full object-fit rounded-t-2xl' src="https://source.unsplash.com/random" alt="logo" />
            <div className='h-1/3 md:h-1/5 flex items-center bg-gray-700 py-2 md:py-1 px-5 flex-col rounded-b-2xl'>
                <h1 className='text-xl text-center'>Biroche Burger Buns & Special Curry Sauce</h1>
                <span><Star/><Star/><Star/><Star/><StarHalf/> (86)</span>
            </div>
            </div>

            <div className="card my-3 h-72 md:h-80 md:px-36">
            <img className='h-2/3 md:h-4/5 w-full object-fit rounded-t-2xl' src="https://source.unsplash.com/random" alt="logo" />
            <div className='h-1/3 md:h-1/5 flex items-center bg-gray-700 py-2 md:py-1 px-5 flex-col rounded-b-2xl'>
                <h1 className='text-xl text-center'>Biroche Burger Buns & Special Curry Sauce</h1>
                <span><Star/><Star/><Star/><Star/><StarHalf/> (86)</span>
            </div>
            </div>

            <div className="card my-3 h-72 md:h-80 md:px-36">
            <img className='h-2/3 md:h-4/5 w-full object-fit rounded-t-2xl' src="https://source.unsplash.com/random" alt="logo" />
            <div className='h-1/3 md:h-1/5 flex items-center bg-gray-700 py-2 md:py-1 px-5 flex-col rounded-b-2xl'>
                <h1 className='text-xl text-center'>Biroche Burger Buns & Special Curry Sauce</h1>
                <span><Star/><Star/><Star/><Star/><StarHalf/> (86)</span>
            </div>
            </div>
        </div>

        <div className='max-w-max m-auto'>
        <Link to='/gallery'><button className='px-4 py-2  text-sm md:text-lg tracking-widest border-2 border-white rounded-full bg-opacity-0 transition-all duration-200 linear my-2 hover:bg-gray-100 hover:bg-opacity-20'>Explore our full menu</button></Link>
        </div>
        </div>
    </div>
    )
}
