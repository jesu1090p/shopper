import './App.css';
import Testimonio from './components/Testimonio.js';
import Navbar from './components/Navbar.js';
import React from 'react';
import 'bootstrap';

function App() {
  return (
    <React.StrictMode>  
      <div className='App container-fluid'>
        <div className='container-fluid'>
          <Navbar/> 
        </div>
        <div className='contenedor-principal'>
          <h1>Here is what our alumni say about freeCodeCamp:</h1>
          <Testimonio
          nombre='Shawn Dijstra'
          pais='Singapur'
          cargo='React Developer'
          imagen='shawn'
          empresa='Quantica'
          testimonio={<p className='text-wrap texto-testimonio'>It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. <strong>freeCodeCamp changed my life.</strong></p>}
          />
          <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          cargo='Software Engineer'
          imagen='sarah'
          empresa='Chat Desk'
          testimonio={<p className='text-wrap texto-testimonio'><strong>freeCodeCamp was the gateway to my career </strong>as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.</p>}
          />
          <Testimonio
          nombre='Emma Bostian'
          pais='Sweden'
          cargo='Software Engineer'
          imagen='emma'
          empresa='Spotify'
          testimonio={<p className='text-wrap texto-testimonio'>I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on <strong>freeCodeCamp gave me the skills</strong> and confidence I needed to land my dream job as a software engineer at Spotify.</p>}
          />
        </div>
      </div> 
      </React.StrictMode>  

  );
}

export default App;
