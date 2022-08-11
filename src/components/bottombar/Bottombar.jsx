import React from 'react'
import { Link } from 'react-router-dom'

const Bottombar = ({currentPage}) => {
  return (
    <div className='bottombar container__S'>
      <div className="bottombar__content  padding__sM padding__uS">
        <div className='bottombar__links df df__aic df__jcc'>
          <Link className={currentPage === 0 ? 'text active' : 'text'} to="/">HOME</Link>
          <Link className={currentPage === 1 ? 'text active' : 'text'} to="/favorites">FAVORITES</Link>
        </div>
      </div>

    </div>
  )
}

export default Bottombar