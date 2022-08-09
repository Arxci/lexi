import { Search } from '@mui/icons-material'
import React from 'react'

const Bottombar = ({currentPage}) => {
  return (
    <div className='bottombar container__S'>
      <div className="bottombar__content  padding__sM padding__uS">
        <div className='bottombar__search'>
          <form>
              <input className='bottombar__input padding__aS' placeholder='Search...'/>
          </form>
          <div className='bottombar__icon padding__aS'>
              <Search/>
          </div>
        </div>
        <div className='bottombar__links df df__aic df__jcc'>
          <a className={currentPage === 0 ? 'text active' : 'text'} href="/">HOME</a>
          <a className={currentPage === 1 ? 'text active' : 'text'} href="/favorites">FAVORITES</a>
        </div>
      </div>

    </div>
  )
}

export default Bottombar