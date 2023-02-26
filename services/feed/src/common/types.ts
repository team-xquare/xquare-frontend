export type CategoryType = {
    category_id: string;
    name: string;
};

export interface GetCategoryResponseDto {
    category_list: CategoryType[];
}
