import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';
import Reviews from './container/Reviews/Reviews';
import Events from './container/Events/Events';
import Sust from './container/Sust/Sust';


const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Events />
    <Gallery />
    <Sust />
    <FindUs />
    <Reviews/>
    <Footer />
  </div>
);

export default App;
