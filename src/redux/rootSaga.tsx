import { all } from 'redux-saga/effects';
import { getDataWatcher } from './sagas';

export default function* rootSaga() {
    yield all([
        getDataWatcher(),
    ]);
}