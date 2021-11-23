import type { NextPage, NextPageContext } from 'next';
import FlexList from '../components/common/FlexList';
import SourceItem from '../components/resource/SourceItem';
import { useGetResourceQuery } from '../services/resource';
import { useEffect } from 'react';
import MainPageTemplate from '../components/main/MainPageTemplate';
import useDialog from '../hooks/useDialog';
import Dialog from '../components/common/Dialog';
import { SauceIco } from '../static/svg';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Body1, Subtitle3, Title2 } from '@semicolondsm/ui';

const Home: NextPage = () => {
    const { data, error, isLoading } = useGetResourceQuery(null);
    const { isOpen, openModal, closeModal } = useDialog();

    useEffect(() => {
        window.addEventListener('dragenter', openModal);
        window.addEventListener('dragend', closeModal);

        return () => {
            window.removeEventListener('dragenter', openModal);
            window.removeEventListener('dragend', closeModal);
        };
    }, []);
    if (error) {
    }
    return (
        <MainPageTemplate>
            <Dialog isOpen={isOpen}>
                <DialogWrapper>
                    <Sauce />
                    <Subtitle3 color="white">소스를 뿌려 마무리하세요!</Subtitle3>
                    <Body1 color="gray300">파일을 드롭하여 바로 업로드 할 수 있습니다.</Body1>
                </DialogWrapper>
            </Dialog>
            <FlexList
                column={6}
                items={data?.leeSauces || []}
                renderItem={(item) => !isLoading && <SourceItem {...item} />}
            />
        </MainPageTemplate>
    );
};

export default Home;

const spray = keyframes`
    0%, 50% {
        transform: rotate(24deg);
    }
    51%, 100% {
        transform: rotate(0deg);
    }
 
`;

const Sauce = styled(SauceIco)`
    animation: ${spray} 1.5s ease infinite;
`;

const DialogWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
