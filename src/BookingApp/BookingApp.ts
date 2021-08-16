import {
    successfullyBookedMsg,
    seatNotAvailable,
    // bookingData,
    availableTimings,
    maxBookLimit,
    bookingDataType,
    availableDates
} from '../../constants/BookingApp/BookingApp';

export const bookMySeat = (
    currState: bookingDataType ,
    timing: availableTimings,
    seats: number,
    date: availableDates
) => {
    if(currState[date][timing] + seats <= maxBookLimit){
        return {
            "currState" : {
                ...currState,
                [date] : {
                    ...currState[date],
                    [timing] : currState[date][timing] + seats
                }
                
            },
            "response": successfullyBookedMsg
        };
    }
    // throw new Error("Seat Not available");
    return {
        currState,
        "response" : seatNotAvailable
    }
}