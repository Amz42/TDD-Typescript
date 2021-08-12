export let Ride : {
    distance: number,
    duration: number
};

export const FARE_PER_KM = 10;
export const FARE_PER_MINUTE = 1;
export const FIXED_FARE = 5;

export const fareCalculator = ({distance, duration}: typeof Ride) =>{
    // if(distance === 0) return 5;
    return (FARE_PER_KM * distance + FARE_PER_MINUTE * duration + FIXED_FARE);
};