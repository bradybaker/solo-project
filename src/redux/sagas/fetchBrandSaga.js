import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchUserBrand(action) {
    try {
        const response = yield axios.get(`/api/brand/${action.payload}`)
        yield put({ type: 'SET_USER_BRAND', payload: response.data })
    } catch (error) {
        console.log('Error in fetchBrand Saga', error)
    }
}

function* fetchAllBrand() {
    try {
        const response = yield axios.get(`/api/brand`)
        yield put({ type: 'SET_ALL_BRAND', payload: response.data })
    } catch (error) {
        console.log('Error in fetchBrand Saga', error)
    }
}

function* fetchBrands() {
    yield takeLatest('FETCH_USER_BRAND', fetchUserBrand)
    yield takeLatest('FETCH_ALL_BRAND', fetchAllBrand)
}

export default fetchBrands;