import styled from '@emotion/styled';
import { Body1, Subtitle4 } from '@semicolondsm/ui';
import { sendBridgeEvent, useBridgeCallback } from '@shared/xbridge';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SelectInput from '../../../common/components/SelectInput';
import useReportFeed from '../../../main/hooks/useReportFeed';

const Declare = () => {
    const router = useRouter();
    const postId = router.query.postId as string;
    const [isSubmit, setIsSubmit] = useState<boolean>(false);
    const [reason, setReason] = useState<string>('');
    const { mutate: reportMutate } = useReportFeed();
    
    useEffect(() => {
        sendBridgeEvent('isRightButtonEnabled', {
            isEnabled: !!reason && !isSubmit,
        });
    }, [reason, isSubmit]);

    useBridgeCallback(
        'rightButtonTaped',
        () => {
            reportMutate({ feed_id: postId, content: reason });
            setIsSubmit(true);
        },
        undefined,
    );

    return (
        <Container>
            {isSubmit ? (
                <MessageWrapper>
                    <Subtitle4 color="gray800" fontWeight="medium" textAlign="center">
                        신고가 접수되었습니다.
                    </Subtitle4>
                </MessageWrapper>
            ) : (
                <InputWrapper>
                    <SelectInput
                        as="textarea"
                        style={{
                            width: '100%',
                            minHeight: '40%',
                            padding: '8px 16px',
                            resize: 'none',
                        }}
                        value={reason}
                        onChange={(e) => setReason(e.target.value)}
                        placeholder="신고 사유를 선택해주세요."
                        inputSize="large"
                    />
                </InputWrapper>
            )}
        </Container>
    );
};

export default Declare;

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const MessageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 80%;
`;

const InputWrapper = styled.div`
    padding: 16px;
    height: 100%;
`;
