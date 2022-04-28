import { AxiosPromise } from "axios";
import { useQuery } from "react-query"
import { instance } from "."
import { HistoryType, RuleType, StudentType } from "./types";

export const usePoints = () => {
    const fetcher = (): AxiosPromise<{ students: StudentType[] }> => instance("/points/student", {
        method: "GET",
    });
    const result = useQuery("/points/students", fetcher);

    return result;
}

export const useHistoryByIdQuery = (id?: string) => {
    const pathname = `/points/student/${id}/history`;

    const fetcher = async (): Promise<HistoryType[]> => {
        const { data: { point_histories } } = await instance(pathname, {
            method: "GET",
        });
        return point_histories;
    }
    const result = useQuery(["/points/student", id], fetcher, { enabled: !!id });

    return result;
}

export const useRules = () => {
    const fetcher = (): AxiosPromise<{ rules: RuleType[] }> => instance("/points/rule", {
        method: "GET",
    });
    const result = useQuery("/points/rules", fetcher);

    return result;
}