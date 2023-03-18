import toast from 'react-hot-toast';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { pointInstance } from '.';
import { Rule, SelectedUserIds, Student, StudentHistory } from './types';
import FileSaver from 'file-saver';

export const usePointQuery = () => {
    const fetcher = async (): Promise<Student[]> => {
        const {
            data: { students },
        } = await pointInstance('/student', {
            method: 'GET',
        });
        return students;
    };
    return useQuery('/student', fetcher);
};

export const useAddPointQuery = (id: SelectedUserIds) => {
    const trueStudentIds = Object.keys(id).filter((key) => id[key]);
    const queryClient = useQueryClient();
    const fetcher = async (pointId: number) => {
        return Promise.all(
            trueStudentIds.map((id) =>
                pointInstance(`/student/${id}`, {
                    method: 'POST',
                    data: {
                        point_id: pointId,
                    },
                }),
            ),
        );
    };
    return useMutation(fetcher, {
        onSuccess: () => {
            toast.success('상/벌점이 부여되었습니다.');
            queryClient.invalidateQueries('/points/students', {
                predicate: ({ queryKey }) =>
                    queryKey[0] === '/points/students' &&
                    trueStudentIds.indexOf(queryKey[1] as string) !== -1,
            });
            queryClient.invalidateQueries('/student');
        },
        onError: () => {
            toast.error('상/벌점 부여에 실패하였습니다.');
        },
    });
};

export const useTrainingMutation = () => {
    const queryClient = useQueryClient();
    const fetcher = ({ id }: Pick<Student, 'id'>) => pointInstance.patch(`/penalty/${id}`);

    return useMutation(fetcher, {
        onSuccess: () => {
            queryClient.invalidateQueries('/points/students');
            queryClient.invalidateQueries('/student');
        },
    });
};

export const useHistoryByIdQuery = (id: SelectedUserIds) => {
    const trueStudentIds = Object.keys(id).filter((key) => id[key] && key);
    const pathname = `/student/${trueStudentIds.length ? trueStudentIds[0] : ''}/history?type=`;
    const fetcher = async (): Promise<StudentHistory[]> => {
        const {
            data: { point_histories },
        } = await pointInstance(pathname, {
            method: 'GET',
        });
        return point_histories;
    };
    return useQuery(['/points/students', trueStudentIds[0]], fetcher, {
        enabled: trueStudentIds.length === 1,
    });
};

export const useRuleQuery = (type: boolean) => {
    const fetcher = async (): Promise<Rule[]> => {
        const {
            data: { rules },
        } = await pointInstance(`/rule?type=${type}`, {
            method: 'GET',
        });
        return rules;
    };
    return useQuery(['/points/rules', type], fetcher, {
        staleTime: 60 * 60 * 24 * 100,
    });
};

export const useAddRuleMutation = (successCallback: () => void, addType: boolean) => {
    const queryClient = useQueryClient();
    const fetcher = async (param: Omit<Rule, 'id'>) => await pointInstance.post('/rule', param);
    return useMutation(fetcher, {
        onSuccess: () => {
            toast.success('규칙을 추가하였습니다.');
            queryClient.invalidateQueries(['/points/rules', addType]);
            successCallback();
        },
        onError: () => {
            toast.error('실패하였습니다.');
        },
    });
};

export const useDeleteRuleMutation = (id: SelectedUserIds, addType: boolean) => {
    const trueStudentIds = Object.keys(id).filter((key) => id[key] && key);
    const queryClient = useQueryClient();
    const fetcher = async (id: number) => await pointInstance.delete(`/rule/${id}`);
    return useMutation(fetcher, {
        onSuccess: () => {
            toast.success('규칙을 삭제하였습니다.');
            queryClient.invalidateQueries('/student');
            queryClient.invalidateQueries(['/points/rules', addType]);
            queryClient.invalidateQueries(['/points/students', trueStudentIds[0]]);
        },
        onError: () => {
            toast.error('실패하였습니다.');
        },
    });
};

export const useDeleteRuleHistory = (id: SelectedUserIds) => {
    const trueStudentIds = Object.keys(id).filter((key) => id[key] && key);
    const queryClient = useQueryClient();
    const fetcher = async (historyId: string) => {
        const pathname = `/student/${
            trueStudentIds.length ? trueStudentIds[0] : ''
        }/history/${historyId}`;
        await pointInstance.delete(pathname);
    };
    return useMutation(fetcher, {
        onSuccess: () => {
            toast.success('삭제되었습니다.');
            queryClient.invalidateQueries(['/points/students', trueStudentIds[0]]);
            queryClient.invalidateQueries([`/student`]);
        },
        onError: () => {
            toast.error('삭제에 실패하였습니다.');
        },
    });
};

export const usePointExcel = () => {
    const fetcher = async () => {
        try {
            const { data } = await pointInstance.get('/excel', {
                responseType: 'blob',
            });
            FileSaver.saveAs(data, `상벌점 현황 ${new Date()}.xlsx`);
        } catch (e) {
            toast.error('상벌점 현황 다운로드를 실패하였습니다.');
        }
    };

    return fetcher;
};
