import React from 'react';
import { Subtitle3 } from '@semicolondsm/ui';

const MainSectionTitle = ({ children }: { children?: React.ReactNode }) => {
    return (
        <div style={{ marginBottom: "16px" }}>
            <Subtitle3>{children}</Subtitle3>
        </div>
    );
}

export default MainSectionTitle;