interface GoodProps {
    isBlack?: boolean;
}
const Good = ({ isBlack }: GoodProps) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4238 4.26548C10.0922 4.43129 9.84959 4.73374 9.75966 5.09343L8.72107 9.24779V19.8702H16.4465C17.57 19.8702 18.5378 19.0784 18.7603 17.9771L19.9524 12.0758C20.2478 10.6138 19.1301 9.24779 17.6386 9.24779L12.2619 9.24779V5.40147C12.2619 4.45732 11.2683 3.84325 10.4238 4.26548ZM4 9.24779H7.5408V19.8702H4V9.24779Z"
                fill={!!isBlack ? '#9651fa' : '#DBD7E0'}
            />
        </svg>
    );
};

export default Good;
