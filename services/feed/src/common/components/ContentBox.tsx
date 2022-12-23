import useEllipsis from '../hooks/useEllipsis';
import styled from '@emotion/styled';

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
            <p>{ellipsisContent}</p>
            {isEllipsis && <p onClick={onClickMore}>...더보기</p>}
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
