import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Body2 } from './typography';
import OutSideClickHandler from 'react-outside-click-handler';

export interface DropDownProps<T> {
    items: ReadonlyArray<T>;
    value?: Readonly<T>;
    overflowOptionDirection?: DirectionList;
    placeholder: string;
    onChange?: (value: T) => void;
}

type DirectionList = 'right' | 'left' | 'center';

const direction = {
    center: 'center',
    left: 'flex-end',
    right: 'flex-start',
};

export const Select = <T extends string>({
    items,
    value,
    overflowOptionDirection = 'right',
    onChange,
    placeholder,
}: DropDownProps<T>) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [text, setText] = useState<T | string>(value ? value : placeholder);
    return (
        <OutSideClickHandler onOutsideClick={() => setIsOpen(false)}>
            <SelectButtonBox
                overflowOptionDirection={overflowOptionDirection}
                onClick={() => setIsOpen(!isOpen)}>
                <SelectMainBox>
                    <Body2 className="select-title">{text}</Body2>
                    <DropDownIcon>
                        <svg
                            width="12"
                            height="6"
                            viewBox="0 0 12 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0L6 6L12 0H0Z" fill="#98959E" />
                        </svg>
                    </DropDownIcon>
                </SelectMainBox>
                <DropDownMenuWrapper isVisiable={isOpen}>
                    {items.map((title, i) => (
                        <DropDownOption
                            key={i}
                            onClick={() => {
                                if (onChange) onChange(title);
                                setText(title);
                            }}>
                            <Body2 className="select-title">{title}</Body2>
                        </DropDownOption>
                    ))}
                </DropDownMenuWrapper>
            </SelectButtonBox>
        </OutSideClickHandler>
    );
};

const SelectMainBox = styled.div`
    padding: 0 12px;
    display: flex;
    align-items: center;
    height: 36px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.gray100};
    color: ${({ theme }) => theme.colors.gray700};
    width: 100%;
    .select-title {
        width: 60px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    cursor: pointer;
    :hover,
    :active {
        background: ${({ theme }) => theme.colors.gray300};
    }
`;

const SelectButtonBox = styled.div<{ overflowOptionDirection: DirectionList }>`
    border-radius: 4px;
    width: 104px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: ${({ overflowOptionDirection }) => direction[overflowOptionDirection]};
`;

const DropDownIcon = styled.div`
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 13px;
    top: 10px;
`;
const DropDownMenuWrapper = styled.div<{ isVisiable: boolean }>`
    display: ${({ isVisiable }) => (isVisiable ? 'block' : 'none')};
    position: absolute;
    min-width: 100%;
    z-index: ${Math.pow(10, 10)};
    border: 1px solid ${({ theme }) => theme.colors.gray300};
    top: 40px;
    padding: 4px 0;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.white};
`;
const DropDownOption = styled.div`
    height: 28px;
    padding: 0 15px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
        background: ${({ theme }) => theme.colors.purple400};
        .select-title {
            color: ${({ theme }) => theme.colors.white};
            white-space: nowrap;
        }
    }
`;
