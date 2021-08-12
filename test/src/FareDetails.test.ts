import { getFareDetails } from '../../src/FareDetails';
import { Ride } from '../../constants/RidesType';

describe("Fare Details", () => {
    it("sholud return Total Fare, Number of Rides, Average Fare per Ride", () => {
        const testcase: Ride[] = [
            {distance:10, duration:5, typeOfRide: "PREMIUM"}, // 15 * 10 + 2 * 5 + 5 = 165
            {distance:6, duration:8, typeOfRide: "STANDARD"}, // 10 * 6 + 1 * 8 + 5 = 73
            {distance:8, duration:2, typeOfRide: "PREMIUM"} // 15 * 8 + 2 * 2 + 5 = 129
        ];
        const fareDetails = getFareDetails(testcase);
        expect(fareDetails).toEqual({
            totalFare: 165 + 73 + 129,
            numberOfRides: 3,
            avgFare: (165 + 73 + 129) / 3
        });
    })

    it("sholud return Total Fare, Number of Rides, Average Fare per Ride", () => {
        const testcase: Ride[] = [];
        const fareDetails = getFareDetails(testcase);
        expect(fareDetails).toEqual({
            totalFare: 0,
            numberOfRides: 0,
            avgFare: 0
        });
    })
})