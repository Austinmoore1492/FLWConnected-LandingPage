import React, { Fragment } from 'react';
import './styles.css';

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import About from './components/About';
import SignUp from './components/SignUp';
import Features from './components/Features';
import Footer from './components/Footer';

const App = () => (
  <Fragment>
    <Navbar />
    <Landing />
    <About />
    <hr className="hr-style" />
    <Features />
    <hr className="hr-style" />
    <SignUp />
    <Footer />
  </Fragment>
);

export default App;
