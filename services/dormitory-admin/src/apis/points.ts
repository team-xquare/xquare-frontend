import { useQuery } from "react-query"
import { instance } from "."
import { Rule, SelectedUserIds, Student, StudentHistory } from "./types";

export const usePointQuery = () => {
    const fetcher = async (): Promise<Student[]> => {
        const { data: { students } } = await instance("/points/student", {
            method: "GET",
        });
        return students;
    }
    const result = useQuery("/points/students", fetcher);

    return result;
}

export const useHistoryByIdQuery = (id: SelectedUserIds) => {
    const trueStudents = Object.keys(id).map(key => id[key] === true && id[key]);
    
    const pathname = `/points/student/${trueStudents[0]}/history`;

    const fetcher = async (): Promise<StudentHistory[]> => {
        const { data: { point_histories } } = await instance(pathname, {
            method: "GET",
        });
        return point_histories;
    }

    const result = useQuery(["/points/student", id], fetcher, { enabled: trueStudents.length > 1 });

    return result;
}

export const useRuleQuery = () => {
    const fetcher = async (): Promise<Rule[]> => {
        const { data: { rules } } = await instance("/points/rule", {
            method: "GET",
        });
        return rules;
    }
    const result = useQuery("/points/rules", fetcher);

    return result;
}