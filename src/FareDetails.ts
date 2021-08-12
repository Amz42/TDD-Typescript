import { Ride } from "./FareCalculator";
import { calculateMonthlyFare } from './CalculateMonthlyFare';

export const getFareDetails = (rides: Ride[]) => {
    const totalFare = calculateMonthlyFare(rides);
    return {
        totalFare,
        numberOfRides: rides.length,
        avgFare: (rides.length === 0 ? 0 : totalFare / rides.length)
    };
}