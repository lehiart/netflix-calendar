import React from 'react';
import './styles/App.scss'


function App() {
  return (
    <div className='App'>
      <header className='header'>
        <nav className='title'>
          <span>
            Netflix<b> Originals</b>
          </span>
        </nav>
      </header>
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
