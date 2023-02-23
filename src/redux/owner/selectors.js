export const getOwnerData = state => state.owner.owner.result;

export const getOwnerNoticesData = state => state.owner.notices;

export const getOwnerLoading = state => state.owner.ownerLoading;

export const getOwnerNoticeLoading = state => state.owner.noticesLoading;

export const getOwnerNoticesError = state => state.owner.error;
