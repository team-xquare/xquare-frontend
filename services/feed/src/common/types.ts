export type CategoryType = {
    category_id: string;
    name: string;
    key: string;
    authorities: AuthorityType[];
};

export type AuthorityType = {
    authority: string;
    authority_id: string;
    authority_name: string;
};

export interface GetCategoryResponseDto {
    category_list: CategoryType[];
}
