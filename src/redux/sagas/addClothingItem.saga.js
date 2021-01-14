import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* addClothingItem(action) {
    try {
        yield axios.post(`/api/closet`, action.payload)
        yield put({ type: 'FETCH_USER_CLOTHING', payload: action.payload.brandUrlID })
    } catch (error) {
        console.log('Error in addBrand Saga', error)
    }
}

function* addClothingItemSaga() {
    yield takeLatest('ADD_USER_CLOTHING_ITEM', addClothingItem)
}

export default addClothingItemSaga;