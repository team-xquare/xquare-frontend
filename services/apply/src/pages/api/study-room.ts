import { NextApiRequest, NextApiResponse } from 'next';

export default function studyRoomApi(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        study_rooms: [
            {
                id: 'e9c776b6-da7c-4f34-ab5c-6060cd4cb828',
                study_room_name: '가온실',
                applicantion_count: 1,
                students: [
                    {
                        student_name: '박상우',
                        profile_image: '',
                    },
                ],
            },
            {
                id: 'e9c776b6-da7c-4f34-ab5c-6060cd4cb827',
                study_room_name: '3층 기숙사측 자습실',
                applicantion_count: 0,
                students: [
                    {
                        student_name: '박상우',
                        profile_image: '',
                    },
                ],
            },
            {
                id: 'e9c776b6-da7c-4f34-ab5c-6060cd4cb826',
                study_room_name: '3층 학교측 자습실',
                applicantion_count: 0,
                students: [],
            },
        ],
    });
}
