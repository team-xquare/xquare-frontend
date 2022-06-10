import { Select as SDSSelect } from '@semicolondsm/ui';
import styled from '@emotion/styled';
import { DropDownProps } from '@semicolondsm/ui/dist/components/Select';

const Select = <T extends string>(props: DropDownProps<T>) => {
    return (
        <SelectContainer>
            <SDSSelect {...props} />
        </SelectContainer>
    );
};

export default Select;

const SelectContainer = styled.div`
    & div {
        background-color: #212121 !important;
        border: 1px solid #212121;
    }
`;
