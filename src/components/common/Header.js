import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import '../../styles/Header.scss'

const ResetButton = withRouter(({ history }) => (
  <div role='img' alt='Today'
    className='reset-btn'
    onClick={() => {
      history.push('/')
      window.location.reload()
    }}>
    <div className='icon'>
      today
    </div>
  </div>
))

const AppHeader = () => {
  return (
    <Fragment>
      <header className='header'>
        <nav className='title'>
          <ResetButton />
          <span>
            Netflix<b> Originals</b>
          </span>
        </nav>
      </header>
    </Fragment>
  )
}

export default AppHeader;
