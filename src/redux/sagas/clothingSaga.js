import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUserClothing(action) {
    try {
        const response = yield axios.get(`/api/closet/${action.payload.userID}/${action.payload.brandID}`)
        yield put({ type: 'SET_USER_CLOTHING', payload: response.data })
    } catch (error) {
        console.log('Error in fetchUserClothing Saga', error)
    }
}

function* clothingSaga() {
    yield takeLatest('FETCH_USER_CLOTHING', fetchUserClothing)
}

export default clothingSaga