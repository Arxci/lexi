import React from 'react'

const Card = ({ image, title, subtext }) => {
  return (
    <div className='card'>
        <div className='card__top'>
            <img className='card__image' src={image} />
            <div className='card__imageBTN'>
                <a href='/'>
                    LEARN MORE
                </a>
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
    </div>
  )
}

export default Card