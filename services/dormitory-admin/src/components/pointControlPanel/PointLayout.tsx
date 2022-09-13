import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import PointList from './PointList';
import PointHistory from './PointHistory';
import PointRule from './PointRule';
import { SortProvider } from '../../contexts/sort';
import { SelectedUserIds } from '../../apis/types';
import { useKeydown } from '../../hooks/useKeydown';
import { usePointQuery } from '../../apis/points';
import ModalContainer from '../common/ModalContainer';
import Spinner from '../common/Spinner';

const PointLayout = () => {
    const { data, isLoading, error } = usePointQuery();

    const [selectedUserIds, setSUI] = useState<SelectedUserIds>({});
    const [clickedId, setCI] = useState<{ id: string; }>();
    const isCheckboxRef = useRef<boolean>(false);
    const prevClickedUserId = useRef<string | null>(null);
    const prevMultiSelectedUserId = useRef<string | null>(null);
    const isCtrlKeydown = useKeydown("Control");
    const isShiftKeydown = useKeydown("Shift");

    useEffect(() => {
        if(clickedId) pointItemOnClick(clickedId.id, isCheckboxRef.current);
        isCheckboxRef.current = false;
    }, [clickedId]);

    const pointItemOnClick = (id: string, isCheckbox: boolean) => {
        const nonUndefinedData = data ?? [];

        if(isShiftKeydown && prevClickedUserId.current) {
            const firstIndex = nonUndefinedData.findIndex(student => student.id === prevClickedUserId.current);
            let secondIndex: number = -1;
            if(prevMultiSelectedUserId.current && prevMultiSelectedUserId.current !== null) secondIndex = nonUndefinedData.findIndex(student => student.id === prevMultiSelectedUserId.current);
            const prevSlicedStudents = nonUndefinedData.slice(Math.min(firstIndex, secondIndex), Math.max(firstIndex, secondIndex) + 1);
            secondIndex = nonUndefinedData.findIndex(student => student.id === id);
            const slicedStudents = nonUndefinedData.slice(Math.min(firstIndex, secondIndex), Math.max(firstIndex, secondIndex) + 1);
            setSUI(prev => ({ 
                ...prev, 
                ...Object.fromEntries(prevSlicedStudents.map(student => [student.id, false])), 
                ...Object.fromEntries(slicedStudents.map(student => [student.id, true])) 
            }));
            prevMultiSelectedUserId.current = id;
        } else if(isCtrlKeydown || isCheckbox) {
            setSUI(prev => ({ ...prev, [id]: !prev[id] }));
            prevMultiSelectedUserId.current = id;
            prevClickedUserId.current = id;
        } else if(selectedUserIds[id]) {
            if(prevMultiSelectedUserId.current) {
                setSUI(prev => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, false])), [id]: true }));
                prevMultiSelectedUserId.current = null;
                prevClickedUserId.current = id;
            } else {
                setSUI(prev => ({ ...prev, [id]: false }));
                prevClickedUserId.current = null;
            }
        } else {
            setSUI(prev => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, false])), [id]: true }));
            prevMultiSelectedUserId.current = null;
            prevClickedUserId.current = id;
        }
    }

    const onClick = useCallback((id: string, isCheckbox?: boolean) => {
        isCheckboxRef.current = isCheckbox ?? false;
        setCI({ id });
    }, []);

    return (
        <SortProvider>
            <ModalContainer>
                상벌점 부여중 입니다...
                <Spinner />
            </ModalContainer>
            <PointContainer>
                <PointList 
                    id={selectedUserIds} 
                    setId={setSUI} 
                    onClick={onClick} 
                    students={data ?? []}
                />
                <PointRule id={selectedUserIds} />
                <PointHistory id={selectedUserIds} />
            </PointContainer>
        </SortProvider>
    );
}

const PointContainer = styled.section`
    width: 100%;
    height: 100%;
    padding: 74px 60px 0 60px;
    display: grid;
    grid-template-columns: 800px minmax(400px, 1fr);
    grid-template-rows: 1fr 1fr;
    grid-gap: 40px;
    overflow-x: auto;
`;

export default PointLayout;