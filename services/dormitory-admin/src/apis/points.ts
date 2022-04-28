import { AxiosPromise } from "axios";
import { useQuery } from "react-query"
import { instance } from "."
import { StudentType } from "./types";

export const usePoints = () => {
    const fetcher = (): AxiosPromise<{ students: StudentType[] }> => instance("/points/student", {
        method: "GET",
    });
    const result = useQuery("/points", fetcher);

    return result;
}