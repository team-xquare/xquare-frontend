import type { NextPage } from 'next';
import { Button } from '@semicolondsm/ui';
import { sendBridgeEvent, useBridgeCallback } from '@shared/xbridge';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
const Back: NextPage = () => {
    const router = useRouter();
    const [value, setValue] = useState('');
    const [count, setCount] = useState(0);

    useBridgeCallback(
        'rightButtonTaped',
        () => {
            setCount((state) => state + 1);
        },
        undefined,
    );

    useEffect(() => {
        sendBridgeEvent('isRightButtonEnabled', { isEnabled: !!value });
    }, [value]);

    return (
        <div>
            <Input value={value} onChange={(e) => setValue(e.target.value)}></Input>
            <Button
                onClick={() =>
                    sendBridgeEvent('navigate', {
                        url: '/back2',
                        title: '댓글',
                    })
                }>
                한번더 이동
            </Button>
            <Button onClick={() => sendBridgeEvent('back', true, () => router.back())}>
                뒤로가기
            </Button>
            <div>{count}</div>
        </div>
    );
};
const Input = styled.input`
    width: 300px;
    height: 40px;
`;

export default Back;
