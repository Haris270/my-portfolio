import React from 'react';
import { useState, useEffect } from 'react'
import axiosInstance from "./axios";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProjectDetails from './components/ProjectDetail';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App(){
    return(
        <>
            <Navbar/>
            <div className='app'>
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route path='/project/:id' element={<ProjectDetails/>}/>
                    <Route path='/contact' element={<ContactForm/>}/>

                </Routes>
                
            </div>
            <Footer/>
        </>
    )
}

export default App;