
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import React from 'react';
import Footer from './Components/Footer/Footer';
// import Header from './Components/Header/Header';
import LandPage from './Components/LandPage/LandPage'
import About from './Components/About/About';
import Gallery from './Components/Gallery/Gallery'
import ChairPerson from './Components/ChairPerson/ChairPerson'
import Contact from './Components/Contact/Contact'
function App() {
  return (
    <div>
        <div className='main'>
            {/* <Header /> */}
            <LandPage />
            <About />
            <Gallery />
            <ChairPerson />
            <NewsFeed/>
            <Contact />
            <Footer />
            
        </div>
    </div>
  );
}

export default App;
