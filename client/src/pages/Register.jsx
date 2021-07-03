import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../context/Context.js'
import axios from 'axios'
import './index.css'

export default function Register() {
    const {user,dispatch} = useGlobalContext()
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleRegister = async (e) => {
        e.preventDefault()
        dispatch({type: "LOGIN_START"})
        try{
            const res = await axios.post('/api/register', {
                username,email,password
            })
            dispatch({type: 'LOGIN_SUCCESS', payload:res.data})
        } catch(err) {
            dispatch({type: "LOGIN_FAILURE"})
        }
      
    }
    return (
        <div className='bg-gradient-to-br from-green-800 via-green-700 to-green-500 w-full authHeight  flex justify-center items-center overflow-y-hidden'>
            <div className='bg-gray-800 px-10 py-9 rounded-2xl text-gray-900'>
                <div className="top text-center">
                    <h1 className='font-bold text-4xl font-serif text-yellow-300 tracking-widest'>Richef</h1>
                    <h2 className='text-gray-200'>Home sweet home</h2>
                </div>
                <form className='flex flex-col mt-5' onSubmit={handleRegister}>
                    <input type="text" placeholder='Username' onChange={(e)=> setUsername(e.target.value)}
                    className='auth-input mb-3 px-2 py-1 rounded-lg bg-transparent text-gray-100 border-b-2 border-gray-200 focus:outline-none' />
                    <input type="text" placeholder='Email' onChange={(e)=> setEmail(e.target.value)}
                    className='auth-input mb-3 px-2 py-1 rounded-lg bg-transparent text-gray-100 border-b-2 border-gray-200 focus:outline-none' />
                    <input type="password" placeholder='Password' onChange={(e)=> setPassword(e.target.value)}
                    className='auth-input mb-3 px-2 py-1 rounded-lg bg-transparent text-gray-100 border-b-2 border-gray-200 focus:outline-none' />
                    <button className="py-1 w-5/6 self-center tracking-widest border-2 border-white rounded-full bg-opacity-0 text-gray-100 transition-all duration-200 linear my-2 hover:bg-yellow-300 hover:text-gray-800 hover:bg-opacity-20'" type='submit'>Register</button>
                </form>
                <div className="bottom flex justify-center flex-col items-center mt-4">
                    <h3 className='text-gray-200 text-sm'>Already have an account?</h3>
                    <h4 className='text-lg mt-2 text-yellow-300 font-semibold'><Link to='/login'>Sign in</Link></h4>
                </div>
            </div>
        </div>
    )
}
