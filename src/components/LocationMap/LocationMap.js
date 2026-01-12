// src/components/LocationMap/LocationMap.js

import React from 'react';
import { Box, Button, Typography, Paper } from '@mui/material';
import { TbMapPin } from 'react-icons/tb';
// Import the context we will create in App.js
import { CookieConsentContext } from '../../App';

const LocationMap = () => {
  // Use the context to get the consent status and the function to grant it
  const { consent, grantConsent } = React.useContext(CookieConsentContext);

  // The original iframe code
  const mapEmbedCode = (
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20450.00561116209!2d15.502885112017864!3d51.9396942046397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470613d112f7ddcb%3A0x6615e563e708793!2sApexim%20Bis%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1752148514064!5m2!1spl!2spl"
          width="100%"
          height="600"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Company Location Map"
      ></iframe>
  );

  // If consent is granted, show the map
  if (consent === 'granted') {
    return (
        <Paper elevation={6} sx={{ height: '600px', borderRadius: '8px' }}>
          {mapEmbedCode}
        </Paper>
    );
  }

  // Otherwise, show this placeholder
  return (
      <Paper
          elevation={6}
          sx={{
            height: '600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            p: 3,
            borderRadius: '8px'
          }}
      >
        <TbMapPin size="4rem" color="grey" />
        <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
          Mapa jest ukryta ze względu na ustawienia prywatności.
        </Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Aby wyświetlić mapę Google, musisz zaakceptować pliki cookie.
        </Typography>
        <Button variant="contained" onClick={grantConsent}>
          Akceptuj i pokaż mapę
        </Button>
      </Paper>
  );
};

export default LocationMap;