import './App.css';
import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [foods, setFoods] = useState([])

  const getFood = async () => {
    const res = await axios.get('/api/foods')
    setFoods(res.data)
    console.log(res.data)
  }
  useEffect(()=> {  
    getFood()
  },[])
  return (
    <div>
     <h1 className='text-red-500 font-extrabold'>BODOH</h1>
    </div>
  );
}

export default App;
