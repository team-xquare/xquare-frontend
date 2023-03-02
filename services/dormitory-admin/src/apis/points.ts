import { useMutation, useQuery, useQueryClient } from 'react-query';
import { pointInstance } from '.';
import { Rule, SelectedUserIds, Student, StudentHistory } from './types';

export const usePointQuery = () => {
    const fetcher = async (): Promise<Student[]> => {
        const {
            data: { students },
        } = await pointInstance('', {
            method: 'GET',
        });
        return students;
    };
    return useQuery('/students', fetcher);
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
            queryClient.invalidateQueries('/points/students', {
                predicate: ({ queryKey }) =>
                    queryKey[0] === '/points/students' &&
                    trueStudentIds.indexOf(queryKey[1] as string) !== -1,
            });
            queryClient.invalidateQueries('/points/students');
        },
    });
};

export const useTrainingMutation = () => {
    const queryClient = useQueryClient();
    const fetcher = ({ id, penalty_level }: Pick<Student, 'id' | 'penalty_level'>) =>
        pointInstance.post(`/points/student/${id}/training?penalty_level=${penalty_level}`);

    return useMutation(fetcher, {
        onSuccess: () => {
            queryClient.invalidateQueries('/points/students');
        },
    });
};

export const useHistoryByIdQuery = (id: SelectedUserIds) => {
    //
    const trueStudentIds = Object.keys(id).filter((key) => id[key] && key);
    const pathname = `/points/student/${trueStudentIds.length ? trueStudentIds[0] : ''}/history`;

    const fetcher = async (): Promise<StudentHistory[]> => {
        const {
            data: { point_histories },
        } = await pointInstance(pathname, {
            method: 'GET',
        });
        return point_histories;
    };
    return useQuery(['/points/students', id], fetcher, { enabled: trueStudentIds.length === 1 });
};

export const useRuleQuery = () => {
    //rule 조회 type true 면 상점 false 면 벌점
    const fetcher = async (): Promise<Rule[]> => {
        const {
            data: { rules },
        } = await pointInstance('/rule?type=true', {
            method: 'GET',
        });
        return rules;
    };
    return useQuery('/points/rules', fetcher);
};

export const useAddRuleMutation = () => {
    //rule 추가
    const fetcher = async (param: Omit<Rule, 'id'>) => await pointInstance.post('/rule', param);
    return useMutation(fetcher);
};
