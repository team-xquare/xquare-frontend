import type { NextPage } from "next";
import MainLayout from "../components/main/MainLayout";
import { ModalProvider } from '../contexts/modal';

const Main: NextPage = () => {
    return (
        <ModalProvider>
            <MainLayout />
        </ModalProvider>
    );
};

export default Main;
