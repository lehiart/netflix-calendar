import React from 'react';
import Header from './components/Header'
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
      <footer>
        <nav className='title'>
          <span>SEE WHAT'S NEXT</span>
        </nav>
      </footer>
    </div>
  );
}

export default App;
