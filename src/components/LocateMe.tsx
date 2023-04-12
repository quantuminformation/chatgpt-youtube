import { useState, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { getGeoLocation } from '../lib/geoLocation';

type Location = {
    latitude: number;
    longitude: number;
};

const LocateMe = () => {
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [location, setLocation] = useState<Location | null>(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_API_KEY_GOOGLE_MAPS,
            version: 'weekly',
            libraries: ['places'],
        });

        loader.load().then(() => {
            getGeoLocation(true).then((location) => {
                setLocation(location);

                const center = new google.maps.LatLng(location.latitude, location.longitude);
                const mapOptions: google.maps.MapOptions = {
                    center: center,
                    zoom: 12,
                };
                const mapElement = document.getElementById('map');
                const map = new google.maps.Map(mapElement, mapOptions);

                new google.maps.Marker({
                    position: center,
                    map: map,
                });

                setMap(map);
            });
        });
    }, []);

    return (
        <div id="map" style={{ height: '100vh', width: '100%' }}>
            {map && (
                <div>
                    <h2>Your Location</h2>
                    <p>Latitude: {location?.latitude}</p>
                    <p>Longitude: {location?.longitude}</p>
                </div>
            )}
        </div>
    );
};

export default LocateMe;
