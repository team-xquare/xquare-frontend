import { useMutation, useQuery, useQueryClient } from 'react-query';
import { applyInstance } from '.';
import {
    PicnicDetail,
    PicnicStu,
    SelectedPicnicType,
    Stay,
    StayCode,
    WeekendMealAll,
} from './types';
import FileSaver from 'file-saver';
import toast from 'react-hot-toast';
export const useStayList = () => {
    const fetcher = async () => {
        const response = await applyInstance.get<{ stay_list: Stay[] }>('/admin/stay');
        return response.data;
    };
    return useQuery('stay-list', fetcher, {
        onError: () => {
            toast.error('잔류신청목록 조회를 실패하였습니다.');
        },
    });
};

export const useStayCode = () => {
    const fetcher = async () => {
        const response = await applyInstance.get<{ codes: StayCode[] }>('/stay/codes/status');
        return response.data;
    };
    return useQuery('stay-code', fetcher, {
        staleTime: 60 * 60 * 100 * 24,
    });
};

export const useStayExcel = () => {
    const fetcher = async () => {
        try {
            const { data } = await applyInstance.get('/admin/stay/excel', {
                responseType: 'blob',
            });
            FileSaver.saveAs(data, `잔류신청 현황${new Date()}.xlsx`);
        } catch (e) {
            toast.error('잔류신청 현황 다운로드를 실패하였습니다.');
        }
    };
    return fetcher;
};

export const useWeekendMealList = () => {
    const fetcher = async () => {
        const response = await applyInstance.get<WeekendMealAll>('/admin/weekend-meal');
        return response.data;
    };
    return useQuery('/admin/weekend-meal', fetcher, {
        onError: () => {
            toast.error('주말 급식 신청목록 조회를 실패하였습니다.');
        },
    });
};

export const usePicnicList = (type: string) => {
    const fetcher = async () => {
        const response = await applyInstance.get<{ picnic_list: PicnicStu[] }>(
            `/admin/picnic?type=${type}`,
        );
        return response.data;
    };
    return useQuery(`/admin/picnic?type=${type}`, fetcher, {
        onError: () => {
            toast.error('주말 외출 목록 조회를 실패하였습니다.');
        },
    });
};

export const usePicnicExcel = () => {
    const fetcher = async () => {
        try {
            const { data } = await applyInstance.get('/admin/picnic/excel', {
                responseType: 'blob',
            });
            FileSaver.saveAs(data, `주말 외출 현황${new Date()}.xlsx`);
        } catch (e) {
            toast.error('주말 외출 현황 다운로드를 실패하였습니다.');
        }
    };
    return fetcher;
};

export const useWeekendMealExcel = () => {
    const fetcher = async () => {
        try {
            const { data } = await applyInstance.get('admin/weekend-meal/all/excel', {
                responseType: 'blob',
            });
            FileSaver.saveAs(data, `주말 급식 현황${new Date()}.xlsx`);
        } catch (e) {
            toast.error('주말 급식 현황 다운로드를 실패하였습니다.');
        }
    };
    return fetcher;
};

export const useStayUpdate = (studentId: string) => {
    const queryClient = useQueryClient();
    const fetcher = async (param: { status: string }) => {
        return await applyInstance.put(`/admin/stay/${studentId}`, param);
    };
    return useMutation(fetcher, {
        onSuccess: () => {
            queryClient.invalidateQueries(['stay-list']);
            toast.success('외출사항 변경을 성공했습니다.');
        },
        onError: () => {
            toast.error('외출사항 변경을 실패하였습니다.');
        },
    });
};

export const useRefusePicnic = () => {
    const queryClient = useQueryClient();
    const fetcher = async (picnicIds: SelectedPicnicType) => {
        const truePicnicIds = Object.keys(picnicIds).filter((key) => picnicIds[key] && key);
        return await Promise.all(
            truePicnicIds.map((picnicId) =>
                applyInstance.delete<PicnicDetail>(`/admin/picnic/refuse/${picnicId}`),
            ),
        );
    };
    return useMutation(fetcher, {
        onSuccess: () => {
            toast.success('외출신청을 거절하였습니다.');
            queryClient.invalidateQueries(['/admin/picnic?type=AWAIT']);
        },
        onError: () => {
            toast.error('외출신청 거절을 실패하였습니다.');
        },
    });
};

export const useAcceptPicnic = () => {
    const queryClient = useQueryClient();
    const fetcher = async (picnicIds: SelectedPicnicType) => {
        const truePicnicIds = Object.keys(picnicIds).filter((key) => picnicIds[key] && key);
        return await Promise.all(
            truePicnicIds.map((picnicId) =>
                applyInstance.patch<PicnicDetail>(`/admin/picnic/accept/${picnicId}`),
            ),
        );
    };
    return useMutation(fetcher, {
        onSuccess: () => {
            toast.success('외출신청을 수락하였습니다.');
            queryClient.invalidateQueries(['/admin/picnic?type=AWAIT']);
        },
        onError: () => {
            toast.error('외출신청 수락을 실패하였습니다.');
        },
    });
};

export const useArrivePicnic = () => {
    const queryClient = useQueryClient();
    const fetcher = async (picnicIds: SelectedPicnicType) => {
        const truePicnicIds = Object.keys(picnicIds).filter((key) => picnicIds[key] && key);
        return await Promise.all(
            truePicnicIds.map((picnicId) =>
                applyInstance.patch<PicnicDetail>(`/admin/picnic/arrive/${picnicId}`),
            ),
        );
    };
    return useMutation(fetcher, {
        onSuccess: () => {
            toast.success('외출 복귀를 성공하였습니다.');
            queryClient.invalidateQueries(['/admin/picnic?type=RETURN']);
        },
        onError: () => {
            toast.error('외출 복귀를 실패하였습니다.');
        },
    });
};

export const usePicnicDetail = (studentIds: string[]) => {
    const fetcher = async () => {
        const response = await applyInstance.get<PicnicDetail>(
            `/admin/picnic/detail/${studentIds[0]}`,
        );
        return response.data;
    };

    return useQuery(`/admin/picnic/detail/${studentIds[0]}`, fetcher, {
        enabled: studentIds.length === 1,
        onSuccess: () => {},
    });
};
