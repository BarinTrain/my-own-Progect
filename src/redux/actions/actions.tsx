import * as types from '../types'
import { Data } from '../../constants/intrefase'

export const getData = (data: string) => {
    return {
        type: types.SET_DATA_RECEIVED,
        data
    }
}

export const sendUser = (data: Data[]) => {
    return {
        type: types.USER_SEND,
        data
    }
}

export const checkData = (currentPage: number) => {
    return {
        type: types.USER_CHECKING,
        currentPage
    }
}

export const isDataChecked = (payload: boolean) => {
    return {
        type: types.IS_DATA_CHECKING,
        payload
    }
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: types.SET_CURRENT_PAGE,
        currentPage
    }
}
