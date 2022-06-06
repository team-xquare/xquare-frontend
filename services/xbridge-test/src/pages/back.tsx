import type { NextPage } from 'next';
import { Button } from '@semicolondsm/ui';
import { sendBridgeEvent } from '@shared/xbridge';
import { useRouter } from 'next/router';
const Back: NextPage = () => {
    const router = useRouter();
    return (
        <div>
            <Button onClick={() => sendBridgeEvent('back', true, () => router.back())}>
                뒤로가기
            </Button>
        </div>
    );
};

export default Back;
