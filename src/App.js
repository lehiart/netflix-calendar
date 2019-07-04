import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'

import './styles/App.scss'


function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <div className='calendar'>
          Calendar content
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
