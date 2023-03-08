import './App.css';
import Javascript from './components/Javascript';
import Css from './components/Css';
import Html from './components/Html';
import React from './components/React';
import Sanity from './components/Sanity';
function App() {
  return (

      
    <body>
        <div className='container'>
        <header>
    <h1>ressursarkiv</h1>
        </header>
        <nav>
            <button onclick="html()" className='Kategori'>
                <h2>html</h2>
            </button>
            <button onclick="css()" className='Kategori'>
                <h2>css</h2>
            </button>
            <button onclick="javascript()" className='Kategori'>
                <h2>javascript</h2>
            </button>
            <button onclick="react()" className='Kategori'>
                <h2>react</h2>
            </button>
            <button onclick="headless()" className='Kategori'>
                <h2>sanity of headless cms</h2>
            </button>
        </nav>
        <main id="main">
            <h2></h2>
        </main>
    </div>
    </body>
  );
}

export default App;
