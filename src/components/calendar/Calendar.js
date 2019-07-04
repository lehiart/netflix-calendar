import React, { useState, Suspense } from 'react';
import dateFns, { subMonths, addMonths, format } from 'date-fns';
import '../../styles/Calendar.scss'

const LazyDaysComponent = React.lazy(() => import('./Days'))

const Month = ({ currentDate, updateMonth }) => {
  const nextMonth = () => {
    updateMonth(addMonths(currentDate, 1))
  };

  const prevMonth = () => {
    updateMonth(subMonths(currentDate, 1))
  };

  return (
    <div className='header row flex-middle'>
      <div className='col col-left'>
        <div className='icon' onClick={prevMonth}>
          chevron_left
        </div>
      </div>
      <div className='col col-center'>
        <span>{format(currentDate, 'MMMM YYYY')}</span>
      </div>
      <div className='col col-right' onClick={nextMonth}>
        <div className='icon'>chevron_right</div>
      </div>
    </div>
  );
}

const Week = () => {
  const [currentDate] = useState(new Date())
  const days = [];

  let startDate = dateFns.startOfWeek(currentDate);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className='col col-center' key={`${i}-day`}>
        {dateFns.format(dateFns.addDays(startDate, i), 'dddd')}
      </div>
    );
  }

  return <div className='days row'>{days}</div>;
}

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

export default Calendar;
