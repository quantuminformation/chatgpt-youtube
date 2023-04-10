export async function getGeoLocation(privacy: boolean): Promise<{ latitude: number; longitude: number }> {
  let latitude: number;
  let longitude: number;

  try {
    // Try to get user's current location using the geolocation API
    const { coords } = await new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    latitude = coords.latitude;
    longitude = coords.longitude;
    console.log('Got user location using geolocation API:', { latitude, longitude });
  } catch (error) {
    // If unable to get user's location using the geolocation API, use free IP geolocation API
    console.error('Failed to get user location using geolocation API:', error);
    const apiKey = import.meta.env.VITE_API_KEY_IP_GEOLOCATION;
    const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}&fields=latitude,longitude`;
    const response = await fetch(url, { mode: 'cors' });
    const data = await response.json();
    latitude = data.latitude;
    longitude = data.longitude;
    console.log('Got user location using IP geolocation API:', { latitude, longitude });
  }

  if (privacy) {
    // Round latitude and longitude to nearest 10 if privacy is enabled
    latitude = Math.round(latitude / 10) * 10;
    longitude = Math.round(longitude / 10) * 10;
    console.log('Rounded latitude and longitude to nearest 10:', { latitude, longitude });
  }

  return { latitude, longitude };
}
