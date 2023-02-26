import { css, SerializedStyles, Theme } from '@emotion/react';
import styled from '@emotion/styled';
import { Body3 } from '@semicolondsm/ui';
import { PropsWithChildren } from 'react';

type TagColorType = 'default' | 'purple';

interface TagButtonProps {
    color: TagColorType;
    onClick: () => void;
}

const TagButton = ({ color, children, onClick }: PropsWithChildren<TagButtonProps>) => {
    return (
        <TagBox color={color} onClick={onClick}>
            <Body3>{children}</Body3>
        </TagBox>
    );
};

const TagBox = styled.div<{ color: TagColorType }>`
    padding: 6px 16px;
    border-radius: 16px;
    flex-shrink: 0;
    ${({ theme, color }) => colorStyleSelector(theme)[color]}
`;

const colorStyleSelector = (theme: Theme): Record<TagColorType, SerializedStyles> => ({
    default: css`
        background-color: ${theme.colors.gray50};

        > p {
            color: ${theme.colors.gray900};
        }
    `,
    purple: css`
        background-color: ${theme.colors.purple500};
        > p {
            color: ${theme.colors.gray50};
        }
    `,
});

export default TagButton;
