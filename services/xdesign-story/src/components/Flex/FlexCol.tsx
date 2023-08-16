import styled from '@emotion/styled';
import { FlexProps } from './Flex.types';

export const FlexCol = styled.div<FlexProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${({ justify }) => justify};
    align-items: ${({ align }) => align};
    gap: ${({ gap = 0 }) => gap}px;
    width: ${({ fullWidth }) => (fullWidth ? '100%' : 'initial')};
`;
