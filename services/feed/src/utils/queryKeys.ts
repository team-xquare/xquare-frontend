export const queryKeys = {
    getFeedList: (categoryId?: string) => `?category=${categoryId || ''}`,
    getCategoryList: () => '/category',
    getComment: (feedId: string) => `/comments/${feedId}`,
    getPermissions: (categoryKey: string) => `/access-management/type/${categoryKey}`,
    setFeedLike: (feedId: string) => `/likes/${feedId}`,
};
