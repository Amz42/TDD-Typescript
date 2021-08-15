import { quantity } from '../../constants/QuantityType';
import { addQuantities } from '../../src/QuantityConverterAndCalculator';

describe("Operations on quantities", () => {
    it("Add 10cm to 2m", () => {
        const quantity1: quantity = {
            magnitude: 10,
            qtype: "LENGTH",
            qunit: "CENTIMETER"
        };
        const quantity2: quantity = {
            magnitude: 2,
            qtype: "LENGTH",
            qunit: "METER"
        };
        const result: number = addQuantities(quantity1, quantity2);
        expect(result).toEqual(210);
    })

    it("Add 50 KG to 200 Gram", () => {
        const quantity1: quantity = {
            magnitude: 50,
            qtype: "WEIGHT",
            qunit: "KG"
        };
        const quantity2: quantity = {
            magnitude: 200,
            qtype: "WEIGHT",
            qunit: "GRAM"
        };
        const result: number = addQuantities(quantity1, quantity2);
        expect(result).toEqual(50.2);
    })

    it("Add 45.39 Pounds to 950 Gram", () => {
        const quantity1: quantity = {
            magnitude: 45.39,
            qtype: "WEIGHT",
            qunit: "POUND"
        };
        const quantity2: quantity = {
            magnitude: 950,
            qtype: "WEIGHT",
            qunit: "GRAM"
        };
        const result: number = addQuantities(quantity1, quantity2);
        expect(result).toEqual(47.48439319917459);
    })

    it("Add 67 Kgs to 150 Pounds", () => {
        const quantity1: quantity = {
            magnitude: 67,
            qtype: "WEIGHT",
            qunit: "KG"
        };
        const quantity2: quantity = {
            magnitude: 150,
            qtype: "WEIGHT",
            qunit: "POUND"
        };
        const result: number = addQuantities(quantity1, quantity2);
        expect(result).toEqual(135.0388);
    })
});