import { useMutation, useQuery, useQueryClient } from "react-query"
import { instance } from "."
import { Rule, SelectedUserIds, Student, StudentHistory } from "./types";

export const usePointQuery = () => {
    const fetcher = async (): Promise<Student[]> => {
        const { data: { students } } = await instance("/points/student", {
            method: "GET",
        });
        return students;
    }
    return useQuery("/points/students", fetcher);
}

export const useAddPointQuery = (id: SelectedUserIds) => {
    const trueStudentIds = Object.keys(id).filter(key => id[key] && key);
    const queryClient = useQueryClient();
    const fetcher = async (pointId: number) => {
        return Promise.all(trueStudentIds.map(id => instance(`/points/students/${id}`, {
            method: "POST",
            data: {
                point_id: pointId
            },
        })));
    };
    return useMutation(fetcher, { onSuccess: () => 
        queryClient.invalidateQueries({ 
            predicate: ({ queryKey }) => queryKey[0] === "/points/students" && trueStudentIds.indexOf(queryKey[1] as string) !== -1
        }) 
    });
}

export const useHistoryByIdQuery = (id: SelectedUserIds) => {
    const trueStudentIds = Object.keys(id).filter(key => id[key] && key);
    const pathname = `/points/student/${trueStudentIds.length ? trueStudentIds[0] : ""}/history`;

    const fetcher = async (): Promise<StudentHistory[]> => {
        const { data: { point_histories } } = await instance(pathname, {
            method: "GET",
        });
        return point_histories;
    }
    return useQuery(["/points/student", id], fetcher, { enabled: trueStudentIds.length === 1 });
}

export const useRuleQuery = () => {
    const fetcher = async (): Promise<Rule[]> => {
        const { data: { rules } } = await instance("/points/rule", {
            method: "GET",
        });
        return rules;
    }
    return useQuery("/points/rules", fetcher);
}