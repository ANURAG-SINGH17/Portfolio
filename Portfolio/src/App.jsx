import React from 'react'
import Home from './components/Home'
import {  Routes, Route } from "react-router-dom";
import Projects from './components/Projects';

const App = () => {
  return (
    <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
    </Routes>
  )
}

export default App
