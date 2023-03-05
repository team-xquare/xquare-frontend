import { useMutation, useQuery } from 'react-query';
import { applyInstance } from '.';
import { PicnicStu, Stay, StayCode, WeekendMealStu } from './types';
import FileSaver from 'file-saver';
import toast from 'react-hot-toast';
export const useStayList = () => {
    const fetcher = async () => {
        const response = await applyInstance.get<{ stay_list: Stay[] }>('/admin/stay');
        return response.data;
    };
    return useQuery('stay-list', fetcher);
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
            const { data } = await applyInstance.get('/stay/excel', {
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
        const response = await applyInstance.get<{ students: WeekendMealStu[] }>(
            '/admin/weekend-meal',
        );
        return response.data;
    };
    return useQuery('/admin/weekend-meal', fetcher);
};

export const usePicnicList = (type: string) => {
    const fetcher = async () => {
        const response = await applyInstance.get<{ picnic_list: PicnicStu[] }>(
            `/admin/picnic?type=${type}`,
        );
        return response.data;
    };
    return useQuery(`/admin/picnic?type=${type}`, fetcher);
};

export const useWeekendMealExcel = () => {
    const fetcher = async () => {
        try {
            const { data } = await applyInstance.get('/weekend-meal/excel', {
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
    const fetcher = async (param: { status: string }) => {
        return await applyInstance.put(`/admin/stay/${studentId}`, param);
    };
    return useMutation(fetcher, {
        onSuccess: () => {
            toast.success('외출사항 변경을 성공했습니다.');
        },
    });
};

export const useRefusePicnic = () => {
    const fetcher = async () => {
        return await applyInstance('/admin/picnic/accept/');
    };
    return useMutation(fetcher, {});
};

export const useAcceptPicnic = () => {};
