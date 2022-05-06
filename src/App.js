import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Shared/Navbar/Navigation';
import Banner from './components/Home/Banner/Banner';
import Search from './components/Home/Search/Search';
import Featured from './components/Home/Featured Properties/Featured';
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Recentproperties from './components/Home/Recent Properties/Recentproperties';
import Whychooseus from './components/Home/Whychooseus/Whychooseus';
import Mostpopular from './components/Home/Most Popular/Mostpopular';
import Partner from './components/Home/Partner/Partner';
import Whatpeople from './components/Home/WhatPeople/Whatpeople';
import Signup from './components/Home/Signup/Signup';
import Latestnews from './components/Home/Latestnews/Latestnews';
import Footer from './components/Shared/Footer/Footer';



function App() {
  return (

    <Container>
      <Navigation />
      <Banner />
      <Search />
      <Featured />
      <Recentproperties />
      <Mostpopular />
      <Whychooseus />
      <Partner />
      <Whatpeople />
      <Signup />
      <Latestnews />
      <Footer />

    </Container>


  );
}

export default App;
