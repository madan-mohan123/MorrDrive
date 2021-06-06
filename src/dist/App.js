
import {Switch, Route} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Movies from './pages/Movies';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Series from './pages/Series';
import './assets/css/home.css'
function App() {
  return (
    
  <>
 
   <BrowserRouter>
  <Header/>
   <Switch>
    <Route  exact path="/" component={Home}/>
    <Route  exact path="/series" component={Series}/>
    <Route  exact path="/movies" component={Movies}/>
  </Switch>
<Footer />
 
   </BrowserRouter>


  </>

  );
}

export default App;
