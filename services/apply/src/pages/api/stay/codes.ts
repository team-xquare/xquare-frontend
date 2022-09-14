import { NextApiRequest, NextApiResponse } from 'next';

export default function stayListApi(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        codes: [
            {
                code: 'STAY',
                value: '잔류',
            },
            {
                code: 'FRIDAY_RETURN_HOME',
                value: '금요귀가',
            },
        ],
    });
}
