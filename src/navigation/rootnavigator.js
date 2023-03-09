import React from 'react'

import { Routes, Route } from "react-router-dom";
import { HomeScreen } from '../screens/homescreen/homescreen';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import { Dashboard } from '../screens/dashboard/dashboard';
import { Register } from '../screens/register/registerscreen';
export const RootNavigator = () =>{
   return <Router>
   <Routes>
   <Route path="/" element={<HomeScreen />} />
   <Route path="/dashboard" element={<Dashboard />} />
   <Route path="/register" element={<Register />} />
   </Routes>
   </Router>
}