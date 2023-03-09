import React, { useState } from "react";

import resources from "./ressurser"

export default function Nav() {
  const [selectedResources, setSelectedResources] = useState([]);

  const handleButtonClick = (category) => {
    const categoryResources = resources.filter((resource) => resource.category.toLowerCase() === category.toLowerCase());
    setSelectedResources(categoryResources);
  };

  return (
    <div className="container">
      <header>
        <h1>ressursarkiv</h1>
      </header>

      <nav>
        <button onClick={() => handleButtonClick("HTML")} className="Kategori">
          <h2>HTML</h2>
        </button>
        <button onClick={() => handleButtonClick("CSS")} className="Kategori">
          <h2>CSS</h2>
        </button>
        <button onClick={() => handleButtonClick("JavaScript")} className="Kategori">
          <h2>JavaScript</h2>
        </button>

        <button onClick={() => handleButtonClick("React")} className="Kategori">
          <h2>React</h2>
        </button>

        <button onClick={() => handleButtonClick("Sanity and headless CMS")} className="Kategori">
          <h2>Sanity of headless CMS</h2>
        </button>
      </nav>

      <main id="main">
        {selectedResources.map((resource, index) => (
          <div key={index}>
            <h3>{resource.category}</h3>
            <p>{resource.text}</p>
            <ul>
              {resource.sources.map((source, index) => (
                <li key={index}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
}