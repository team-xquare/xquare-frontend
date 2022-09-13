import { SortingEnum, Student } from "../apis/types";

export const sortedStudents = (sortType: SortingEnum, data?: Student[]) => {
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

export const download = (downloadURL: string, name: string) => {
    const a = document.createElement("a");
    a.href = downloadURL;
    a.download = name;
    a.click();
    a.remove();
};

export const getDateString = (date: Date = new Date()) => {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}