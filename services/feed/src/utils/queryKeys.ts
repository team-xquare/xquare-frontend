export const queryKeys = {
    getFeedList: (categoryId?: string) => `?category=${categoryId || ''}`,
    getCategoryList: () => '/category',
    getComment: (feedId: string) => `/comments/${feedId}`,
    setFeedLike: (feedId: string) => `/likes/${feedId}`,
};
