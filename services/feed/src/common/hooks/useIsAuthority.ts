import useAuthorityCategory from '../../write/hooks/useAuthorityCategory';

const useIsAuthority = () => {
    const authorities = useAuthorityCategory();
    return !!authorities[0].key;
};

export default useIsAuthority;
