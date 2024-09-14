import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar';
import Introduction from "./Components/Introduction"
import Content from "./Components/Content"

import Landscape from "./Components/Landscape"
import Street from "./Components/Street"
import Product from "./Components/Product"
import Others from "./Components/Others"
import '../src/App.css';

function App() {
return (
    <Router>
    <div>
        <Navbar />

        <Routes>
        <Route path="/" element={<Introduction />} />
        
        <Route path="/gallery" element={<Content />} />

        <Route path="/Street" element={<Street />} />
        <Route path="/Landscape" element={<Landscape />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Other" element={<Others />} />

        
        

        </Routes>

        
        
    </div>
    </Router>
);
}

export default App;
