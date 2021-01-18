import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchFollowedUsers(action) {
    try {
        const response = yield axios.get(`/api/friend/${action.payload}`)
        yield put({ type: 'SET_FOLLOWED_USERS', payload: response.data })
    } catch (error) {
        console.log('Error in fetchBrand Saga', error)
    }
}

function* fetchPublicUsers() {
    try {
        const response = yield axios.get(`/api/friend`)
        yield put({ type: 'SET_PUBLIC_USERS', payload: response.data })
    } catch (error) {
        console.log('Error in fetch public users Saga', error)
    }
}

function* fetchUsersToFollow() {
    yield takeLatest('FETCH_PUBLIC_USERS', fetchPublicUsers)
    yield takeLatest('FETCH_FOLLOWED_USERS', fetchFollowedUsers)
}

export default fetchUsersToFollow;