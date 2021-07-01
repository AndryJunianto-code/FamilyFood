import Navbar from './components/Navbar';
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import {Switch, Route} from 'react-router-dom'
function App() {

  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path='/'><Home/></Route>
    <Route path='/gallery'><Gallery/></Route>
    </Switch>
    </>
  );
}

export default App;
