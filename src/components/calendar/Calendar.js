import React, { useState, Suspense } from 'react';
import Proptypes from 'prop-types'
import dateFns from 'date-fns';
import Month from './Month'
import Week from './Week'
import '../../styles/Calendar.scss'

const LazyDaysComponent = React.lazy(() => import('./Days'))

const setDateFromURL = (params) => {
  const { year, month } = params;
  let date = { year, month }
  let current = new Date()

  if (!year || isNaN(year)) {
    date.year = dateFns.getYear(current)
  } else {
    date.year = year
  }

  if (!month || isNaN(month)) {
    date.month = dateFns.getMonth(current)
  } else {
    date.month = month - 1
  }

  return new Date(date.year, date.month, dateFns.getDay(current))
}

const Calendar = ({ match }) => {
  const date = setDateFromURL(match.params)
  const [currentDate, setCurrentDate] = useState(date)

  return (
    <div className='calendar'>
      <Month
        updateMonth={setCurrentDate}
        currentDate={currentDate}
      />
      <Week />
      <Suspense fallback={<div className='logo-netflix'></div>}>
        <LazyDaysComponent currentDate={currentDate} />
      </Suspense>
    </div>
  );
}

Calendar.propTypes = {
  match: Proptypes.object
}

export default Calendar;
