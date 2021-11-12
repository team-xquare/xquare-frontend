import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Caption, Body1 } from '@semicolondsm/ui';
import OpacityButton from './Button/OpacityButton/BaseOpacityButton';
import CopyButton from './Button/OpacityButton/CopyButton';

export interface ItemProps {
    title: string;
    image: string;
}

const SourceItem: FC<ItemProps> = ({ title, image }) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const SourceMenu = () => {
        return (
            <SourceMenuBlock>
                <CopyButton url={image} />
                <OpacityButton style={{ marginTop: '8px' }}>Download</OpacityButton>
            </SourceMenuBlock>
        );
    };

    return (
        <SourceItemBlock
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <img src={image}></img>
            <Caption className="source-title" textAlign="center" color="gray600">
                {title}
            </Caption>
            {isHover && <SourceMenu />}
        </SourceItemBlock>
    );
};

export default SourceItem;

const SourceItemBlock = styled.div`
    width: 120px;
    height: 120px;
    text-align: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    box-sizing: border-box;
    padding: 8px 0;
    border-radius: 8px;
    & img {
        margin-bottom: 4px;
        width: 64px;
        height: 64px;
    }
    & .source-title {
        height: 36px;
    }
`;

const SourceMenuBlock = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(33, 33, 33, 0.4);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
