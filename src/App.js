import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import useImage from './hooks/useImage';
import Home from './pages/home/Home';
import ImageDetails from './pages/imageDetails/ImageDetails';


function App() {
  const {imageDetails, setImageDetails} = useImage();

  return (
    <Router>
      <div className="app">
        <Header />
        <div className='screen'>
            <Routes>
              <Route>
              <Route path="/" element={<Home imageDetails={imageDetails}/>}/>
              </Route>
              <Route path="/image-details" element={<ImageDetails imageDetails={imageDetails}/>}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
