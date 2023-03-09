import React, { useState } from 'react';
import resources from "./ressurser"

export default function Nav(){

    const handleButtonClick = (category) => {
        // Filter the resources array to get only the items in the selected category
        const categoryResources = resources.filter((resource) => resource.category.toLowerCase() === category.toLowerCase());
        
        // Set the state with the selected category resources
        setSelectedResources(categoryResources);
      };
      
      const [selectedResources, setSelectedResources] = useState([]);
      
    return(
          

        <div className='container'>
      <header>
        <h1>ressursarkiv</h1>
      </header>

      <nav>
        <button onClick={() => handleButtonClick("HTML")} className='Kategori'>
          <h2>HTML</h2>
        </button>
        <button onClick={() => handleButtonClick("CSS")} className='Kategori'>
          <h2>CSS</h2>
        </button>
        <button onClick={() => handleButtonClick("JavaScript")} className='Kategori'>
          <h2>JavaScript</h2>
        </button>

        <button onClick={() => handleButtonClick("React")} className='Kategori'>
          <h2>React</h2>
        </button>   
            
        <button onClick={() => handleButtonClick("Sanity and headless CMS")} className='Kategori'>
          <h2>Sanity of headless CMS</h2>
        </button>
      </nav>
        <main id="main">
            <h2></h2>
    </main> 
    </div>

    )
}