import React, { Fragment } from 'react'
import '../styles/Header.scss'

const AppHeader = () => {
    return (
      <Fragment>
        <header className='header'>
          <nav className='title'>
            <span>
              Netflix<b> Originals</b>
            </span>
          </nav>
        </header>
      </Fragment>
    )
  }
  
  export default AppHeader;
