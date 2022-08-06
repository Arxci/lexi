import { Favorite } from '@mui/icons-material';
import React, {useState, useEffect} from 'react'


const Card = ({ image, title, subtext, index, removeFavorite, addFavorite }) => {
    const [focus, setFocus] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    function toggleFavorite() {
        if (isFavorite) {
            removeFavorite(index)
        } else {
            addFavorite({'image': image, 'title': title, 'subtext': subtext, 'key': index})
        }
        setIsFavorite(!isFavorite);
    }
    
    function onFadeIn() {
        setFocus(true);
    }

    function onFadeOut() {
        setFocus(false);
    }

    useEffect(() => {

    }, [isFavorite])

  return (
    <button className={focus ? 'card focus' : 'card'}>
        <div className='card__top'>
            <img className='card__image' src={image} />
            <div className='card__imageBTN'>
                <a href='/'  onBlur={() => onFadeOut()} onFocus={() => onFadeIn()} onMouseEnter={() => onFadeIn()} onMouseLeave={() => onFadeOut()}>
                    LEARN MORE
                </a>
                <div className='card__heart' onClick={() => toggleFavorite()}>
                    <Favorite className={isFavorite ? "favorite red" : 'favorite'}/>
                </div>
            </div>
        </div>
        <div className='card__bottom padding__aM'>
            <div className='card__title padding__uS title'>
                {title}
            </div>
            <div className='card__subtext text'> 
                {subtext}
            </div>
        </div>
    </button>
  )
}

export default Card