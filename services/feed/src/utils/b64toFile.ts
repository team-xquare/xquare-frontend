export const b64toFile = (base64: string) =>
    fetch(`${base64}`)
        .then((res) => res.blob())
        .then((blob) => {
            return new File([blob], 'Filename.png', { type: 'image/png' });
        });
