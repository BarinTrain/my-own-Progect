import * as types from "./types";
import { Data } from '../constants/intrefase'

interface InitialData {
    receivedData: Data[];
    sendUser: Data[];
    isDataFetching: boolean;
    isDataFetchError: boolean;
    currentPage: number;
}

interface Props {
    type: string;
    payload: boolean;
    data: any;
    currentPage: number
}

const initialData: InitialData = {
    receivedData: [],
    sendUser: [],
    isDataFetching: false,
    isDataFetchError: false,
    currentPage: 0,
}

function RootReducer(state = initialData, { type, payload, data, currentPage }: Props) {

    switch (type) {
        case types.SET_DATA_RECEIVED:
            return {
                ...state,
                receivedData: state.receivedData.concat(data.data.results)
            }
        case types.USER_SEND:
            return {
                ...state,
                sendUser: data!
            }
        case types.IS_DATA_CHECKING:
            return {
                ...state,
                isDataFetching: (payload as boolean),
                isDataFetchError: false
            }
        case types.USER_CHECKING:
            return {
                ...state,
                currentPage: currentPage,
            }

        default:
            return state
    }
}

export type RootState = ReturnType<typeof RootReducer>

export default RootReducer;

