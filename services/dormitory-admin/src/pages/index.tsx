import type { NextPage } from "next";
import MainLayout from "../components/main/MainLayout";
import { ModalProvider } from '../contexts/modal';

const Home: NextPage = () => {
    return (
        <ModalProvider>
            <MainLayout />
        </ModalProvider>
    );
};

export default Home;
