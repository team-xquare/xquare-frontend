export const copyToClibboard = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    textArea.setSelectionRange(0, 9999);
    document.execCommand('copy');
    document.body.removeChild(textArea);
};

export const download = (downloadURL: string, name: string) => {
    const a = document.createElement('a');
    a.href = downloadURL;
    a.download = name;
    a.click();
    a.remove();
};

export const imgToDataURLWithRatio = (img: HTMLImageElement, ratio: number) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = Math.round(img.width * ratio);
    canvas.height = Math.round(img.height * ratio);
    ctx?.scale(ratio, ratio);
    ctx?.drawImage(img, 0, 0);
    const url = canvas.toDataURL();
    canvas.remove();
    return url;
};
