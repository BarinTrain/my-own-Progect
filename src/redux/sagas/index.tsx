import { call, put, takeEvery} from 'redux-saga/effects';

import { Data } from '../../constants/intrefase';
import { REQUEST } from '../../constants/request';
import * as types from '../types';

interface Props {
    type: typeof types.USER_CHECKING;
    currentPage: number
}

export function* getDataWorcker({ currentPage }: Props ) {
    try {
        const data: { data: Data } = yield call(REQUEST, currentPage);
        yield put({ type: types.SET_DATA_RECEIVED, data });
        yield put({ type: types.IS_DATA_CHECKING, payload: true });
    }
    catch (e) {
        console.log(e);
    }
}

export function* getDataWatcher() {
    yield takeEvery(types.USER_CHECKING, getDataWorcker);   
}