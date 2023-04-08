Export a typed async function called getGeoLocation that returns the users latitude and longitude.

It should use the navigator.geolocation.getCurrentPosition API to get the user's current location.

If the user's location cannot be determined, it should use a free webservice to get the user's location based on their IP address. It should have an open CORS policy. The api key is loaded by vite and is called VITE_API_KEY_IP_GEOLOCATION.

Log each significant step in the process to the console.
