import Welcome from './components/Welcome/index.js';
import Chef from './components/Chef/index.js';
import Index from './components/Mesero/index.js';
import Admin from './components/Administrador/index.js';
import BreakfastOverview from "./components/Mesero/Breakfast/BreakfastOverview.js";
//import MenuOverview from "./components/Mesero/Menu/MenuOverview.js";
import IndexDos from "./components/Mesero/Menu/indexDos.js"
import {BrowserRouter,Route,Routes,} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/chef" element={<Chef/>}/>
        <Route path="/mesero" element={<Index/>}/>
        <Route path="/admin" element={<Admin/>}/>

        <Route path="/mesero/breakfast" element={<BreakfastOverview/>} />
        <Route path="/menu" element={<IndexDos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;



/*
import Welcome from './components/Welcome/index.js';
import Chef from './components/Chef/index.js';
import Index from './components/Mesero/index.js';
import Admin from './components/Administrador/index.js';
import BreakfastOverview from "./components/Mesero/Breakfast/BreakfastOverview.js";
import MenuOverview from "./components/Mesero/Menu/MenuOverview.js";
import {BrowserRouter,Route,Routes,} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/chef" element={<Chef/>}/>
        <Route path="/mesero" element={<Index/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/mesero/breakfast" element={<BreakfastOverview/>} />
        <Route path="/menu" element={<MenuOverview/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;




*/