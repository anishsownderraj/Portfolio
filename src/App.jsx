// dependencies
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// views
import { Home, Projects, Contact, About } from './views';
// components
import Navbar from './components/Navbar';

export const App = () => {
    return (
        <main className='bg-slate-300/20'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </main>
    );
};