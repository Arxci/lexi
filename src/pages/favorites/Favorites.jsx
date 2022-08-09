import React, { useEffect } from 'react'
import Card from "../../components/card/Card"

const Favorites = ({setCurrentPage, setCards, cards}) => {

  useEffect(() => {
    setCurrentPage(1) 
  }, [])

  return (
    <div className='favorites container__S'>
        <div className="favorites__content">
            {
              cards && cards.map((card) => {
                return (
                  card.isFavorite === true && <Card key={card.key} card={card} cards={cards} setCards={setCards}/>
                )
              })
            }
        </div>
    </div>
  )
}

export default React.memo(Favorites);