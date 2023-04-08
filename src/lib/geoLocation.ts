type Location = { lat: number, long: number };

export async function getGeoLocation(): Promise<Location> {
    try {
        console.log("Attempting to get user's location using navigator.geolocation.getCurrentPosition");
        const position = await new Promise<Position>((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject)
        );
        const { latitude: lat, longitude: long } = position.coords;
        console.log(`User's location is (${lat}, ${long})`);
        return { lat, long };
    } catch (error) {
        console.error("Failed to get user's location using navigator.geolocation.getCurrentPosition", error);
        console.log("Attempting to get user's location using a free webservice based on their IP address");
        const apiKey = import.meta.env.VITE_API_KEY_IP_GEOLOCATION;
        const response = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${apiKey}`);
        if (!response.ok) {
            throw new Error(`Failed to get user's location using the free webservice`);
        }
        const data = await response.json();
        const { latitude: lat, longitude: long } = data;
        console.log(`User's location is (${lat}, ${long})`);
        return { lat, long };
    }
}
