export type CategoryType = {
    category_id: string;
    name: string;
    key: string;
};

export interface GetCategoryResponseDto {
    category_list: CategoryType[];
}
