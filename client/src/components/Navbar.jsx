import {Link} from 'react-router-dom'

export default function Navbar() {
   
    return (
        <nav className='flex justify-between px-6 sticky top-0 text-gray-50 z-50 bg-black py-4 bg-opacity-70
        md:px-14 md'>
            <div>
                <h1 className='text-4xl md:text-5xl font-bold tracking-wider md:tracking-widest'>Richef</h1>
            </div>
            <ul className='flex items-center text-lg md:text-xl tracking-wide md:tracking-wider font-semibold text-gray-100'>
                <Link to='/about'><li className='mr-2'>About</li></Link>
                <Link to='/gallery'><li className='mr-2'>Gallery</li></Link>
                <Link to='/login'><li>Login</li></Link>
            </ul>
        </nav>
    )
}

