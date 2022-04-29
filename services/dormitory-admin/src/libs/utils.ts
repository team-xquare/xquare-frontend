import { SortingEnum, StudentType } from "../apis/types";

export const sortedStudents = (sortType: SortingEnum, data?: StudentType[]) => {
    let students = data ?? [];
    switch(sortType) {
        case SortingEnum.a:
            break;
        case SortingEnum.b:
            students = students.filter(student => student.penalty_training_status);
            break;
        case SortingEnum.c:
        case SortingEnum.d:
        case SortingEnum.e:
        case SortingEnum.f:
        case SortingEnum.g:
            const level = Object.values(SortingEnum).slice(2).indexOf(sortType) + 1;
            students = students.filter(students => students.penalty_level === level);
            break;
    }
    return students;
}