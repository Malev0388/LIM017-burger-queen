import Welcome from './components/Welcome/index.js';
import Chef from './components/Chef/index.js';
import Index from './components/Mesero/index.js';
import Admin from './components/Administrador/index.js';
import {BrowserRouter,Route,Routes,} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}/>
        <Route path="/chef" element={<Chef/>}/>
        <Route path="/mesero" element={<Index/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



