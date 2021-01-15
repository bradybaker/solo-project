import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* editUserClothingItem(action) {
    try {
        yield axios.put(`/api/closet/${action.payload.id}`, action.payload)
        yield put({ type: 'FETCH_USER_CLOTHING', payload: action.payload.brandUrlID })
    } catch (error) {
        console.log('Error in editUserClothingItem Saga', error)
    }
}

function* editUserClothingItemSaga() {
    yield takeLatest('EDIT_USER_CLOTHING_ITEM', editUserClothingItem)
}

export default editUserClothingItemSaga;