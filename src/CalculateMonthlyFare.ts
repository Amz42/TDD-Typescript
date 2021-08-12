import { fareCalculator } from './FareCalculator';
import { Ride } from '../constants/RidesType';

export const calculateMonthlyFare = (rides: Ride[]) => {
    return rides.reduce((total, ride) => total + fareCalculator(ride), 0);
}