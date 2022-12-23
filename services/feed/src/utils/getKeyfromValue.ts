export const getKeyFromValue = <T extends object>(obj: T, value: T[keyof typeof obj]) => {
    const objectKeys = Object.keys(obj) as (keyof typeof obj)[];
    return objectKeys.find((key) => obj[key] === value)!;
};
