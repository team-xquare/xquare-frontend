import React, { useState } from 'react';
import styled from '@emotion/styled';
import PointList from './PointList';
import PointHistory from './PointHistory';
import PointRule from './PointRule';

const PointLayout = () => {
    const [selectedUserId, setSUI] = useState<string | undefined>(undefined);

    return (
        <PointContainer>
            <PointList id={selectedUserId} onClick={(id: string) => setSUI(id)} />
            <PointHistory id={selectedUserId} />
            <PointRule />
        </PointContainer>
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