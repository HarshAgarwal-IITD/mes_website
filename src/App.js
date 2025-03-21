import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import Events from "./pages/events/events";
import Event from "./pages/event/event";
import { useState } from "react";
import Team from "./pages/team/team";
import About from "./pages/about/about";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <BrowserRouter>
    <Routes>````
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/test" element={<Event/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
