import styled from '@emotion/styled';

const SourceSkeletonItem = () => {
    return;
};

export default SourceSkeletonItem;

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
