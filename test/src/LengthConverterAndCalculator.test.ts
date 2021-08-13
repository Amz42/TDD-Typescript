import { addLengths } from '../../src/LengthConverterAndCalculator';
import { lenType } from '../../constants/LengthType';

describe("Length Converter & Calculator test", () => {
    it("Add 10cm to 2m", () => {
        const result: number = addLengths(
            { UNIT: lenType.CENTIMETER, MAGNITUDE: 10},
            { UNIT: lenType.METER, MAGNITUDE: 2},
        );
        expect(result).toEqual(210);
    })
    it("Add 23mm to 56cm", () => {
        const result: number = addLengths(
            { UNIT: lenType.MILIMETER, MAGNITUDE: 23},
            { UNIT: lenType.CENTIMETER, MAGNITUDE: 56}
        );
        expect(result).toEqual(583);
    })
    it("Add 6m to 9mm", () => {
        const result: number = addLengths(
            { UNIT: lenType.METER, MAGNITUDE: 6},
            { UNIT: lenType.MILIMETER, MAGNITUDE: 9}
        );
        expect(result).toEqual(6.009);
    })
})