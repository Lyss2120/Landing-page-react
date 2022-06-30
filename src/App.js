import React from 'react';
import './App.css';
import Jumbotron from '../src/componentes/Jumbotron';
import Cards from './componentes/Cards';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
// import image from './imagenes/500x325.png'

function App() {
  return (
    <div>
      <Navbar
      navbrand='Start Bootstrap'
      navitem1='Home'
      navitem2='About'
      navitem3='Services'
      navitem4='Contact' />
      <Jumbotron
      titulo= 'A warm welcome!'
      texto= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolores voluptas facere mollitia perspiciatis minus recusandae commodi explicabo tenetur, impedit, neque incidunt voluptatibus sed molestias similique exercitationem nostrum voluptate aperiam.'
      boton= 'Click to action!' />
      <Cards />
      <Footer />

    </div>
  )
}

export default App
