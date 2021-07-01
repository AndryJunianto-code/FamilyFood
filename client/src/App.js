import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [foods, setFoods] = useState([])

  const getFood = async () => {
    const res = await axios.get('/api/foods')
    setFoods(res.data)
  }
  useEffect(()=> {  
    getFood()
  },[])
  return (
    <div>
     {foods.map(food=> (
       <div key={food._id}>
         <h1 className='text-green-500 font-extrabold'>{food.name}</h1>
         <h3 className='text-red-400 font-light'>{food.age}</h3>
         </div>
     ))}
    </div>
  );
}

export default App;
