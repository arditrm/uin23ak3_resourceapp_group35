

import './App.css';

function App() {
  return (

<body>
    <div class="container">
    <header>
<h1>ressursarkiv</h1>
    </header>
    <nav>
        <button onclick="html()" class="Kategori">
            <h2>html</h2>
        </button>
        <button onclick="css()" class="Kategori">
            <h2>css</h2>
        </button>
        <button onclick="javascript()" class="Kategori">
            <h2>javascript</h2>
        </button>
        <button onclick="react()" class="Kategori">
            <h2>react</h2>
        </button>
        <button onclick="headless()" class="Kategori">
            <h2>sanity of headless cms</h2>
        </button>
    </nav>
    <main id="main">
        <h2></h2>
    </main>
</div>
      <script src="ressurser.js"></script>
</body>

  );
}

export default App;
