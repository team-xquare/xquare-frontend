import type { NextPage } from 'next';
import Point from '../components/pointControlPanel';
import { ModalProvider } from '../contexts/modal';
import { SortProvider } from '../contexts/sort';

const PointPage: NextPage = () => {
    return (
        <ModalProvider>
            <SortProvider>
                <Point />
            </SortProvider>
        </ModalProvider>
    );
};

export default PointPage;
