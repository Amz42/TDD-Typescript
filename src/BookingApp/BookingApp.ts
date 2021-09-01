import {
    successfullyBookedMsg,
    seatNotAvailable,
    availableTimings,
    maxBookLimit,
    bookingDataType,
    availableDates,
    movieNotAvaiable,
    movieAvailable,
    movieType,
    movieUpdated,
    recommendMovieListDataType,
    movieIsInvalid,
    bookingTimingType
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
    if(movieType !== "NULL")
        return {
            "response": movieAvailable,
            "movieName": movieType,
            "numberOfSeatsAvailabel": maxBookLimit - tickets
        };
    
    throw new Error(movieNotAvaiable);
}




export const setMovieInfo = (
    currState: bookingDataType,
    date: availableDates,
    timing: availableTimings,
    updateMovie: movieType
) => {
    const {movieType, tickets} =  currState[date][timing];
    if(movieType === "NULL" || tickets === 0)
        return {
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
        };

    throw new Error("Tickets are already booked for this show");
}



export const recommendMovieList = (currState: bookingDataType, movieTypeName: movieType) => {

    if(movieTypeName === "NULL")
        throw new Error(movieIsInvalid);

    let result: recommendMovieListDataType = {
        movieType: movieTypeName,
        response: []
    };

    // Object.entries(currState as bookingDataType).forEach((day, index) => {
    //     const date = day[0];
    //     const data = Object.entries(date as bookingTimingType).filter(timing => {
    //         return timing[1].movieType === movieTypeName && timing[1].tickets != maxBookLimit;
    //     })

    //     result.response.push({
    //         date: day[1],
    //         // day: availableDates,
    //         // timing: availableTimings,
    //         // ticketsAvailable: number
    //     })
    // })
    
    let date: availableDates
    for(date in currState){

        let timing: availableTimings;
        for(timing in currState[date]){
            const {movieType, tickets} = currState[date]?.[timing];
            if(movieType === movieTypeName && tickets !== maxBookLimit){

                result.response.push({
                    day: date,
                    timing,
                    ticketsAvailable: maxBookLimit - tickets
                });
            }
        }

    }

    return result;
}




// export const recommendList = (
//     currState: bookingDataType,
//     date: availableDates,
//     timing: availableTimings
// ) => {

//     let valid: boolean = false;

//     let dates: availableDates
//     for(dates in currState){
//         if(date === dates) valid = true;
        
//         if(valid){

//         }
//     }

//     return { "response": movieNotAvaiable };
// };


