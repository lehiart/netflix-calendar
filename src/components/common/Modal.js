import React, { useState, useEffect, useRef, Fragment } from 'react';
import ReactDOM from 'react-dom';
import dateFns from 'date-fns'
import '../../styles/Modal.scss'

export const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

const EventCard = ({event}) => {
  console.log(event)
  return (
    <div>{event.title}</div>
  )
}

const ModalContainer = ({ events, date, hide, isShowing }) => {
  const [isShow, setIsShow] = useState(false)
  const [animationType, setAnimationType] = useState('leave')
  const modalRef = useRef(null)

  useEffect(() => {
    if (isShowing) {
      setIsShow(true)
      setAnimationType('enter')
    } else {
      setIsShow(false)
      setAnimationType('leave')
    }
  }, [isShowing])

  const animationEnd = () => {
    if (animationType === 'leave') {
      setIsShow(false)
    }
    modalRef.current.focus()
  }

  const onKeyUp = event => {
    if (event.keyCode === 27) {
      hide();
    }
  }

  const style = {
    display: isShow ? '' : 'none',
    animationDuration: '800ms',
    WebkitAnimationDuration: '800ms'
  }

  const bodyStyle = {
    animationDuration: '800ms',
    WebkitAnimationDuration: '800ms'
  };

  return (
    <Fragment>
      <div
        style={style}
        className={`modal modal-fade-${animationType}`}
        ref={modalRef}
        onKeyUp={onKeyUp}
        tabIndex='-1'
        onAnimationEnd={animationEnd}>
        <div className='modal-mask' onClick={hide}></div>
        <div style={bodyStyle} className={`modal-dialog modal-zoom-${animationType}`}>
          <header className='modal-header'>
            <div>{dateFns.format(date, 'ddd - D MMMM YYYY')}</div>
            <div className='modal-close' onClick={hide}>
              <div className='icon'>close</div>
            </div>
          </header>
          <div className='modal-body'>
            { events.map(event => <EventCard key={event.id} event={event} />)}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

const Modal = (props) => {
  return props.isShowing ? ReactDOM.createPortal(<ModalContainer {...props} />, document.getElementById('portal')) : null;
}

export default Modal;
