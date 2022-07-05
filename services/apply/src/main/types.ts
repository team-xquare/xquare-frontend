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
    apply: boolean;
}

export interface WeekendMealStatus {
    title: string;
    applied: boolean;
}

// export interface = {"study_room": "e9c776b6-da7c-4f34-ab5c-6060cd4cb828"}
