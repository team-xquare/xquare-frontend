import { Button } from '@semicolondsm/ui';
import styled from '@emotion/styled';
import { ButtonProps } from '@semicolondsm/ui/dist/components/Button/types';
interface Props extends ButtonProps {}
const ButtomFixedButton = (props: Props) => {
    return (
        <>
            <FullSizeButtonWrapper>
                <ApplyButton fill="purple" fullWidth {...props}>
                    신청하기
                </ApplyButton>
            </FullSizeButtonWrapper>
            <BackgroundBox />
        </>
    );
};

const FullSizeButtonWrapper = styled.section`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 16px 16px;
`;

const ApplyButton = styled(Button)`
    border-radius: 12px;
`;

const BackgroundBox = styled.div`
    width: 100%;
    height: 48px;
`;

export default ButtomFixedButton;
