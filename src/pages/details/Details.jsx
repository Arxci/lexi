import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = ({setCurrentPage, cards}) => {
    const [card, setCard] = useState(null)
    let {key} = useParams();

    useEffect(() => {
        setCurrentPage(3)
    }, [])

    useEffect(() => {
        console.log(cards)
        cards.forEach(card => {
            if (card.key === parseInt(key)) {
                setCard(card)
            }
        })
    }, [])

  return (
    <div className='details container__S'>
        {
            card && <div className='details__content '>
                <div className='details__image'>
                    <img src={card.image} alt='details'/>
                </div>
                <div className="details__text">
                    <div className='details__title'>
                        {card.title}
                    </div>
                    <div className='details__subtext'>
                        {card.subtext}
                    </div>
                    <div className='details__description'>
                        {card.description}
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default React.memo(Details)