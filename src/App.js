import React, { useState, useEffect } from 'react';
import {Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header";
import Home from './pages/home/Home';
import Favorites from './pages/favorites/Favorites';
import Bottombar from './components/bottombar/Bottombar';
import Details from './pages/details/Details';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [cards, setCards] = useState(require('../src/data/data.json').cards)

  useEffect(() => {
    const data = window.localStorage.getItem('CARDS')

    if (data) {
      setCards(JSON.parse(data));
    }

  }, [])

  useEffect(() => {
      window.localStorage.setItem('CARDS', JSON.stringify(cards))
  }, [cards])

  return (
      <div className="app">
        <Header />
        <div className='screen'>
          <Bottombar currentPage={currentPage}/>
          <Routes>
            <Route>
            <Route path="/" element={<Home
            setCurrentPage={setCurrentPage}
            setCards={setCards}
            cards={cards}/>}/>
            </Route>
            <Route path="/favorites" element={<Favorites 
            setCurrentPage={setCurrentPage}
            setCards={setCards}
            cards={cards}
            />}>
            </Route>
            <Route path="/">
                <Route path=':key' element={<Details 
                setCurrentPage={setCurrentPage} cards={cards}/>}>
                </Route>
            </Route>
          </Routes>
        </div>
      </div>
  );
}

export default App;
