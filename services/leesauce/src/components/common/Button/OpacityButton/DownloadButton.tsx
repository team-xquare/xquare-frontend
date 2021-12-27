import { useCallback } from 'react';
import JSZip from 'jszip';
import { download, imgToDataURLWithRatio } from '../../../../utils/functions';
import BaseOpacityButton from './BaseOpacityButton';

interface DonwloadButtonProps {
    name: string;
    url: string;
}
const DonwloadButton = ({ name, url }: DonwloadButtonProps) => {
    const fileExtn = url.substring(url.lastIndexOf('/') + 1, url.length).split('.')[1];

    const downloadFile = useCallback(async () => {
        const img = new Image();
        img.src = url;
        img.setAttribute('crossorigin', 'anonymous');
        img.onload = async () => {
            const zip = new JSZip();
            const dataURL = [0.3333333333333333333333333333, 0.6666666666666666666666666666, 1].map(
                (item) => imgToDataURLWithRatio(img, item),
            );
            dataURL.forEach((item, idx) => {
                zip.file(`${name}@x${idx + 1}.${fileExtn}`, item.split('base64,')[1], {
                    base64: true,
                });
            });
            const resZip = await zip.generateAsync({ type: 'blob' });
            const downloadUrl = URL.createObjectURL(resZip);
            download(downloadUrl, name);
        };
    }, [url, name]);

    return <BaseOpacityButton onClick={downloadFile}>Download</BaseOpacityButton>;
};

export default DonwloadButton;
