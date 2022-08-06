import { Search } from '@mui/icons-material'
import React from 'react'

const Bottombar = () => {
  return (
    <div className='bottombar padding__sM padding__uS'>
        <div className='bottombar__search'>
            <form>
                <input className='bottombar__input padding__aS' placeholder='Search...'/>
            </form>
            <div className='bottombar__icon  padding__aS'>
                <Search/>
            </div>
        </div>
        <div className='bottombar__links df df__aic df__jcc'>
          <a className=' text' href="/">HOME</a>
          <a className=' text' href="/">FAVORITES</a>
        </div>
    </div>
  )
}

export default Bottombar