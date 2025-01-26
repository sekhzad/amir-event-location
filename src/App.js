// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventTypes from './components/EventTypes';
import Gallerie from './components/Gallerie';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import UberUns from './components/UberUns';
import Anfahrt from './components/Anfahrt';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
import Kontakt from './components/Kontakt';
import './App.css';
import HeaderHero from './components/HeaderHero';
import Admin from './components/Admin';

function App() {
    return (
        <Router basename="/amir-event-location">
            <Routes>
                {/* Main Page */}
                <Route 
                    path="/" 
                    element={
                        <>
                            <HeaderHero />
                            <EventTypes />
                            <Gallerie />
                            <Kontakt />
                        </>
                    } 
                />
                
                {/* Individual Routes */}
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/uber-uns" element={<UberUns />} />
                <Route path="/anfahrt" element={<Anfahrt />} />
                <Route path="/gallerie" element={<Gallerie />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
