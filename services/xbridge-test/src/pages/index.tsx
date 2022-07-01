import type { NextPage } from 'next';
import { Button } from '@semicolondsm/ui';
import { sendBridgeEvent, useBridgeHandler } from '@shared/xbridge';
import { useRouter } from 'next/router';
import XbridgeImage from '../../common/XbridgeImage';
const Home: NextPage = () => {
    const router = useRouter();

    useBridgeHandler('confirm', (event) => {
        alert(event.detail.success);
    });

    return (
        <div>
            <XbridgeImage src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/resize/416/quality/80/optimize" />
            <XbridgeImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKS1BGRjgU289BZuhSFI4V7GBh6Ny_UzgH6A&usqp=CAU" />

            <Button
                onClick={() => {
                    const data = sendBridgeEvent(
                        'confirm',
                        {
                            message: '브릿지를 테스트 하시겠습니까?',
                            confirmText: 'ㅇㅇ',
                            cacelText: 'ㄴㄴ',
                        },
                        ({ data }) => confirm(data.message),
                    );

                    alert(data);
                }}>
                모달
            </Button>
            <Button
                onClick={() =>
                    sendBridgeEvent('navigate', '/back', ({ data }) => router.push(data))
                }>
                내비게이션
            </Button>
        </div>
    );
};

export default Home;
