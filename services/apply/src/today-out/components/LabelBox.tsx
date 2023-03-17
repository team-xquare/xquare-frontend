import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';
import { FlexCol, FlexRow } from '../../common/components/Flexbox';

interface LabelBoxProps {
    label: string;
    required?: boolean;
}

const LabelBox = ({ label, required = true, children }: PropsWithChildren<LabelBoxProps>) => {
    return (
        <FlexCol gap={8} fullWidth>
            <LabelText>
                {label}
                {required && <p>*</p>}
            </LabelText>
            {children}
        </FlexCol>
    );
};

const LabelText = styled(FlexRow)`
    color: ${({ theme }) => theme.colors.gray900};
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    > p {
        color: ${({ theme }) => theme.colors.red500};
    }
`;

export default LabelBox;
