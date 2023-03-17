export type ClassroomType = {
    classroom_id: string;
    type_id: string;
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

export interface PostClassroomRequestParam {
    classroomId: string;
    period: number;
}

export type TodayType = {
    date: string;
    type: string;
};
