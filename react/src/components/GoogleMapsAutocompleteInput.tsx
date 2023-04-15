import React, { useRef, useEffect } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

type GoogleMapsAutocompleteInputProps = {
    onPlaceSelected: (lat: number, lng: number) => void;
};

const GoogleMapsAutocompleteInput: React.FC<GoogleMapsAutocompleteInputProps> = ({
                                                                                     onPlaceSelected,
                                                                                 }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

    useEffect(() => {
        const loader = new Loader({
            apiKey: import.meta.env.VITE_API_KEY_GOOGLE_MAPS,
            libraries: ['places'],
        });

        loader.load().then(() => {
            if (inputRef.current) {
                autocompleteRef.current = new google.maps.places.Autocomplete(
                    inputRef.current
                );

                autocompleteRef.current.addListener('place_changed', () => {
                    const place = autocompleteRef.current?.getPlace();

                    if (place && place.geometry) {
                        const lat = place.geometry.location.lat();
                        const lng = place.geometry.location.lng();
                        onPlaceSelected(lat, lng);
                    }
                });
            }
        });
    }, [onPlaceSelected]);

    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    );
};

export default GoogleMapsAutocompleteInput;
