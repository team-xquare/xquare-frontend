import { Body2, Subtitle1 } from '@semicolondsm/ui';
import styled from '@emotion/styled';
import Select from '../common/Select';
import Button from '../common/Button';
import Input from '../common/Input';
import { FlexCol } from '../common/Flexbox';

const Create = () => {
    return (
        <CreateContainer gap={40}>
            <Subtitle1 fontWeight="bold">서비스 추가</Subtitle1>
            <FlexCol gap={24} fullWidth>
                <FlexCol gap={12} fullWidth>
                    <Body2 fontWeight="medium">Service Name</Body2>
                    <Input fullWidth placeholder="서비스명을 입력해 주세요" />
                </FlexCol>
                <FlexCol gap={12} fullWidth>
                    <Body2 fontWeight="medium">SubDomain</Body2>
                    <Input fullWidth placeholder="서브도메인을 입력해 주세요" />
                </FlexCol>
                <FlexCol gap={12} fullWidth>
                    <Body2 fontWeight="medium">Prefix</Body2>
                    <Input fullWidth placeholder="prefix를 입력해 주세요" />
                </FlexCol>
                <FlexCol gap={12}>
                    <Body2 fontWeight="medium">Container Port</Body2>
                    <Input fullWidth placeholder="포트를 입력해 주세요" />
                </FlexCol>
                <FlexCol gap={12}>
                    <Body2 fontWeight="medium">Service Type</Body2>
                    <Select items={['service', 'allow', 'private']} placeholder="선택" />
                </FlexCol>

                <Button size="md" fullWidth>
                    등록하기
                </Button>
            </FlexCol>
        </CreateContainer>
    );
};

export default Create;

const CreateContainer = styled(FlexCol)`
    padding: 30px 0;
`;
