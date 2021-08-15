export type scaleType = "LENGTH" | "WEIGHT";

export type lenType = "MILIMETER" | "CENTIMETER" | "METER";
export type weightType = "KG" | "GRAM" | "POUND";

export type quantity = {
    magnitude: number,
    qtype: scaleType
    qunit: lenType | weightType
}

export type scaleTypes = {
    [key in scaleType] : {
        [key in (lenType | weightType | string)] : number
    }
}

export const Scale : scaleTypes = {
    LENGTH : {
        MILIMETER : 1,
        CENTIMETER : 10,
        METER : 1000
    },
    WEIGHT : {
        GRAM : 1,
        POUND : 453.592,
        KG : 1000
    },
}