import type { NextPage } from 'next';
import PointLayout from '../components/pointControlPanel/PointLayout';
import { ModalProvider } from '../contexts/modal';

const Point: NextPage = () => {
    return (
        <ModalProvider>
            <PointLayout />
        </ModalProvider>
    );
};

export default Point;
