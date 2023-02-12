export const getCategoryFilter = state => state.filters.category;

export const getSearchValueFilter = state => state.filters.searchValue;

export const getNotices = state => state.notices.items;

export const getOneNotice = state => state.notices.oneNotice;

export const getNoticesIsLoading = state => state.notices.isLoading;

export const getNoticesError = state => state.notices.error;
