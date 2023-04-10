Export a named typed async function called getGeoLocation that returns the users latitude and longitude.

It should use the navigator.geolocation.getCurrentPosition API to get the user's current location.

If the user's location cannot be determined, it should use a free webservice to get the user's location based on their IP address. 

It should have an open CORS policy. 

The api key is loaded by vite and is called VITE_API_KEY_IP_GEOLOCATION.

The function should take a privacy parameter that is a boolean. If the privacy parameter is true, the function should round the latitude and longitude to the nearest 10.

Log each significant step of the function to the console, but do not log the latitude and longitude.
