import { quantity, Scale } from '../constants/QuantityType';

export const convertQuantity = (quantity1: quantity, quantity2: quantity) => {
    
    if(quantity1.qtype !== quantity2.qtype)
        throw new Error('Quantity types should be same');

    return (
        (quantity2.magnitude * Scale[quantity2.qtype][quantity2.qunit]) /
        Scale[quantity1.qtype][quantity1.qunit]
    );
}

export const addQuantities = (quantity1: quantity, quantity2: quantity) => {
    return quantity1.magnitude + convertQuantity(quantity1, quantity2);
}