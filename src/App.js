import './App.css';
import React from 'react';
import Navbar from './components/NavBar/navbar';
import Home from './components/home/home';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Gallery from './components/gallery/gallery';
import Footer from './components/fakeFooter/footer';
import PaginaError from './components/error/error';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <React.Fragment>
          <div className='App'>
              <Navbar/>
                <Routes>
                  <Route path='/' element={<Home/>} />  
                  <Route path='/gallery' element={<Gallery/>} />
                  <Route path='/contacto' element={<Contact/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='*' element={<PaginaError/>} />
                </Routes>
              <Footer/>
          </div>
        </React.Fragment>
      </BrowserRouter>
  );
}

export default App;
