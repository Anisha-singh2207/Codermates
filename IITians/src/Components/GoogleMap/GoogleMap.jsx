// src/Components/GoogleMap/GoogleMap.jsx
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const location = {
    lat: 19.420509131670133,
    lng: 72.8151044242192,
};

const GoogleMapComponent = () => {
  const [selected, setSelected] = useState(false);

  return (
    <LoadScript googleMapsApiKey="AIzaSyA15b180cZFgXsQwNeKtSZNW0AvyBcphCg">
      <GoogleMap mapContainerStyle={containerStyle} center={location} zoom={15}>
        <Marker position={location} onClick={() => setSelected(true)} />

        {selected && (
          <InfoWindow position={location} onCloseClick={() => setSelected(false)}>
            <div>
              <h3>IITian's Academy</h3>
              <p>📍 Mumbai, Maharashtra, India</p>
              <p>⭐ Rating: 4.5</p>
              <p>📞 +91 7977903199</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
