import axios from 'axios';

interface PostSignupProps {
    verification_code: string;
    account_id: string;
    profile_file_name: string;
    password: string;
}

export const postSignup = async ({
    verification_code,
    account_id,
    profile_file_name,
    password,
}: PostSignupProps) => {
    const outingSignup = await axios.post(
        `${
            process.env.NODE_ENV === 'development'
                ? 'https://stag-api.xquare.app'
                : 'https://api.xquare.app'
        }/users`,
        {
            verification_code,
            account_id,
            profile_file_name,
            password,
        },
    );
    return outingSignup;
};
