import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* followUser(action) {
    try {
        yield axios.post(`/api/friend`, action.payload)
        console.log('action payload in add friend', action.payload)
        yield put({ type: 'FETCH_FOLLOWED_USERS' })
    } catch (error) {
        console.log('Error in followUser Saga', error)
    }
}

function* followUserSaga() {
    yield takeLatest('FOLLOW_USER', followUser)
}

export default followUserSaga;