import React from "./React"
import { Link } from "react-router-dom";
import resources from "./ressurser"

export default function Nav(){
    return(
          
        
        <div className='container'>
        <header>
    <h1>ressursarkiv</h1>
        </header>

       <nav>
            <button onClick="html()" className='Kategori'>
                <h2>html</h2>
            </button>
            <button onClick="css()" className='Kategori'>
                <h2>css</h2>
            </button>
            <button onClick="javascript()" className='Kategori'>
                <h2>javascript</h2>
            </button>

            <button onClick="react()" className='Kategori'>
                <h2>react</h2>

            </button>   
            
            <button onClick="headless()" className='Kategori'>

                <h2>sanity of headless cms</h2>
            </button>
        </nav>
        <main id="main">
            <h2></h2>
    </main> 
    </div>
    )
}