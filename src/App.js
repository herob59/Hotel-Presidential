import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
 import Login from './components/Login';
 import Register from './components/Register';
import SingleRoom from './pages/SingleRoom';
import Booknow from './pages/Booknow';
import Footer from './components/Footer';
import Error from './pages/Error';


import { BrowserRouter, Route, Switch} from "react-router-dom";

import Navbar from './components/Navbar';



function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms/" component={Rooms}/>
         
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/booknow/:slug" component={Booknow} />
          <Route exact path="/login/" component={Login}/>
          <Route exact path="/register/" component={Register}/>
          <Route component={Error} />
          </Switch>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
