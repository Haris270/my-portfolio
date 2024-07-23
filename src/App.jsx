import React from 'react';
import { useState, useEffect } from 'react'
import axiosInstance from "./axios";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ProjectDetails from './components/ProjectDetail';
import ContactForm from './components/ContactForm';

