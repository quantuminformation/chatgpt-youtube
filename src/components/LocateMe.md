Draw a Google Map using the latest version of the Google Maps API and loaded with the bootstrap loader. Use the google.maps.Map types. Use minimal dependencies. Do not load the script in the <head>

The API key should use vite import.meta to load the VITE_API_KEY_GOOGLE_MAPS.

Create the above in TSX React component called LocateMe.tsx. that uses the getGeoLocation(true) function (stored in ../lib/geoLocation.ts), to display the user's location in a Google map. Use the minimum useEffects as possible.

getGeoLocation() returns:
type Location = {
latitude: number;
longitude: number;
};

The app runs in strict mode