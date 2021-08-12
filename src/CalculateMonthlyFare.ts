import { fareCalculator, Ride } from './FareCalculator';


export const CalculateMonthlyFare = (rides: typeof Ride[]) => {
    return rides.reduce((total, ride) => total + fareCalculator(ride), 0);
}