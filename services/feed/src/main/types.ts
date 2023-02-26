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
    type: string;
};

export interface GetFeedListResponseDto {
    feeds: FeedType[];
}
