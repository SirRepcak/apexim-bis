// LocationMap.js
import React from 'react';

const LocationMap = () => {
  // This is the iframe code you copied from Google Maps.
  // IMPORTANT: We need to convert it to JSX syntax:
  // 1. `style="border:0;"` becomes `style={{ border: 0 }}`
  // 2. `allowfullscreen` becomes `allowFullScreen` (camelCase)
  const mapEmbedCode = (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20450.00561116209!2d15.502885112017864!3d51.9396942046397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470613d112f7ddcb%3A0x6615e563e708793!2sApexim%20Bis%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1752148514064!5m2!1spl!2spl"
      width="100%" // We'll control size with CSS for responsiveness
      height="600" // A good default height
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Company Location Map" // Good for accessibility
    ></iframe>
  );

  return (
    <div className="map-container">
      {mapEmbedCode}
    </div>
  );
};

export default LocationMap;