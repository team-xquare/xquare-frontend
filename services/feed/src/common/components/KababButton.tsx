import Image from 'next/image';
import kababMenu from '../../assets/kebabMenu.png';
import { useBridgeHandler } from '@shared/xbridge';

interface KababButtonProps<T extends string> {
    onClick: (str: T) => void;
    menu: ReadonlyArray<T>;
}

const KababButton = <T extends string>({ onClick, menu }: KababButtonProps<T>) => {
    const kebabOnClick = useBridgeHandler(
        'actionSheet',
        (e) => {
            onClick(menu[e.detail.index]);
        },
        { menu: menu as unknown as string[] },
    );
    return <Image src={kababMenu} onClick={kebabOnClick} width={24} height={24} priority />;
};

export default KababButton;
