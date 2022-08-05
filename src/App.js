import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from './pages/home/Home';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className='screen'>
            <Routes>
              <Route>
              <Route path="/" element={<Home/>}/>
              </Route>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
