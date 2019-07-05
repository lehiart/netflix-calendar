import React from 'react';
import Proptypes from 'prop-types'

export const EventCard = ({ event }) => {
  return (
    <div className='row event-container'>
      <div className='col col-4'>
        <img alt='cover' src={event.image_landscape} />
      </div>
      <div className='col col-6 event-details'>
        <span className='event-title'>{event.title}</span>
        <p>{event.category.split(' ')[0]}</p>
        <p><b>IMDB</b> {event.imdb ? event.imdb : 'N/A'}</p>
        <p>{event.description}</p>
      </div>
    </div>
  )
}

export const EmptyCard = ({message = 'Sorry, no events for this day'}) => {
  return (
    <div className='row event-container-empty'>
      <div className='col'>
        <span className='event-title'>{message}</span>
      </div>
    </div>
  )
}

EventCard.propTypes = {
  event: Proptypes.object
}

EmptyCard.propTypes = {
  message: Proptypes.string
}
