import { calculateMonthlyFare } from '../../src/CalculateMonthlyFare';


describe("Fare Calculator Test", () => {
    it("should return Total Monthly Fare", () => {
        const testcase = [
            {distance: 1, duration: 2}, // 1*10 + 2*1 + 5 = 17
            {distance: 3, duration: 5} // 3*10 + 5*1 + 5 = 40
        ];
        const fareCalculated = calculateMonthlyFare(testcase);
        expect(fareCalculated).toEqual(57);
    })
});