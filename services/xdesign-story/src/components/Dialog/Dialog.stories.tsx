import styled from '@emotion/styled';
import { useState } from 'react';
import { Dialog } from './Dialog';

export default {
    title: 'Components/Dialog',
    component: Dialog,
};

const Background = styled.div`
    display: flex;
    gap: 30px;
    flex-direction: column;
`;

const Wrapper = styled.div`
    width: 400px;
    height: 200px;
    position: relative;
    background: ${({ theme }) => theme.color.lightTheme.Background};
`;

export const Default: React.VFC = () => {
    const [isActiveDialog1, setIsActiveDialog1] = useState<boolean>(true);
    const [isActiveDialog2, setIsActiveDialog2] = useState<boolean>(true);

    const rightButton = {
        onClick: () => alert('RightButtonClick'),
        text: 'Action 1',
    };

    const leftButton = {
        onClick: () => alert('LeftButtonClick'),
        text: 'Action 2',
    };

    return (
        <Background>
            <h1>Dialog</h1>
            <p>
                <h3>Buttons</h3>
                RightButton : 확인, 삭제 등의 주요한 동작입니다 <br />
                LeftButton : 취소 등의 주요하지 않은 동작입니다.
            </p>
            <b>Double Action</b>
            <Wrapper>
                {isActiveDialog1 && (
                    <Dialog
                        setIsActiveDialog={setIsActiveDialog1}
                        title="Title"
                        content="Content"
                        leftButton={leftButton}
                        rightButton={rightButton}
                    />
                )}
            </Wrapper>
            <b>Single Action</b>
            <Wrapper>
                {isActiveDialog2 && (
                    <Dialog
                        setIsActiveDialog={setIsActiveDialog2}
                        title="Title"
                        content="Content"
                        rightButton={rightButton}
                    />
                )}
            </Wrapper>
        </Background>
    );
};
