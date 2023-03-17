export type TimeTableType = {
    id: string;
    period: number;
    begin_time: `${string}:${string}:${string}`;
    end_time: `${string}:${string}:${string}`;
};

export interface GetTimeTableResponseDto {
    date: string;
    times: TimeTableType[];
}
