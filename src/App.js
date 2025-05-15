import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Acasa from './pages/Acasa/Acasa.js';
import Portofoliu from './pages/Portofoliu/Portofoliu.js';
import Despre from './pages/Despre/Despre.js';
import Contact from './pages/Contact/contact.js';

function App() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
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
