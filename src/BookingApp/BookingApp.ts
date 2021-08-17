import {
    successfullyBookedMsg,
    seatNotAvailable,
    // bookingData,
    availableTimings,
    maxBookLimit,
    bookingDataType,
    availableDates,
    movieNotAvaiable,
    movieAvailable,
    movieType,
    movieUpdated
} from '../../constants/BookingApp/BookingApp';



export const bookMySeat = (
    currState: bookingDataType ,
    timing: availableTimings,
    seats: number,
    date: availableDates
) => {
    if(currState[date][timing].movieType === "NULL")
        return {
            currState,
            "response" : movieNotAvaiable
        }

    if(currState[date][timing].tickets + seats <= maxBookLimit){
        return {
            "currState" : {
                ...currState,
                [date] : {
                    ...currState[date],
                    [timing] : {
                        ...currState[date][timing],
                        tickets: currState[date][timing].tickets + seats
                    }
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



export const getMovieInfo = (
    currState: bookingDataType,
    date: availableDates,
    timing: availableTimings
) => {
    const {movieType, tickets} =  currState[date][timing];
    if(movieType !== "NULL"){
     
        // return { "response" : movieNotAvaiable}
        return {
            "response": movieAvailable,
            "movieName": movieType,
            "numberOfSeatsAvailabel": maxBookLimit - tickets
        };
    }
    
    throw new Error(movieNotAvaiable);
}

export const setMovieInfo = (
    currState: bookingDataType,
    date: availableDates,
    timing: availableTimings,
    updateMovie: movieType
) => {
    const {movieType, tickets} =  currState[date][timing];
    if(
        movieType === "NULL" || tickets === 0
    ) return {
        "currState" : {
            ...currState,
            [date] : {
                ...currState[date],
                [timing] : {
                    movieType: updateMovie,
                    tickets: 0
                }
            }
        },
        "response": movieUpdated
    }

    throw new Error("Tickets are already booked for this show");
}