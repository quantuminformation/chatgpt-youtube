import React, { useState } from "react";
import ReactDOM from "react-dom";
import { LoadScript, GoogleMap, Autocomplete } from "@react-google-maps/api";

interface GoogleMapsAutocompleteInputProps {
    apiKey: string;
    onPlaceSelect: (place: google.maps.places.PlaceResult) => void;
}

const GoogleMapsAutocompleteInput = ({
                                         apiKey,
                                         onPlaceSelect,
                                     }: GoogleMapsAutocompleteInputProps) => {
    const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete>();
    const [inputValue, setInputValue] = useState("");

    const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
        setAutocomplete(autocomplete);
    };

    const onPlaceChanged = () => {
        const place = autocomplete?.getPlace();
        onPlaceSelect(place);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <LoadScript googleMapsApiKey={apiKey}>
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <input
                    type="text"
                    placeholder="Enter a location"
                    value={inputValue}
                    onChange={handleInputChange}
                    list="places"
                />
                <datalist id="places">
                    {inputValue &&
                        autocomplete &&
                        autocomplete.getPlacePredictions({ input: inputValue }, (predictions) =>
                            predictions.map((prediction) => (
                                <option key={prediction.id} value={prediction.description} />
                            ))
                        )}
                </datalist>
            </Autocomplete>
        </LoadScript>
    );
};

export default GoogleMapsAutocompleteInput;
