import React, { useState } from 'react';
import dateFns, { format } from 'date-fns';

const Week = () => {
  const [currentDate] = useState(new Date())
  const days = [];

  let startDate = dateFns.startOfWeek(currentDate);

  for (let i = 0; i < 7; i++) {
    days.push(
      <div className='col col-center' key={`${i}-day`}>
        {format(dateFns.addDays(startDate, i), 'dddd')}
      </div>
    );
  }

  return <div className='days row'>{days}</div>;
}

export default Week
