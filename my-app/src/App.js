//import './App.css';
import './css/main.css';
/*import Javascript from './componets/Javascript';
import Css from './componets/Css';
import Html from './componets/Html';
import React from './componets/React';
import Sanity from './componets/Sanity';*/


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
