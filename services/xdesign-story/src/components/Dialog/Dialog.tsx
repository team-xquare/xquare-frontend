import styled from '@emotion/styled';
import { Text } from '@/components/Text';
import { DialogProps } from './Dialog.type';

const Background = styled.div`
    width: inherit;
    height: inherit;
    background: rgba(231, 224, 236, 0.1);
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
`;

const Container = styled.div`
    width: 358px;
    background: ${({ theme }) => theme.color.Palette.white};
    padding: 12px 16px;
    border-radius: 16px;
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
`;

const TextBlock = styled.div`
    display: flex;
    flex-direction: column;
    word-break: break-word;
    > .title {
        font-weight: 700;
    }
    > .content {
        font-weight: 500;
    }
`;

const ButtonBlock = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    > button {
        width: 98px;
        height: 48px;
        border: none;
        cursor: pointer;
    }
    > .left {
        color: ${({ theme }) => theme.color.Palette.black};
        border: none;
        background: ${({ theme }) => theme.color.Palette.white};
    }
    > .right {
        border-radius: 12px;
        color: ${({ theme }) => theme.color.Palette.white};
        background: ${({ theme }) => theme.color.lightTheme.Primary};
    }
`;

export const Dialog = ({
    title,
    content,
    leftButton,
    rightButton,
    setIsActiveDialog,
}: DialogProps) => {
    return (
        <Background onClick={() => setIsActiveDialog(false)}>
            <Container onClick={(e) => e.stopPropagation()}>
                <TextBlock>
                    <Text typograghy="Title" size="Large" className="title">
                        {title}
                    </Text>
                    <Text typograghy="Body" size="Medium" className="content">
                        {content}
                    </Text>
                </TextBlock>
                <ButtonBlock>
                    <button className="left" onClick={leftButton?.onClick}>
                        {leftButton?.text}
                    </button>
                    <button className="right" onClick={rightButton.onClick}>
                        {rightButton.text}
                    </button>
                </ButtonBlock>
            </Container>
        </Background>
    );
};
