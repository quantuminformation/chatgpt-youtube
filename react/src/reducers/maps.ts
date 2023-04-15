interface MapsState {
    location: {
        lat: number;
        lng: number;
    };
}

const initialState: MapsState = {
    location: {
        lat: 0,
        lng: 0,
    },
};

export const updateLocation = (location: { lat: number; lng: number }) => ({
    type: "UPDATE_LOCATION",
    payload: location,
});

export const mapsReducer = (
    state: MapsState = initialState,
    action: { type: string; payload: any }
) => {
    switch (action.type) {
        case "UPDATE_LOCATION":
            return { ...state, location: action.payload };
        default:
            return state;
    }
};
