import { getFareDetails } from '../../src/FareDetails';

describe("Fare Details", () => {
    it("sholud return Total Fare, Number of Rides, Average Fare per Ride", () => {
        const testcase = [
            {distance:10, duration:5}, // 10 * 10 + 1 * 5 + 5 = 110
            {distance:6, duration:8}, // 10 * 6 + 1 * 8 + 5 = 73
            {distance:8, duration:2} // 10 * 8 + 1 * 2 + 5 = 87
        ];
        const fareDetails = getFareDetails(testcase);
        expect(fareDetails).toEqual({
            totalFare: 110 + 73 + 87,
            numberOfRides: 3,
            avgFare: (110 + 73 + 87) / 3
        });
    })

    it("sholud return Total Fare, Number of Rides, Average Fare per Ride", () => {
        const testcase = [];
        const fareDetails = getFareDetails(testcase);
        expect(fareDetails).toEqual({
            totalFare: 0,
            numberOfRides: 0,
            avgFare: 0
        });
    })
})