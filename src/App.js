import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './/pages/home/Home';
import Realizations from './/pages/realizations/Realizations';
import Contact from './/pages/contact/Contact';
import About from './/pages/about/About';
import FeatureDemo from './/pages/featuredemo/FeatureDemo';
import Offer from './/pages/offer/Offer';
import LandingPage from "./pages/LandingPage/LandingPage";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";


const App = () => (
    <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            {/* Redirect root to /home */}
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/realizations" element={<Realizations/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/offer" element={<Offer/>}/>
            {/* Add more routes here as needed */}
        </Routes>
    </BrowserRouter>
);

export default App;
