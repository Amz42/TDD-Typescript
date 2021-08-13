import { len, lenType, scale } from '../constants/LengthType';
import { lengthCalculator } from './LengthCalculator';

export const meterToCentimeter = (givenLength: number) => givenLength * 100;
export const meterToMilimeter = (givenLength: number) => givenLength * 100 * 10;
export const centimeterToMilimeter = (givenLength: number) => givenLength * 10;
export const centimeterToMeter = (givenLength: number) => givenLength / 100;
export const milimeterToMeter = (givenLength: number) => (givenLength / 10) / 100;
export const milimeterToCentimeter = (givenLength: number) => givenLength / 10;


export const convert = (length1: len, length2: len) => {
    return (length2.MAGNITUDE * scale[length2.UNIT]) / scale[length1.UNIT];
}
export const addLengths = (length1: len, length2: len) => {

    // return lengthCalculator(length1.MAGNITUDE, convert(length1, length2));

    /* */
    if(length1.UNIT === length2.UNIT)
        return lengthCalculator(length1.MAGNITUDE, length2.MAGNITUDE);

    if(length1.UNIT === lenType.CENTIMETER){
        if(length2.UNIT === lenType.METER)
            return lengthCalculator(length1.MAGNITUDE, meterToCentimeter(length2.MAGNITUDE));
        else
            return lengthCalculator(length1.MAGNITUDE, milimeterToCentimeter(length2.MAGNITUDE));
    }
    else if(length1.UNIT === lenType.METER){
        if(length2.UNIT === lenType.CENTIMETER)
            return lengthCalculator(length1.MAGNITUDE, centimeterToMeter(length2.MAGNITUDE));
        else
            return lengthCalculator(length1.MAGNITUDE, milimeterToMeter(length2.MAGNITUDE));
    }
    else{
        if(length2.UNIT === lenType.METER)
            return lengthCalculator(length1.MAGNITUDE, meterToMilimeter(length2.MAGNITUDE));
        else
            return lengthCalculator(length1.MAGNITUDE, centimeterToMilimeter(length2.MAGNITUDE));
    }
    /**/
}