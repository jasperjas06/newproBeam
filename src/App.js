import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';
import Work from './pages/Work';
import LandingPage from './pages/LandingPage';
import SpeakWithUs from './components/SpeakWithUs/SpeakWithUs';
import About from './pages/About';

function App() {
  const [open,setOpen] = useState(false);

  return (
    <>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home setOpen={setOpen} open={open} />} />
        <Route path='/About' element={<About setOpen={setOpen} open={open} />} />
        <Route path='/solutions' element={<Solutions setOpen={setOpen} open={open} />} />
        <Route path='/process' element={<Process setOpen={setOpen} open={open} />} />
        <Route path='/work' element={<Work setOpen={setOpen} open={open} />} />
        <Route path='/contact' element={<Contact setOpen={setOpen} open={open} />} />
      </Routes>
    </BrowserRouter>
    
    {open && <SpeakWithUs setOpen={setOpen} />}
    </>
  );
}

export default App;