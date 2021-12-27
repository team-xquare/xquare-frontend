export type ResourceType = 'icon' | 'logo';

export interface ResourceData {
    name: string;
    url: string;
    type: ResourceType;
}

export interface ResourceResponse {
    leeSauces: ResourceData[];
}

export interface ResourceFormData {
    name: string;
    file: File;
}
