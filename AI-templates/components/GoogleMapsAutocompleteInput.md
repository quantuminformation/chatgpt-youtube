Load the required api's via @googlemaps/js-api-loader 

The api key should use vite import.meta.env to load the VITE_API_KEY_GOOGLE_MAPS.

Create a component called GoogleMapsAutocompleteInput.tsx that uses google.maps.places.Autocomplete  component to allow the user to select from a list of place matches.


When a user selects a location from the autocomplete then log the lat long to the console

Use the React framework and typescript and avoid promises.


------------------
other things to try with custom inputs:

Only show this list after a minimum of 3 chars, with a 600ms debounce. 
