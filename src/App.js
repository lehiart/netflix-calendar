import React from 'react';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Calendar from './components/calendar/Calendar'

import './styles/App.scss'


function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <Calendar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
