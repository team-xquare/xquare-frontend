import { NextApiRequest, NextApiResponse } from 'next';

export default function stayStatusApi(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        status: 'STAY',
    });
}
