import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/home/home";
import Events from "./pages/events/events";
import Event from "./pages/event/event";
import Team from "./pages/team/team";
import About from "./pages/about/hero.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from "./pages/projects/projects.js";
import Homenew from "./pages/home_new/homenew.js";


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homenew/>}/>
      <Route path="/home_new" element={<Homenew/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/test" element={<Event/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/home_new" element={<Homenew/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
