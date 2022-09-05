import type { NextPage } from "next";
import NoticeLayout from "../components/noticeControlPanel/NoticeLayout";
import { ModalProvider } from "../contexts/modal";

const Notice: NextPage = () => {
    return (
        <ModalProvider>
            <NoticeLayout />
        </ModalProvider>
    );
};

export default Notice;
