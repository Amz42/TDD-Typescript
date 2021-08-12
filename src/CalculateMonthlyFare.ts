import { fareCalculator, Ride } from './FareCalculator';


export const calculateMonthlyFare = (rides: Ride[]) => {
    return rides.reduce((total, ride) => total + fareCalculator(ride), 0);
}