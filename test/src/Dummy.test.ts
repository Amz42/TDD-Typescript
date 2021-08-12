import { dummyOutput, primeCollector, stoneGame } from '../../src/Dummy'

describe("Dummy Test", () => {
    it("should assert on the dummy output", () => {
        const dummyOutputReturned = dummyOutput("hello")
        expect(dummyOutputReturned).toBe("hellohello")
    })
})

describe("Prime Number Test", () => {
    it("should print prime factors of the given number", () => {
        const dummyOutputReturned = primeCollector(24);
        expect(dummyOutputReturned).toEqual([2,2,2,3]);
    })
    it("should print prime factors of the given number", () => {
        const dummyOutputReturned = primeCollector(36);
        expect(dummyOutputReturned).toEqual([2,2,3,3]);
        const dummyOutputReturned2 = primeCollector(1);
        expect(dummyOutputReturned2).toEqual([]);
    })
    it("should print prime factors of the given number", () => {
        const dummyOutputReturned = primeCollector(11);
        expect(dummyOutputReturned).toEqual([11]);
    })
})

describe("StoneGame test", () => {
    it("should output StoneGame answer", () => {
        const dummyOutputReturned = stoneGame(5, [1,5,4,3,2]);
        expect(dummyOutputReturned).toEqual(2);
    })
})