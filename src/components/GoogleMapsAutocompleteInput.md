Create a named export input component called GoogleMapsAutocompleteInput.tsx that uses the Google Maps API to populate the inputs datalist with matches to the user's input.

The API key should use vite import.meta to load the VITE_API_KEY_GOOGLE_MAPS.

On selecting a new place, the component calls the updateLocation reducer contained in ../reducers/maps.ts