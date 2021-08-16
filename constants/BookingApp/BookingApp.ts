export const successfullyBookedMsg = "Yay! your seat is booked";
export const seatNotAvailable = "Sorry! Seat not available";

export type availableDates = "DAY1" | "DAY2" | "DAY3";
export type availableTimings = "NOON" | "AFTERNOON" | "EVENING" | "NIGHT";
export const maxBookLimit: number = 5;

export type bookingDataType = {
    [key in availableDates] : {
        [key in availableTimings]: number
    }
}