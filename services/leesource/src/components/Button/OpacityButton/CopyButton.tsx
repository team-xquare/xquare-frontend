import { FC, MouseEvent, useState } from 'react';
import OpacityButton from './BaseOpacityButton';

interface Props {
    url: string;
}

const CopyButton: FC<Props> = ({ url }) => {
    const [isCopy, setIsCopy] = useState<boolean>(false);

    const copyToClibboard = () => {
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        textArea.setSelectionRange(0, 9999);
        document.execCommand('copy');
        document.body.removeChild(textArea);

        setIsCopy(true);
    };
    return (
        <OpacityButton onClick={copyToClibboard}>{isCopy ? 'Copeid' : 'Copy URL'}</OpacityButton>
    );
};

export default CopyButton;
