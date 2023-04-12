import { useState, useEffect } from "react";
import { getGeoLocation } from "../lib/geoLocation";

declare global {
    interface Window {
        initMap: () => void;
    }
}

const LocateMe = () => {
    const [map, setMap] = useState<google.maps.Map>();

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_API_KEY_GOOGLE_MAPS}&callback=initMap`;
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        window.initMap = () => {
            getGeoLocation(true).then(({ latitude, longitude }) => {
                const map = new google.maps.Map(document.getElementById("map")!, {
                    center: { lat: latitude, lng: longitude },
                    zoom: 8,
                });

                const marker = new google.maps.Marker({
                    position: { lat: latitude, lng: longitude },
                    map,
                });

                setMap(map);
            });
        };

        return () => {
            delete window.initMap;
            document.body.removeChild(script);
        };
    }, []);

    return <div id="map" style={{ height: "100vh" }} />;
};

export default LocateMe;
