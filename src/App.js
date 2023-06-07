import './App.css';
import React from 'react';
import Navbar from './components/NavBar/navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <React.Fragment>
          <div className='App'>
            <>
              <Navbar/>
              <Routes>
                {/* <Route path='/' element={<Home/>} />   */}
                {/* <Route path='/gallery' element={<ItemListContainer/>} /> */}
                {/* <Route path='/contacto' element={<Contact/>} /> */}
                {/* <Route path='/about' element={<About/>} /> */}
                {/* <Route path='/cart' element={<CartContainer/>}/> */}
                {/* <Route path='*' element={<PaginaError/>} /> */}
              </Routes>
            </>
          </div>
        </React.Fragment>
      </BrowserRouter>
  );
}

export default App;
