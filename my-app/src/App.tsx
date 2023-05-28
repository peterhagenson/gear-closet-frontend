import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//create component that creates routing for the app

function App() {
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>    
      </div>
    </>
  )
}

export default App;
