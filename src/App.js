import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Navigation from './Navbar/Navigation';
import Banner from './Banner/Banner';
import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (

    <Container>
      <Navigation />
      <Banner />

    </Container>


  );
}

export default App;
