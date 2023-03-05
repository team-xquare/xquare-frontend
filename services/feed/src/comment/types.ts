export type CommentType = {
    comment_id: string;
    content: string;
    name: string;
    profile: string;
    updated_at: string;
};

export interface GetCommentResponseType {
    comments: CommentType[];
}

export interface AddCommentRequestType {
    feed_uuid: string;
    content: string;
}