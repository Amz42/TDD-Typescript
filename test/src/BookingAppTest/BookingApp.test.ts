import { successfullyBookedMsg, seatNotAvailable, bookingDataType } from '../../../constants/BookingApp/BookingApp';
import { bookMySeat } from '../../../src/BookingApp/BookingApp';

describe("Booking App Test", () => {
    const initialState: bookingDataType = {
        "DAY1" : {"NOON": 0, "AFTERNOON": 0, "EVENING": 0, "NIGHT": 0},
        "DAY2" : {"NOON": 0, "AFTERNOON": 0, "EVENING": 0, "NIGHT": 0},
        "DAY3" : {"NOON": 0, "AFTERNOON": 0, "EVENING": 0, "NIGHT": 0}
    }

    it("should assert on the dummy output", () => {
        const result1 = bookMySeat(
            initialState,
            "AFTERNOON", // timing
            5, // seats
            "DAY1" // day
        );
        
        expect(result1).toEqual({
            "currState": {
                ...initialState,
                "DAY1" : {
                    ...initialState["DAY1"],
                    "AFTERNOON" : 5
                }
            },
            "response": successfullyBookedMsg
        });
    })
})