import React from 'react';
import Proptypes from 'prop-types'
import { subMonths, addMonths, format } from 'date-fns';


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

Month.propTypes = {
  currentDate: Proptypes.object,
  updateMonth: Proptypes.func
}

export default Month
