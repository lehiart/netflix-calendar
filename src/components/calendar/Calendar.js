import React, { useState } from 'react';
import dateFns from 'date-fns';
import '../../styles/Calendar.scss'

const Month = ({ currentDate, updateMonth }) => {
    const nextMonth = () => {
      updateMonth(dateFns.addMonths(currentDate, 1))
    };
  
    const prevMonth = () => {
      updateMonth(dateFns.subMonths(currentDate, 1))
    };
  
    return (
      <div className='header row flex-middle'>
        <div className='col col-left'>
          <div className='icon' onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className='col col-center'>
          <span>{dateFns.format(currentDate, 'MMMM YYYY')}</span>
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

const Days = () => {
    return <div>Days</div>
}

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date())

    return (
        <div className='calendar'>
            <Month currentDate={currentDate} />
            <Week />
            <Days currentDate={currentDate}/>
        </div>
    )
}

export default Calendar
