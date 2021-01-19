import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteUserBrand(action) {
    try {
        yield axios.delete(`/api/brand/${action.payload.brandID}`)
        yield put({ type: 'FETCH_USER_BRAND', payload: action.payload.userID })
    } catch (error) {
        console.log('Error in deleteUserBrand Saga', error)
    }
}

function* deleteUserBrandSaga() {
    yield takeLatest('DELETE_USER_BRAND', deleteUserBrand)
}

export default deleteUserBrandSaga;