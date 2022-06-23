export type Student = Record<'student_name' | 'profile_image', string>;

export interface StudyRoom {
    id: string;
    study_room_name: string;
    application_count: number;
    students: Student[];
    max_people_count: number;
}

export interface ResponseStudyRoom {
    study_rooms: StudyRoom[];
}

export interface StudyRoomId {
    study_room_id: string;
}
