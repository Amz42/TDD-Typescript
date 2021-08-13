// export type lenType = "CENTIMETER" | "METER" | "MILIMETER" | string;

export enum lenType {
    CENTIMETER = "CENTIMETER",
    METER = "METER",
    MILIMETER = "MILIMETER"
};

export type len = {
    MAGNITUDE: number,
    UNIT: lenType
};

export enum scale {
    MILIMETER = 1,
    CENTIMETER = 10,
    METER = 1000
};