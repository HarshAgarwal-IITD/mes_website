import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import Events from "./pages/events/events";
import Event from "./pages/event/event";
import { useState } from "react";
import Team from "./pages/team/team";

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/test" element={<Event/>}/>
      <Route path="/team" element={<Team/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
