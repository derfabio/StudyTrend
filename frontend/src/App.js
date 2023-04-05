import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import UserPage from './Components/UserPage/UserPage';


function App() {
  return (
    <BrowserRouter>
     {/* <Navbar/> */}
     
      <Routes>
        <Route path='userpage' element={<> <Navbar/> <UserPage/> </>} />
        <Route path='/' element={<><Navbar/> <Home/> <Main/> <Footer/></>} />

      </Routes>
     </BrowserRouter>
  );
}

export default App;
