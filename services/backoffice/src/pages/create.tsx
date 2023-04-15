import styled from '@emotion/styled';
import { Body1, Button, Select, Subtitle3 } from '@semicolondsm/ui';
import React from 'react';
import { Flex } from '../components/common/Flex';
import Input from '../components/common/Input';

const CreatePage = () => {
    return (
        <Container direction="column" gap={36}>
            <Flex direction="column" gap={12}>
                <Flex direction="column" gap={2}>
                    <Subtitle3 fontWeight="bold">서비스 추가</Subtitle3>
                    <Body1 color="gray800">서비스를 등록하면 심사 후 추가됩니다.</Body1>
                </Flex>
                <Flex direction="column" gap={36}>
                    <Flex direction="column" gap={12}>
                        <Input placeholder="서비스 명" inputSize="large" />
                        <Input placeholder="서비스 URL" inputSize="large" />
                    </Flex>
                    <Input placeholder="카테고리" inputSize="large" />
                </Flex>
            </Flex>
            <CustomButton fill="purple" fullWidth>
                서비스 추가
            </CustomButton>
        </Container>
    );
};

export default CreatePage;

const Container = styled(Flex)`
    max-width: 840px;
    margin: 0 auto;
    padding: 24px;
`;

const CustomButton = styled(Button)`
    border-radius: 4px;

    & div {
        font-weight: 400;
    }
`;
