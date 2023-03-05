import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Table = styled.table<{ isScroll?: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    border-radius: 4px;

    * {
        float: none;
    }

    ${({ isScroll }) =>
        isScroll &&
        css`
            overflow: hidden;

            tbody {
                overflow: overlay;
                overflow-x: hidden;
            }
        `}
`;

export const TableHead = styled.thead<{ isBorder?: boolean }>`
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    ${({ isBorder = true, theme }) =>
        isBorder &&
        css`
            border-top: 1px solid ${theme.colors.gray100};
            border-bottom: 1px solid ${theme.colors.gray100};
        `}

    background: ${({ theme }) => theme.colors.gray50};
`;

export const TableBody = styled.tbody`
    width: 100%;
    max-width: 100%;
`;

/**
 * @param justify - 'flex-start' | 'center' | 'flex-end'
 */
export const TableCell = styled.td<{
    justify?: 'flex-start' | 'center' | 'flex-end';
}>`
    display: flex;
    align-items: flex-start;
    justify-content: ${({ justify }) => justify || 'flex-start'};
    overflow: hidden;
`;

/**
 * @param cellSizes 배열로 각 셀의 사이즈를 정의합니다.
 * @param border 보더의 유무를 정의합니다.
 * @param cursor 커서의 유무를 정의합니다.
 * @param customStyle hover, active 스타일 유무를 정의합니다.
 *
 * @description
 * grid를 사용했기때문에 minmax(200px,1fr)과 같은 형태로 사이즈를 정의할 수 있습니다.
 * Cell의 순서에 맞게 px, %, fr 등으로 사이즈를 배열에 담아,
 * sellSizes props에 배열을 넣어주면 됩니다.
 * ex) sellSizes={[100px, 200px, 1fr,(200px,1fr), 400px]}
 */
export const TableRow = styled.tr<{
    isActive?: boolean;
    isBorder?: boolean;
    isCursor?: boolean;
    customStyle?: boolean;
    cellSizes?: string[];
}>`
    display: grid;
    grid-template-columns: ${({ cellSizes }) =>
        cellSizes ? cellSizes.join(' ') : `repeat(auto-fit, minmax(0px, 1fr))`};
    width: 100%;
    max-width: 100%;

    flex-shrink: 0;

    ${({ isActive, theme }) =>
        isActive &&
        css`
            background-color: ${theme.colors.purple50};
        `}
    ${({ isCursor, theme }) =>
        isCursor &&
        css`
            cursor: pointer;
        `}
${({ isBorder, theme }) =>
        isBorder &&
        css`
            border-bottom: 1px solid ${theme.colors.gray100};
        `}
${({ isActive, customStyle, theme }) =>
        !isActive &&
        customStyle &&
        css`
            &:hover {
                background: ${theme.colors.gray50};
            }
            &:active {
                background: ${theme.colors.gray100};
            }
        `}
`;
