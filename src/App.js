import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Acasa from './pages/Acasa/Acasa.js';
import Portofoliu from './pages/Portofoliu/Portofoliu.js';
import Despre from './pages/Despre/Despre.js';
import Contact from './pages/Contact/contact.js';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Acasa/>}/>
              <Route path="/acasa" element={<Acasa/>}/>
              <Route path="/portofoliu" element={<Portofoliu/>}/>
              <Route path="/despre" element={<Despre/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="*" element={<Acasa/>}/>
              <Route path="/*" element={<Acasa/>}/>
          </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
