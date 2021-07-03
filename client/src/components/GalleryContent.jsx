import './index.css'
import { useState, useEffect} from "react"
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import Category from "./Category"


export default function GalleryContent() {
    const [categories, setCategories] = useState([])
    const [foods, setFoods] = useState([])


    const categoryQuery = useLocation().search
    const displayFood = async ()=> {
        if(categoryQuery) {
        try{
            const res = await axios.get(`/api/foods/${categoryQuery}`)
            console.log(res.data)
        } catch(err) {
            console.log(err)
        }
        }
    }
    const getCategories = async () => {
        const res = await axios.get('/api/categories')
        setCategories(res.data)
    }
    useEffect(()=> {
        getCategories()
    }, [])
    useEffect(()=> {
        displayFood()
    }, [categoryQuery])
    return (
        <div className='text-gray-50'>
            {categories.map(category=> (
                <Category key={category._id} category={category}/>
            ))}
        </div>
    )
}
