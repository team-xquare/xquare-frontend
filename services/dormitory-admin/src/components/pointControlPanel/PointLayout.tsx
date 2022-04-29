import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import PointList from './PointList';
import PointHistory from './PointHistory';
import PointRule from './PointRule';
import { SortProvider } from '../../contexts/sort';
import { SelectedUserIds, Student } from '../../apis/types';
import { useKeydown } from '../../hooks/useKeydown';

const PointLayout = () => {
    const [selectedUserIds, setSUI] = useState<SelectedUserIds>({});
    const prevClickedUserId = useRef<string | null>(null);
    const prevMultiSelectedUserId = useRef<string | null>(null);
    const isCtrlKeydown = useKeydown("Control");
    const isShiftKeydown = useKeydown("Shift");

    const pointItemOnClick = (id: string, secondParam: boolean | Student[]) => {
        if(isShiftKeydown && prevClickedUserId.current && Array.isArray(secondParam)) {
            const firstIndex = secondParam.findIndex(student => student.id === prevClickedUserId.current);
            let secondIndex: number = -1;
            if(prevMultiSelectedUserId.current && prevMultiSelectedUserId.current !== "") secondIndex = secondParam.findIndex(student => student.id === prevMultiSelectedUserId.current);
            const prevSlicedStudents = secondParam.slice(Math.min(firstIndex, secondIndex), Math.max(firstIndex, secondIndex) + 1);
            secondIndex = secondParam.findIndex(student => student.id === id);
            const slicedStudents = secondParam.slice(Math.min(firstIndex, secondIndex), Math.max(firstIndex, secondIndex) + 1);
            setSUI(prev => ({ 
                ...prev, 
                ...Object.fromEntries(prevSlicedStudents.map(student => [student.id, false])), 
                ...Object.fromEntries(slicedStudents.map(student => [student.id, true])) 
            }));
            prevMultiSelectedUserId.current = id;
            return;
        } else if(selectedUserIds[id]) {
            console.log(prevMultiSelectedUserId.current);
            if(prevMultiSelectedUserId.current) {
                setSUI(prev => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, false])), [id]: true }));
                prevMultiSelectedUserId.current = null;
                prevClickedUserId.current = id;
                return;
            } else {
                setSUI(prev => ({ ...prev, [id]: false }));
                prevClickedUserId.current = null;
                return;
            }
        } else if(secondParam === true || isCtrlKeydown) {
            setSUI(prev => ({ ...prev, [id]: true }));
            prevMultiSelectedUserId.current = id;
        } else {
            setSUI(prev => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, false])), [id]: true }));
            prevMultiSelectedUserId.current = null;
        }

        prevClickedUserId.current = id;
    }

    return (
        <SortProvider>
            <PointContainer>
                <PointList setId={setSUI} id={selectedUserIds} onClick={pointItemOnClick} />
                <PointHistory id={selectedUserIds} />
                <PointRule id={selectedUserIds} />
            </PointContainer>
        </SortProvider>
    );
}

const PointContainer = styled.section`
    width: 100%;
    height: 100%;
    padding: 74px 60px 0 60px;
    display: grid;
    grid-template-columns: 800px minmax(0, 1fr) minmax(0, 1fr);
    grid-template-rows: 100%;
    grid-gap: 20px;
`;

export default PointLayout;