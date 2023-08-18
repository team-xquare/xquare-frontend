import styled from '@emotion/styled';
import { TextProps } from './Text.type';

export const Text = ({
    align,
    children,
    typograghy = 'Body',
    size = 'Large',
    whiteSpace,
    underline,
    htmlFor,
    userSelect,
    textOverflow,
    ...props
}: TextProps) => {
    return (
        <TextView
            align={align}
            whiteSpace={whiteSpace}
            underline={underline}
            htmlFor={htmlFor}
            userSelect={userSelect}
            textOverflow={textOverflow}
            size={size}
            typograghy={typograghy}
            {...props}>
            {children}
        </TextView>
    );
};

export const TextView = styled.span<TextProps>`
    ${({ theme, typograghy = 'Body', size = 'Large' }) => theme.fontStyle[typograghy][size]};
    text-align: ${({ align }) => align};
    white-space: ${({ whiteSpace }) => whiteSpace};
    text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
    user-select: ${({ userSelect }) => userSelect};
    text-overflow: ${({ textOverflow }) => textOverflow};
`;
