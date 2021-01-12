import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addBrand(action) {
    try {
        yield axios.post(`/api/brand/${action.payload.id}`, action.payload)
        yield put({ type: 'FETCH_USER_BRAND' })
    } catch (error) {
        console.log('Error in addBrand Saga', error)
    }
}

function* addBrandSaga() {
    yield takeLatest('ADD_BRAND', addBrand)
}

export default addBrandSaga;