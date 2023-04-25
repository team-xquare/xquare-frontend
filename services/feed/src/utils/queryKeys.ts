export const queryKeys = {
    getFeedList: (categoryId?: string, dateTime?: string) => `?category=${categoryId || ''}${dateTime ? `&dateTime=${dateTime}` : ''}`,
    getCategoryList: () => '/category',
    getComment: (feedId: string) => `/comments/${feedId}`,
    getPermissions: (categoryKey: string) => `/access-management/type/${categoryKey}`,
    setFeedLike: (feedId: string) => `/likes/${feedId}`,
};
