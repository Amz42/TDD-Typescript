import { fareCalculator } from '../../src/FareCalculator';

describe("Fare Calculator Test", () => {
    it("should return total fare: distance = 10, duration = 20 => Fare = 125", () => {
        const fareCalculated = fareCalculator(10, 20);
        expect(fareCalculated).toEqual(125);
    })

    it("should return total fare: distance = 6, duration = 10 => Fare = 75", () => {
        const fareCalculated = fareCalculator(6, 10);
        expect(fareCalculated).toEqual(75);
    })

    it("should return total fare: distance = 0, duration = 5 => Fare = 5", () => {
        const fareCalculated = fareCalculator(0, 5);
        expect(fareCalculated).toEqual(5);
    });
});