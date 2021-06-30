import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [foods, setFoods] = useState([])

 /*  const getFood = async () => {
    const res = await axios.get('/foods')
    setFoods(res.data)
  }
  useEffect(()=> {  
    getFood()
  },[]) */
  return (
    <div>
     {/*  {foods.map(food=> (
        <div key={food._id}>
          <h1 className='text-red-500 text-6xl font-extrabold'>{food.name}</h1>
          <h1 className='text-sm text-blue-500 font-extrabold'>{food.age}</h1>
          </div>
      ))} */}
     holaaaa
    </div>
  );
}

export default App;
