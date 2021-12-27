import type { NextPage, NextPageContext } from 'next';
import FlexList from '../../components/common/FlexList';
import SourceItem from '../../components/resource/SourceItem';
import {
    getResource,
    getRunningOperationPromises,
    useGetResourceQuery,
} from '../../services/resource';
import { useEffect, useState } from 'react';
import MainPageTemplate from '../../components/main/MainPageTemplate';
import useDialog from '../../hooks/useDialog';
import Dialog from '../../components/common/Dialog';
import { SauceIco } from '../../static/svg';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { Body1, Subtitle3 } from '@semicolondsm/ui';
import ImageDropEventAdapter from '../../components/resource/ImageDropEventAdapter';
import ResourceUploadDialog from '../../components/resource/ResourceUploadDialog';
import { wrapper } from '../../app/store';

interface Props {
    type: string;
    name: string;
}

const Type: NextPage<Props> = ({ type, name }) => {
    const { data, error, isLoading } = useGetResourceQuery(name);
    const { isOpen, openModal, closeModal } = useDialog(false);
    const [image, setImage] = useState<File>();

    useEffect(() => {
        window.addEventListener('dragenter', openModal);
        return () => window.removeEventListener('dragenter', openModal);
    }, []);

    const onClose = () => {
        setImage(undefined);
        closeModal();
    };

    const _data =
        type === 'general'
            ? data?.leeSauces
            : data?.leeSauces.filter((item) =>
                  type === 'search' ? item : item.type === type?.toUpperCase(),
              );

    return (
        <ImageDropEventAdapter drop={(e) => setImage(e.dataTransfer?.files[0])}>
            <MainPageTemplate>
                <Dialog isOpen={isOpen} onClose={onClose}>
                    {!image ? (
                        <DialogWrapper>
                            <Sauce />
                            <Subtitle3 color="white">소스를 뿌려 마무리하세요!</Subtitle3>
                            <Body1 color="gray300">
                                파일을 드롭하여 바로 업로드 할 수 있습니다.
                            </Body1>
                        </DialogWrapper>
                    ) : (
                        <ResourceUploadDialog onClose={onClose} name="" file={image} />
                    )}
                </Dialog>
                <FlexList
                    column={6}
                    items={_data || []}
                    renderItem={(item) => !isLoading && <SourceItem {...item} />}
                />
            </MainPageTemplate>
        </ImageDropEventAdapter>
    );
};

export default Type;

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
    const { type = 'general', name } = ctx.query;

    store.dispatch(getResource.initiate(name?.toString() || null));

    await Promise.all(getRunningOperationPromises());

    return {
        props: {
            type: type.toString(),
            name: name || null,
        },
    };
});

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
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
