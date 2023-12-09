import { Routes, Route  } from 'react-router-dom';
import './App.css';
import Store from './components/Store';
import Homepage from './components/Homepage';
import Iphone15pro from './components/Iphone15pro';
import Signin from './components/Signin';
import Register from './components/Register';
import Cart  from './components/Cart';
import Xyz from './components/Xyz';
import Iphone15proo from './components/Iphone15proo';
import './components/apple.css'
import Apple15 from './components/Apple15';
import Trial from './components/Trial';
import BuyIphone from './components/BuyIphone';
import Abc from './components/Abc';
import Login from './components/Signin';




function App() {
  return (
    <div className='App'>

    <Routes>
      <Route exact path='/' element={<Homepage/>}/>
      <Route exact path='/store' element={<Store/>}/>
      <Route exact path='/iphone15pro' element={<Iphone15pro/>}/>
      <Route exact path='/signin' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/xyz' element={<Xyz/>}/>
      <Route exact path='/iphone15proo' element={<Iphone15proo/>}/>
      <Route exact path='/apple15' element={<Apple15/>}/>
      <Route exact path='/trial' element={<Trial/>}/>
      <Route exact path='/buyiphone' element={<BuyIphone/>}/>
      <Route exact path='/abc' element={<Abc/>}/>


      
      
    </Routes>
  </div>
  )
}

export default App;
