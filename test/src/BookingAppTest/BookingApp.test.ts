import { successfullyBookedMsg, seatNotAvailable, bookingDataType, movieNotAvaiable, movieAvailable, movieUpdated } from '../../../constants/BookingApp/BookingApp';
import { bookMySeat, getMovieInfo, setMovieInfo } from '../../../src/BookingApp/BookingApp';

describe("Booking App Test", () => {
    const initialState: bookingDataType = {
        "DAY1" : {
            "NOON": { movieType: "movieA", tickets: 0 }, 
            "AFTERNOON": { movieType: "NULL", tickets: 0 }, 
            "EVENING": { movieType: "movieB", tickets: 0 },
            "NIGHT": { movieType: "movieB", tickets: 3 }
        },
        "DAY2" : {
            "NOON": { movieType: "movieA", tickets: 0 }, 
            "AFTERNOON": { movieType: "NULL", tickets: 0 }, 
            "EVENING": { movieType: "movieB", tickets: 0 },
            "NIGHT": { movieType: "movieB", tickets: 0 }
        },
        "DAY3" : {
            "NOON": { movieType: "movieA", tickets: 0 }, 
            "AFTERNOON": { movieType: "NULL", tickets: 0 }, 
            "EVENING": { movieType: "movieB", tickets: 3 },
            "NIGHT": { movieType: "movieB", tickets: 0 }
        }
    }

    it("should assert on the dummy output", () => {
        const result1 = bookMySeat(initialState, "NOON", 5, "DAY1");
        
        expect(result1).toEqual({
            "currState": {
                ...initialState,
                "DAY1" : {
                    ...initialState["DAY1"],
                    "NOON" : {
                        ...initialState["DAY1"]["NOON"],
                        tickets: 5
                    }
                }
            },
            "response": successfullyBookedMsg
        });
    })

    it("should assert on the dummy output", () => {
        const result1 = bookMySeat(initialState, "AFTERNOON", 3, "DAY1");
        
        expect(result1).toEqual({
            "currState": initialState,
            "response": movieNotAvaiable
        });
    })

    it("should assert on the dummy output", () => {
        const result1 = bookMySeat(initialState, "NIGHT", 3, "DAY1");
        
        expect(result1).toEqual({
            "currState": initialState,
            "response": seatNotAvailable
        });
    })

    

    it("DEBUG", () => {

        expect(() => getMovieInfo(initialState, "DAY3", "AFTERNOON")).
        toThrow(new Error(movieNotAvaiable));

        const result2 = getMovieInfo(initialState, "DAY3", "EVENING");
        
        expect(result2).toEqual({
            "response": movieAvailable,
            "movieName": "movieB",
            "numberOfSeatsAvailabel": 5 - 3
        });
    })

    it("Set Movie test", () => {
        expect(() => setMovieInfo(
            initialState,
            "DAY3",
            "EVENING",
            "movieA"
        )).toThrow("Tickets are already booked for this show");
    });

    it("Set Movie test 2", () => {
        const result = setMovieInfo(initialState, "DAY3", "AFTERNOON", "movieB");

        expect(result).toEqual({
            "currState" : {
                ...initialState,
                "DAY3" : {
                    ...initialState["DAY3"],
                    "AFTERNOON" : {
                        ...initialState["DAY3"]["AFTERNOON"],
                        movieType: "movieB",
                    }
                }
            },
            "response" : movieUpdated
        });
    });
})