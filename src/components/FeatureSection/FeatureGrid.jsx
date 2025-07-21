// src/FeatureGrid.js

import React from 'react';
import './FeatureGrid.css';

const FeatureGrid = ({
                       columnsData = [],
                       gap = '30px',
                       maxWidth,
                       equalHeight = false // Nasz przełącznik
                     }) => {
  const gridStyle = {
    '--grid-column-count': columnsData.length,
    '--grid-gap': gap,
    maxWidth: maxWidth || 'none',
  };

  const containerClasses = [
    "feature-grid-container",
    equalHeight ? "feature-grid-equal-height" : ""
  ].join(" ");

  // === NOWA, WARUNKOWA LOGIKA RENDEROWANIA ===
  if (equalHeight) {
    // Tryb "Równa Wysokość": renderujemy płaską siatkę
    const flatItems = columnsData.flat(); // Spłaszczamy tablicę [[a,b], [c,d]] do [a,b,c,d]
    return (
        <div className={containerClasses} style={gridStyle}>
          {flatItems.map((item, index) => (
              <div key={index} className="feature-grid-item">
                {item}
              </div>
          ))}
        </div>
    );
  }

  // Domyślny tryb: renderujemy kolumny, tak jak wcześniej (bezpieczne dla starych stron)
  return (
      <div className={containerClasses} style={gridStyle}>
        {columnsData.map((columnItems, columnIndex) => (
            <div key={columnIndex} className="feature-grid-column">
              {columnItems.map((item, itemIndex) => (
                  <div key={itemIndex} className="feature-grid-item">
                    {item}
                  </div>
              ))}
            </div>
        ))}
      </div>
  );
};

export default FeatureGrid;