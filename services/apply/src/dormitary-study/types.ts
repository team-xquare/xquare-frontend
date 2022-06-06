export type Student = Record<'student_name' | 'profile_image', string>;

export interface StudyRoom {
    id: string;
    study_room_name: string;
    applicantion_count: number;
    students: Student[];
}

export interface ResponseStudyRoom {
    study_rooms: StudyRoom[];
}

export interface StudyRoomId {
    study_room: string;
}
