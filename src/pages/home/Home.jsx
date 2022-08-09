import Card from "../../components/card/Card"
import React from 'react'
import { useEffect } from "react"

const Home = ({setCurrentPage, cards, setCards}) => {

  useEffect(() => {
    setCurrentPage(0)
  }, [])

  return (
    <div className="home container__S">
      <div className="home__content">
        {
          cards && cards.map((card) => (
            <Card key={card.key} card={card} cards={cards} setCards={setCards}/>
          ))
        }
      </div>
    </div>
  )
}

export default React.memo(Home);