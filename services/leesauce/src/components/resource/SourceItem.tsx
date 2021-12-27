import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { Body2 } from '@semicolondsm/ui';
import CopyButton from '../common/Button/OpacityButton/CopyButton';
import { ResourceData } from '../../models';
import { useMemo } from 'react';
import DonwloadButton from '../common/Button/OpacityButton/DownloadButton';

const SourceItem = ({ name, url }: ResourceData) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const SourceMenu = useMemo(() => {
        return (
            <SourceMenuBlock>
                <CopyButton url={url} />
                <DonwloadButton name={name} url={url} />
            </SourceMenuBlock>
        );
    }, []);

    return (
        <SourceItemBlock
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
            <img src={url}></img>
            <Body2 className="source-title" textAlign="center" color="gray600">
                {name}
            </Body2>
            {isHover && SourceMenu}
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
    gap: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
