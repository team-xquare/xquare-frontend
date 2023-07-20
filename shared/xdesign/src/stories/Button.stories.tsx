import React from 'react';
import { Button, Title3 } from '../components';
import styled from '@emotion/styled';
export default {
    title: 'components/Button',
    component: Button,
};

export const Default = () => {
    return (
        <>
            <Title3>default button</Title3>
            <Button>default button</Button>
        </>
    );
};

const BeFillWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

const ColorWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

const BorderWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const Fill = () => {
    return (
        <>
            <Title3>Fill</Title3>
            <FillWrapper>
                <ColorWrapper>
                    <Button size="sm" fill="default">
                        default
                    </Button>
                    <Button size="sm" fill="default" disabled={true}>
                        disable-default
                    </Button>
                    <Button size="sm" loading={true} fill="default">
                        loading-default
                    </Button>
                </ColorWrapper>
                <ColorWrapper>
                    <Button size="sm" fill="purple">
                        purple
                    </Button>
                    <Button size="sm" fill="purple" disabled={true}>
                        disable-purple
                    </Button>
                    <Button size="sm" loading={true} fill="purple">
                        loading-purple
                    </Button>
                </ColorWrapper>
                <ColorWrapper>
                    <Button size="sm" fill="purpleLight">
                        default
                    </Button>
                    <Button size="sm" fill="purpleLight" disabled={true}>
                        disable-default
                    </Button>
                    <Button size="sm" loading={true} fill="purpleLight">
                        loading-default
                    </Button>
                </ColorWrapper>
            </FillWrapper>
            <Title3>Link</Title3>
            <LinkWrapper>
                <Button fill="link" size="sm">
                    default-link
                </Button>
                <Button fill="link" size="sm" disabled={true}>
                    disabled-link
                </Button>
                <Button fill="link" size="sm" loading={true}>
                    loading-link
                </Button>
            </LinkWrapper>
            <Title3>BeFill</Title3>
            <BeFillWrapper>
                <ColorWrapper>
                    <Button fill="bnDefault" size="sm">
                        bnDefault
                    </Button>
                    <Button fill="bnDefault" disabled={true} size="sm">
                        disable-bnDefault
                    </Button>
                    <Button fill="bnDefault" loading={true} size="sm">
                        loading-bnDefault
                    </Button>
                </ColorWrapper>
                <ColorWrapper>
                    <Button fill="bnPurple" size="sm">
                        bnPurple
                    </Button>
                    <Button fill="bnPurple" disabled={true} size="sm">
                        disable-bnPurple
                    </Button>
                    <Button fill="bnPurple" loading={true} size="sm">
                        loading-bnPurple
                    </Button>
                </ColorWrapper>
            </BeFillWrapper>
            <Title3>Border</Title3>
            <BorderWrapper>
                <Button fill="border" size="sm">
                    default border
                </Button>
                <Button fill="border" disabled={true} size="sm">
                    disabled border
                </Button>
                <Button fill="border" loading={true} size="sm">
                    loading border
                </Button>
            </BorderWrapper>
        </>
    );
};

const FillWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
`;

const LinkWrapper = styled.div`
    display: flex;
    gap: 10px;
`;

export const Size = () => {
    return (
        <>
            <Title3>Size</Title3>
            <SizeWrapper>
                <Button size="sm">sm-button</Button>
                <Button size="md">md-button</Button>
                <Button size="lg">lg-button</Button>
                <Button fullWidth>Full Size Button</Button>
            </SizeWrapper>
        </>
    );
};

const SizeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
`;
