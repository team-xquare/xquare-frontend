import styled from '@emotion/styled';
import { FlexRow } from '../common/components/Flexbox';
import { sendBridgeEvent } from '@shared/xbridge';
interface UploadFooter {
    onClick: () => void;
}

const UploadFooter = () => {
    return (
        <>
            <FooterContainer
                onClick={() =>
                    sendBridgeEvent('photoPicker', false, () => {
                        console.log('image pick start');
                    })
                }>
                <img></img>
                <p>사진 업로드</p>
            </FooterContainer>
            <FooterBlackBox />
        </>
    );
};

const FooterContainer = styled(FlexRow)`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    border-top: 1px solid ${({ theme }) => theme.colors.gray300};
    gap: 8px;
    padding: 0 16px;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    > img {
        width: 23px;
        height: 23px;
        background-color: aliceblue;
    }
    > p {
        color: ${({ theme }) => theme.colors.gray800};
        font-size: 14px;
    }
`;

const FooterBlackBox = styled.div`
    width: 100%;
    height: 40px;
`;
export default UploadFooter;
