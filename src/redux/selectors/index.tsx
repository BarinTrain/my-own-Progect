import { RootState } from "../rootReducer"

export const receiveSelector = (state: RootState) => state.receivedData;
export const sendUser = (state: RootState) => state.sendUser;
export const isDataFetchingSelector = (state: RootState) => state.isDataFetching;
export const isFetchingError = (state: RootState) => state.isDataFetchError;
export const setCurrentPage = (state: RootState) => state.currentPage;

export const stateSelector = (state: RootState) => state;
