import { Favorite } from '@mui/icons-material';
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const Card = ({ setCards, cards, card}) => {
    const [isFavorite, setIsFavorite] = useState(card.isFavorite);

    function toggleFavorite() {
        setIsFavorite(!isFavorite);
    }

    useEffect(() => {
        let newCards = [...cards]
        newCards.forEach((c) => {
            if (c.key === card.key) {
                c.isFavorite = isFavorite
                return
            }
        })
        setCards(newCards)
    }, [isFavorite])

  return (
    <div className='card'>
        <div className='card__top'>
            <img className='card__image' src={card.image} alt='card'/>
            <div className='card__imageBTN'>
                <Link to={'/' + card.key}>
                    LEARN MORE
                </Link>
                <div className='card__heart' onClick={() => toggleFavorite()}>
                    <Favorite className={isFavorite ? "favorite red" : 'favorite'}/>
                </div>
            </div>
        </div>
        <div className='card__bottom padding__aM'>
            <div className='card__title padding__uS title'>
                {card.title}
            </div>
            <div className='card__subtext text'> 
                {card.subtext}
            </div>
        </div>
    </div>
  )
}

export default React.memo(Card)