import useEllipsis from '../hooks/useEllipsis';
import styled from '@emotion/styled';
import { Body1 } from '@semicolondsm/ui';

interface ContentBoxProps {
    content: string;
    limit?: number;
}

const ContentBox = ({ content, limit }: ContentBoxProps) => {
    const { ellipsisContent, isEllipsis, onClickMore } = useEllipsis(
        content,
        limit ?? content.length,
    );
    return (
        <ContentWrapper>
            <Body1>{ellipsisContent}</Body1>
            {isEllipsis && (
                <div onClick={onClickMore}>
                    <Body1>...더보기</Body1>
                </div>
            )}
        </ContentWrapper>
    );
};

const ContentWrapper = styled.div`
    font-weight: 400;
    font-size: 14px;
    overflow: hidden;
    word-break: break-all;
    white-space: pre-wrap;
    word-wrap: break-word;
    display: block;
    line-height: 20px;
    > p {
        font-size: 14px;
        display: inline;
    }
`;

export default ContentBox;
