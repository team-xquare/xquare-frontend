export type FeedType = {
    attachments_url: string[];
    comment_count: number;
    content: string;
    created_at: string;
    feed_id: string;
    is_like: boolean;
    is_mine: boolean;
    like_count: number;
    name: string;
    profile: string;
    authority_type: string;
};

export interface GetFeedListResponseDto {
    feeds: FeedType[];
}

export type FeedDto = {
    feed_id: string;
    title: string;
    content: string;
    created_at: string;
    profile: string;
    name: string;
    type: string;
    is_mine: boolean;
    attachments_url: string[];
    category_id: string;
};

export interface FeedRequestParams {
    feed_id: string;
    content: string;
}
