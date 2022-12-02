import type { GetServerSideProps, NextPage } from 'next';
import { Button } from '@semicolondsm/ui';
import { sendBridgeEvent, useBridgeHandler } from '@shared/xbridge';
import { useRouter } from 'next/router';
import XbridgeImage from '../../common/XbridgeImage';
import { useState } from 'react';
import cookies from 'next-cookies';
import Image from 'next/image';
import { start } from 'repl';
// 최종 수정일: 7월 2일

const Home: NextPage<{ accessToken: string; refreshToken: string }> = (
    {
        // accessToken,
        // refreshToken,
    },
) => {
    const router = useRouter();
    const [isConfirmSucces, setIsConfirmSuccess] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string[]>([]);
    useBridgeHandler('confirm', (event) => {
        alert(event.detail.success);
        setIsConfirmSuccess(event.detail.success);
    });

    useBridgeHandler('selectedPhotos', (event) => {
        alert(event.detail.photos);
        setSelectedImage(event.detail.photos || []);
    });

    return (
        <div>
            <XbridgeImage src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/resize/416/quality/80/optimize" />
            <XbridgeImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKS1BGRjgU289BZuhSFI4V7GBh6Ny_UzgH6A&usqp=CAU" />
            ModalState: {String(isConfirmSucces)}
            <Button
                onClick={() => {
                    sendBridgeEvent(
                        'confirm',
                        {
                            message: '브릿지를 테스트 하시겠습니까?',
                            confirmText: 'ㅇㅇ',
                            cancelText: 'ㄴㄴ',
                        },
                        ({ data }) => {
                            const result = confirm(data.message);
                            alert(result);
                        },
                    );
                }}>
                모달
            </Button>
            <Button
                onClick={() =>
                    sendBridgeEvent('navigate', { url: '/back', title: '테스트' }, ({ data }) =>
                        router.push(data.url),
                    )
                }>
                내비게이션
            </Button>
            <Button
                onClick={() =>
                    sendBridgeEvent(
                        'error',
                        {
                            message: '에러가 발생했습니다.',
                        },
                        ({ data }) => alert(data.message),
                    )
                }>
                에러 발생
            </Button>
            {/* <div>내 accessToken: {accessToken}</div>
            <div>내 refreshToken: {refreshToken}</div> */}
            <div>내 image</div>
            {selectedImage.map((image) => (
                <Image
                    src={`data:image/png;base64,${image}`}
                    width={100}
                    height={100}
                    // placeholder="blur"
                    loading="lazy"
                    // quality={50}
                />
            ))}
            <Button onClick={() => sendBridgeEvent('photoPicker', true)}>이미지 피커</Button>
        </div>
    );
};

export default Home;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     const allCookies = cookies(ctx);

//     return {
//         props: {
//             accessToken: allCookies['accessToken'],
//             refreshToken: allCookies['refreshToken'],
//         },
//     };
// };
