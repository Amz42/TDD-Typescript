import { Ride, rates } from '../constants/RidesType';

export const fareCalculator = ({distance, duration, typeOfRide}: Ride) =>{
    // if(distance === 0) return 5;
    const {FARE_PER_KM, FARE_PER_MINUTE, FIXED_FARE} = rates[typeOfRide];
    return (FARE_PER_KM * distance + FARE_PER_MINUTE * duration + FIXED_FARE);
};