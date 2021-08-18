export const successfullyBookedMsg = "Yay! your seat is booked";
export const seatNotAvailable = "Sorry! Seat not available";
export const movieNotAvaiable = "No movie available";
export const movieAvailable = "Movie is available";
export const movieUpdated = "Movie updated successfully";
export const movieIsInvalid = "Movie is invalid";

export type availableDates = "DAY1" | "DAY2" | "DAY3";
export type availableTimings = "NOON" | "AFTERNOON" | "EVENING" | "NIGHT";
export type movieType = "movieA" | "movieB" | "NULL";
export const maxBookLimit: number = 5;

export type bookingDataType = {
    [key in availableDates] : {
        [key in availableTimings]: {
            movieType: movieType,
            tickets: number
        }
    }
}

export type recommendMovieDataType = {
    day: availableDates,
    timing: availableTimings,
    ticketsAvailable: number
};

export type recommendMovieListDataType = {
    movieType: movieType,
    response: recommendMovieDataType[]
};