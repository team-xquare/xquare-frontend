import { Caption, SwitchButton } from '@semicolondsm/ui';
import styled from '@emotion/styled';
import Switch from '../common/Switch';
import Button from '../common/Button';

const Create = () => {
    return (
        <div>
            <Caption>게시</Caption>
            <Switch />
            <Button size="md" fullWidth>
                등록하기
            </Button>
        </div>
    );
};

export default Create;
