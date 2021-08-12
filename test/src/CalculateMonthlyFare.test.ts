import { calculateMonthlyFare } from '../../src/CalculateMonthlyFare';
import { Ride } from '../../constants/RidesType';

describe("Fare Calculator Test", () => {
    it("should return Total Monthly Fare", () => {
        const testcase: Ride[] = [
            {distance: 1, duration: 2, typeOfRide: "STANDARD"}, // 1*10 + 2*1 + 5 = 17
            {distance: 3, duration: 5, typeOfRide: "PREMIUM"} // 3*15 + 5*2 + 5 = 60
        ];
        const fareCalculated = calculateMonthlyFare(testcase);
        expect(fareCalculated).toEqual(77);
    })
});