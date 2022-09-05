import { useMutation, useQuery, useQueryClient } from "react-query"
import { instance } from ".";
import { Notice } from "./types";

export const useNoticeQuery = () => {
    const fetcher = async (): Promise<Notice[]> => (await instance.get("/notices")).data.notices;

    return useQuery("notice", fetcher);
}

export const useDeleteNoticeMutation = () => {
    const queryClient = useQueryClient();

    return useMutation((id: string) => instance.delete(`/notices/${id}`), {
        onSuccess: () => {
            queryClient.invalidateQueries(["notice"]);
        }
    });
}

export const useUpdateNoticeMutation = () => {
    const queryClient = useQueryClient();

    return useMutation(({ id, ...params }: Partial<Notice>) => instance.put(`/notices/${id}`, params), {
        onSuccess: () => {
            queryClient.invalidateQueries(["notice"]);
        }
    });
}

export const useAddNoticeMutation = () => {
    const queryClient = useQueryClient();

    return useMutation((params: Partial<Notice>) => instance.post('/notices', params), {
        onSuccess: () => {
            queryClient.invalidateQueries(["notice"]);
        }
    })
}