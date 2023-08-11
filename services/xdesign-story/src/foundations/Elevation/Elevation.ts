import { ElevationKeyType, ElevationType } from './Elevation.types';

export const elevation: ElevationType = {
    Low: 8,
    Medium: 16,
    High: 24,
};

export const elevationList: [ElevationKeyType, number][] = Object.entries(elevation) as [
    ElevationKeyType,
    number,
][];
