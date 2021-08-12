export const fareCalculator = (distance: number, duration: number) =>{
    if(distance === 0) return 5;
    return (10 * distance + 1 * duration + 5);
};