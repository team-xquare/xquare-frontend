export type ApplyType = 'APPLY' | 'NOT_APPLY' | 'NON_RESPONSE';

interface StayCode {
    name: string;
    value: string;
}

export interface StayCodeList {
    codes: StayCode[];
}

export interface StayStatus {
    status: string;
}

export interface WeekendMealParams {
    apply: ApplyType;
}

export interface WeekendMealStatus {
    title: string;
    applied: ApplyType;
}

// export interface = {"study_room": "e9c776b6-da7c-4f34-ab5c-6060cd4cb828"}
