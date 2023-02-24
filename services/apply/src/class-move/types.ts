export type ClassroomType = {
    id: string;
    name: string;
    description: string;
};

export interface ClassroomListType {
    classroom_list: ClassroomType[];
}

export interface TodayStatusType {
    date: string;
    type: string;
}

export interface GetClassroomRequestParam {
    floor: '1' | '2' | '3' | '4' | '5';
    type: string;
}
