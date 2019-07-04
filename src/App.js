import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Calendar from './components/calendar/Calendar'
import './styles/App.scss'

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <main>
          <Route path='/:year?/:month?' component={Calendar} />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
