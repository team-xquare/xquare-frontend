import { Button } from '@semicolondsm/ui';
import { sendBridgeEvent } from '@shared/xbridge';

const Back2 = () => {
    return (
        <div>
            <Button onClick={() => sendBridgeEvent('back', true)}>뒤로가기</Button>
        </div>
    );
};

export default Back2;
