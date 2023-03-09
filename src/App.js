import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login/Login.js";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<Login />} />
      </Routes>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
