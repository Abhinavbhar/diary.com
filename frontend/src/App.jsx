import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./NotFound";
import Sign from "./login/Register.jsx";
import Signup from "./login/SignIn.jsx";
import Dashboard from "./components/Dasboard.jsx";
import EntryComponent from "./components/AddEntry.jsx";




function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/signup" element={<Sign />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/addnewentry' element={<EntryComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  )
}

export default App
