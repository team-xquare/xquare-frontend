export interface Student {
    id: string;
    name: string;
    num: string;
    good_point: number;
    bad_point: number;
    stay_apply: string; // "잔류" | "금요귀가" | ""
    meal_apply: string;
    penalty_level: number;
    is_penalty_required: boolean;
}

export interface Notice {
    id: string;
    title: string;
    content: string;
    created_at: string;
}

export interface Rule {
    id: number;
    reason: string;
    type: boolean;
    point: number;
}

export interface StudentHistory {
    id: number;
    date: Date;
    reason: string;
    pointType: boolean;
    point: number;
}

export enum SortingEnum {
    a = "필터링 ✖",
    b = "벌점 봉사",
    c = "1단계",
    d = "2단계",
    e = "3단계",
    f = "1Out",
    g = "2Out",
}

export type SelectedUserIds = { [key: string]: boolean };

export type MutateMethod = "POST" | "DELETE" | "PUT";