import React,{useState, useEffect} from 'react'
import {Star,StarOutline } from "@material-ui/icons"
import {useLocation} from 'react-router'
import axios from 'axios'

export default function IndividualCategory({food}) {
    const [menuOpen,setMenuOpen] = useState(true)
    const [foods,setFoods] = useState([])
    const PF = "http://localhost:3000/images"

    const categoryQuery = useLocation().pathname.split('/')[2]
    const displayFood = async () => {
        const res = await axios.get(`/api/foods/${categoryQuery}`)
        setFoods(res.data)
        console.log(res.data)
    }
    useEffect(()=> {
        displayFood()
    },[categoryQuery])
    return (
        
                            
                            <div className={`transition-all duration-300 ease-in ${menuOpen?"h-auto opacity-100":"h-0 opacity-0"}`}>
                            <div className='mt-7 md:grid md:grid-cols-3 md:w-screen md:px-12'>
                            {foods.map(food=> (
                                 <div className="card w-full flex mb-3 md:flex-col md:items-center" key={food._id}>
                                 <img className='w-1/2 h-36 object-cover rounded-3xl md:w-52 md:h-52'src={PF+"/curry-pan-mee.jpg"} alt="picture" />
                                 <div className='w-1/2 ml-2 mt-3 text-center md:w-52 '>
                                     <h1 className='text-xl mb-2 capitalize'>{food.name}</h1>
                                     <h3 className='text-yellow-400'><Star/><Star/><Star/><StarOutline/><StarOutline/>{food.ratings.length}</h3>
                                 </div>
                                </div>
                            ))}
                            </div>
                            </div>
                       
    )
}
