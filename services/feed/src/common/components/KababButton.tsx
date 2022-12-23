import Image from 'next/image';
import kababMenu from '../../assets/kebabMenu.png';

interface KababButtonProps {
    onClick: () => void;
}

const KababButton = ({ onClick }: KababButtonProps) => {
    return <Image src={kababMenu} onClick={onClick} width={24} height={24} priority />;
};

export default KababButton;
