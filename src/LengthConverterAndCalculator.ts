import { len, scale } from '../constants/LengthType';
import { lengthCalculator } from './LengthCalculator';

export const convert = (length1: len, length2: len) => {
    return (length2.MAGNITUDE * scale[length2.UNIT]) / scale[length1.UNIT];
}
export const addLengths = (length1: len, length2: len) => {
    return lengthCalculator(length1.MAGNITUDE, convert(length1, length2));
}