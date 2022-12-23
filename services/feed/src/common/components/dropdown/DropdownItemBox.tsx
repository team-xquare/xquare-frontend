import styled from '@emotion/styled';
import { FlexCol } from '../Flexbox';
import DropdownItem from './DropdownItem';
//@todo onClick 타입 추론 더 빡빡하게 하기
export interface DropdownItemBoxProps<T extends string, P> {
    items: ReadonlyArray<T>;
    props?: Record<T, P>;
    onClick?: (item: T, props?: P) => void;
    className?: string;
    disableArr?: ReadonlyArray<T>;
}

const DropdownItemBox = <T extends string, P>({
    items = [],
    props,
    onClick,
    className,
    disableArr = [],
}: DropdownItemBoxProps<T, P>) => {
    return (
        <>
            {!!items.length ? (
                <DropdownBoxContainer className={className}>
                    {items.map((item, idx) => (
                        <DropdownItem
                            key={idx}
                            onClick={() => onClick?.(item, props?.[item])}
                            isActive={!disableArr.includes(item)}>
                            {item}
                        </DropdownItem>
                    ))}
                </DropdownBoxContainer>
            ) : (
                <></>
            )}
        </>
    );
};

const DropdownBoxContainer = styled(FlexCol)`
    position: absolute;
    left: 0;
    top: 40px;
    padding: 16px;
    gap: 20px;
    min-width: 120px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    box-shadow: 0px 2px 8px ${({ theme }) => theme.colors.gray100};
`;

export default DropdownItemBox;
