import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import UserPage from './Components/UserPage/UserPage';
import WorkshopsDetails from './Components/WorkShopDetail/WorkshopsDetails';


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     
      <Routes>
        <Route path='detailsworkshop/:id' element={<> <WorkshopsDetails/>  </>} />
        <Route path='userpage' element={<><UserPage/> </>} />
        <Route path='/' element={<><Home/> <Main/> <Footer/></>} />

      </Routes>
     </BrowserRouter>
  );
}

export default App;
