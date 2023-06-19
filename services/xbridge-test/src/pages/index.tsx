import type { GetServerSideProps, NextPage } from 'next';
import { Button } from '@semicolondsm/ui';
import { sendBridgeEvent, useBridgeHandler } from '@shared/xbridge';
import { useRouter } from 'next/router';
import XbridgeImage from '../../common/XbridgeImage';
import { useState } from 'react';
import cookies from 'next-cookies';
import Image from 'next/image';
// 최종 수정일: 7월 2일

const Home: NextPage<{ accessToken: string; refreshToken: string }> = ({
    accessToken,
    refreshToken,
}) => {
    const router = useRouter();
    const [isConfirmSucces, setIsConfirmSuccess] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string[]>([]);
    const [selectedMenu, setSelectedMenu] = useState<number | null>(null);
    const [testAlertParam, setTestAlertParam] = useState('');
    const [selectedPeriod, setSelectedPeriod] = useState<number | undefined>();
    const bottomSheetMenu = ['수정하기', '삭제하기'];
    const [time, setTime] = useState('');
    const testConfirm = useBridgeHandler(
        'confirm',
        (event) => {
            setTestAlertParam(JSON.stringify(event.detail));
            setIsConfirmSuccess(event.detail.success);
        },
        {
            message: '브릿지를 테스트 하시겠습니까?',
            confirmText: 'ㅇㅇ',
            cancelText: 'ㄴㄴ',
        },
        ({ data }) => {
            const result = confirm(data.message);
            alert(result);
            setIsConfirmSuccess(result);
        },
    );

    const testPhotoPicker = useBridgeHandler(
        'photoPicker',
        (event) => {
            setSelectedImage(event.detail.photos || []);
        },
        {},
    );

    const testActionSheet = useBridgeHandler(
        'actionSheet',
        (event) => {
            setSelectedMenu(event.detail.index);
        },
        { menu: bottomSheetMenu },
        () => {},
    );

    const testTimePicker = useBridgeHandler(
        'timePicker',
        (event) => {
            setTime('1');
        },
        { time: time },
    );

    const testPeriodPicker = useBridgeHandler(
        'periodPicker',
        (e) => setSelectedPeriod(e.detail.period),
        { period: selectedPeriod },
    );

    const testSuccess = sendBridgeEvent('success', {
        title: '브릿지 테스트에 성공하였습니다.',
        message: '확인',
    });
    return (
        <div>
            <XbridgeImage src="https://cdnimg.melon.co.kr/cm2/artistcrop/images/002/61/143/261143_20210325180240_500.jpg?61e575e8653e5920470a38d1482d7312/melon/resize/416/quality/80/optimize" />
            <XbridgeImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKS1BGRjgU289BZuhSFI4V7GBh6Ny_UzgH6A&usqp=CAU" />
            <div>ModalState: {String(isConfirmSucces)}</div>
            <div>param: {testAlertParam}</div>
            <Button onClick={testConfirm}>모달</Button>
            <Button
                onClick={() =>
                    sendBridgeEvent(
                        'navigate',
                        { url: '/back', title: '테스트', rightButtonText: '완료' },
                        ({ data }) => router.push(data.url),
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
            <div>내 accessToken: {accessToken}</div>
            <div>내 refreshToken: {refreshToken}</div>
            <div>내 image들</div>
            {selectedImage.map((image, idx) => (
                <Image
                    key={idx}
                    src={image}
                    width={100}
                    height={100}
                    // placeholder="blur"
                    loading="lazy"
                />
            ))}
            <Button onClick={testPhotoPicker}>이미지 피커</Button>
            <div>선택된 menu: {bottomSheetMenu[selectedMenu!]}</div>
            <Button onClick={testActionSheet}>메뉴선택</Button>
            <div>선택된 time:{time}</div>
            <Button onClick={testTimePicker}>타임 피커</Button>
            <div>선택된 교시: {selectedPeriod}</div>
            <Button onClick={testPeriodPicker}>교시 피커</Button>
            <Button onClick={testSuccess}>success 버튼</Button>
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const allCookies = cookies(ctx);
    return {
        props: {
            accessToken: allCookies['accessToken'] || '',
            refreshToken: allCookies['refreshToken'] || '',
        },
    };
};
