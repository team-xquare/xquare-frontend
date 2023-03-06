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
    feed_id: string;
    content: string;
    created_at: string;
    title: string;
    profile: string;
    name: string;
    type: string;
    like_count: number;
    comment_count: number;
    is_mine: boolean;
    is_like: boolean;
    attachments_url: string[];
}

export interface Comment {
    comment_id: string;
    content: string;
    name: string;
    profile: string;
    is_mine: boolean;
    updated_at: string;
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

export interface UserLogin {
    account_id: string;
    password: string;
}

export interface UserToken {
    access_token: string;
    refresh_token: string;
    expire_at: string;
}

export interface Category {
    category_id: string;
    name: string;
}

export enum SortingEnum {
    a = '선택안함',
    b = '벌점 봉사',
    c = '1단계',
    d = '2단계',
    e = '3단계',
    f = '1Out',
    g = '2Out',
}

export const StaySortingEnum = ['전체', '금요 귀가', '토요 귀가', '토요 귀사', '잔류'] as const;

export type SelectedUserIds = { [key: string]: boolean };
export type SelectedPicnicType = { [key: string]: boolean };
export type MutateMethod = 'POST' | 'DELETE' | 'PUT';

export type Stay = {
    num: string;
    name: string;
    code: string;
    id: string;
};

export type StayCode = {
    name: string;
    value: string;
};

export type WeekendMealStu = {
    id: string;
    name: string;
    num: string;
};

export type PicnicStu = {
    id: string;
    user_id: string;
    num: string;
    name: string;
    start_time: string;
    end_time: string;
    is_acceptance: number;
};

export type PicnicDetail = {
    name: string;
    num: string;
    start_time: string;
    end_time: string;
    reason: string;
    arrangement: string;
};
