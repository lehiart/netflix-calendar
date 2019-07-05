import React, { useState, useEffect } from 'react';
import dateFns from 'date-fns';
import axios from 'axios'
import Modal, { useModal } from '../common/Modal';
import '../../styles/Calendar.scss'

const getCellClassname = (day, monthStart, selectedDate) => {
  let customClass = 'col cell '

  if (!dateFns.isSameMonth(day, monthStart)) {
    customClass += 'disabled'
  }

  if (dateFns.isSameDay(day, selectedDate)) {
    customClass += 'selected'
  }

  return customClass
}

const Daybox = ({ onDateClick, day, monthStart, selectedDate, dayEvents }) => {
  return (
    <div
      className={getCellClassname(day, monthStart, selectedDate)}
      key={day}
      onClick={() => onDateClick(day, dayEvents)}
    >
      <ul>{dayEvents.length ?
        dayEvents.map(event =>
          <li key={event.id} className='title'>
            <span>{event.title}</span>
          </li>)
        : null}
      </ul>
      <span className='number'>{dateFns.format(day, 'D')}</span>
    </div>
  )
}

function addEvents(day, events) {
  return events.filter(event => dateFns.isSameDay(day, event.date_released))
}

const DayCells = ({ currentDate }) => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedDayEvents, setSelectedDayEvents] = useState([])
  const {isShowing, toggle} = useModal();

  useEffect(() => {
    const getEvents = async () => {
      let response = await axios.get(`http://localhost:3000/api/events/${dateFns.getYear(currentDate)}/${dateFns.getMonth(currentDate) + 1}`)
      setEvents(response.data)
    }

    getEvents()
  }, [currentDate]);

  const monthStart = dateFns.startOfMonth(currentDate);
  const startDate = dateFns.startOfWeek(monthStart);

  let days = [];
  let day = startDate;
  let dayindex = 0

  const onDateClick = (day, events) => {
    setSelectedDayEvents(events)
    setSelectedDate(day);
    toggle();
  }

  // O(n) constant time
  while (dayindex < 35) {
    days.push(
      <Daybox
        key={`${day}-time`}
        onDateClick={onDateClick}
        dayEvents={addEvents(day, events)}
        day={day}
        monthStart={monthStart}
        selectedDate={selectedDate}
      />
    )

    dayindex++
    day = dateFns.addDays(day, 1);
  }

  return (
    <div className='body'>
      <div className='row'>
        {days}
      </div>
      <Modal
        date={selectedDate}
        events={selectedDayEvents}
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  )
}

export default DayCells
