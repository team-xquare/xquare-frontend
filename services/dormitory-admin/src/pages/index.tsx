import type { GetServerSideProps, NextPage } from 'next';
import MainLayout from '../components/main/MainLayout';
import { ModalProvider } from '../contexts/modal';

const Main: NextPage = () => {
    return (
        // <ModalProvider>
        //     <MainLayout />
        // </ModalProvider>
        <></>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            permanent: false,
            destination: '/point',
        },
    };
};

export default Main;
