import {Link} from 'react-router-dom'

export default function Navbar() {
   
    return (
        <nav className='flex justify-between px-6 sticky top-0 text-gray-50 z-10 bg-black py-4 bg-opacity-60'>
            <div>
                <h1 className='text-4xl font-bold tracking-wider'>Richef</h1>
            </div>
            <ul className='flex items-center text-lg tracking-wide font-semibold'>
                <Link to='/about'><li className='mr-2'>About</li></Link>
                <Link to='/gallery'><li className='mr-2'>Gallery</li></Link>
                <Link to='/login'><li>Login</li></Link>
            </ul>
        </nav>
    )
}
