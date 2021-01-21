import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* unfollowUser(action) {
    try {
        yield axios.delete(`/api/friend/${action.payload.friendID}`)
        yield put({ type: 'FETCH_FOLLOWED_USERS', payload: action.payload.userID })
    } catch (error) {
        console.log('Error in deleteUserBrand Saga', error)
    }
}

function* unfollowUserSaga() {
    yield takeLatest('UNFOLLOW_USER', unfollowUser)
}

export default unfollowUserSaga;