import React from 'react';
import GoogleMapsAutocompleteInput from '~/components/GoogleMapsAutocompleteInput';

interface AppProps {}

//log lat long
function onSelected(lat, long) {
  console.log(lat);
  console.log(long);
}

export const App: React.FC<AppProps> = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: '#f2f2f2',
      }}>
      <h1
        style={{
          fontSize: '3rem',
          fontWeight: 600,
          color: '#333',
        }}>
        Hello, World!
      </h1>
      <GoogleMapsAutocompleteInput onPlaceSelected={onSelected} />
    </div>
  );
};
