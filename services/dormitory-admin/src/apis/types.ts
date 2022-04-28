export interface StudentType {
    id: string;
    name: string;
    num: string;
    good_point: number;
    bad_point: number;
    penalty_level: number;
    penalty_training_status: boolean;
}

export interface RuleType {
    id: number;
    reason: string;
    type: boolean;
    point: number;
}

export interface HistoryType {
    id: number;
    date: Date;
    reason: string;
    pointType: boolean;
    point: number;
}