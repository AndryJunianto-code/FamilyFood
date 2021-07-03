import Navbar from './components/Navbar';
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import Register from './pages/Register'
import Login from './pages/Login'
import {Switch, Route} from 'react-router-dom'
function App() {

  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path='/'><Home/></Route>
    <Route path='/gallery'><Gallery/></Route>
    <Route path='/register'><Register/></Route>
    <Route path='/login'><Login/></Route>
    </Switch>
    </>
  );
}

export default App;
