export type Authority = {
    authority_id: string;
    authority_name: string;
    authority: string;
};

export interface GetAuthorityResponse {
    authority_list: Authority[];
}

export interface PostFeedResponse {
    title: string;
    content: string;
    category_id: string;
    authority_type: string;
}
