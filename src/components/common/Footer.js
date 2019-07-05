import React, { Fragment } from 'react';
import Proptypes from 'prop-types'
import '../../styles/Footer.scss'

const Footer = ({message = 'SEE WHAT\'S NEXT'}) => {
  return (
    <Fragment>
      <footer>
        <nav className='title'>
          <span>{message}</span>
        </nav>
      </footer>
    </Fragment>
  )
}

Footer.propTypes = {
  message: Proptypes.string
}

export default Footer
