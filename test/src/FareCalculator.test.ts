import { fareCalculator } from '../../src/FareCalculator';

describe("Fare Calculator Test", () => {
    it("should return total fare: distance = 10, duration = 20 => Fare = 125", () => {
        const fareCalculated: number = fareCalculator({
            distance:10,
            duration:20,
            typeOfRide: "STANDARD"
        });
        expect(fareCalculated).toEqual(125);
    })
});