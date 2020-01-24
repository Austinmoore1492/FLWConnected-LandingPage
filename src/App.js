import React, { Fragment } from 'react';
import './styles.css';

import Landing from './components/Landing';
import Navbar from './components/Navbar';
import About from './components/About';
import SignUp from './components/SignUp';

const App = () => (
  <Fragment>
    <Navbar />
    <Landing />
    <About />
    <SignUp />
  </Fragment>
);

export default App;
