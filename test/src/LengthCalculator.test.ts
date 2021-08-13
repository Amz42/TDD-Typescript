import { lengthCalculator } from '../../src/LengthCalculator';

describe("Length Calculator", () => {
    it("should return sum of lengths", () => {
        const result: number = lengthCalculator(4 , 5);
        expect(result).toEqual(9);
    })
    it("should return sum of lengths", () => {
        const result: number = lengthCalculator(0 , 0);
        expect(result).toEqual(0);
    })
    it("should return sum of lengths", () => {
        const result: number = lengthCalculator(0 , 1);
        expect(result).toEqual(1);
    })
    it("should return sum of lengths", () => {
        const result: number = lengthCalculator(125 , 110);
        expect(result).toEqual(235);
    })
});