// export interface PostWeekendOutRequestParam {
//     desired_start_period: number;
//     desired_end_period: number;
//     reason: number;
// }

export interface PostWeekendOutRequestParam {
    start_time: string;
    end_time: string;
    reason: string;
    arrangement: string;
}

export interface GetWeekOutTimeResponse {
    day_type: 'SUN' | 'SAT';
    picnic_allow_start_time: `${number}:${number}:${number}`;
    picnic_allow_end_time: `${number}:${number}:${number}`;
}
