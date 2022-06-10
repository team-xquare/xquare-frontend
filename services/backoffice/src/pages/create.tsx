import { NextPage } from 'next';
import Create from '../create';
import MainPageTemplate from '../main/MainPageTemplate';

const CreatePage: NextPage = () => {
    return (
        <MainPageTemplate>
            <Create></Create>
        </MainPageTemplate>
    );
};

export default CreatePage;
