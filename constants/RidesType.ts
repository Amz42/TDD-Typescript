export type rideType = "PREMIUM" | "STANDARD" | string;

export type Fare = {
    FARE_PER_KM: number,
    FARE_PER_MINUTE: number,
    FIXED_FARE: number
};

export type rideCharge = {
    [key in rideType] : Fare
};

export type Ride = {
    distance: number,
    duration: number,
    typeOfRide: string
};

export const rates: rideCharge = {
    STANDARD :{
        FARE_PER_KM : 10,
        FARE_PER_MINUTE: 1,
        FIXED_FARE: 5
    },
    PREMIUM :{
        FARE_PER_KM : 15,
        FARE_PER_MINUTE: 2,
        FIXED_FARE: 5
    },
}