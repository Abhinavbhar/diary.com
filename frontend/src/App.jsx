import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from "./NotFound";
import Sign from "./login/Sign";
import Signup from "./login/Signup";




function App() {


  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Sign />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>

  )
}

export default App
