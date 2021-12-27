import { useCallback } from 'react';
import { FC, MouseEvent, useState } from 'react';
import BaseOpacityButton from './BaseOpacityButton';

interface CopyButtonProps {
    url: string;
}

const CopyButton = ({ url }: CopyButtonProps) => {
    const [isCopy, setIsCopy] = useState<boolean>(false);

    const copyToClibboard = useCallback(() => {
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        textArea.setSelectionRange(0, 9999);
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setIsCopy(true);
    }, [setIsCopy]);

    return (
        <BaseOpacityButton onClick={copyToClibboard}>
            {isCopy ? 'Copeid' : 'Copy URL'}
        </BaseOpacityButton>
    );
};

export default CopyButton;
