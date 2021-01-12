import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchBrand() {
    try {
        const response = yield axios.get('/api/brand')
        yield put({ type: 'SET_BRAND', payload: response.data })
    } catch (error) {
        console.log('Error in fetchBrand Saga', error)
    }
}

function* fetchUserBrand() {
    yield takeLatest('FETCH_BRAND', fetchBrand)
}

export default fetchUserBrand;