import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* deleteUserClothingItem(action) {
    try {
        yield axios.delete(`/api/closet/${action.payload.id}`)
        yield put({ type: 'FETCH_USER_CLOTHING', payload: action.payload.brandUrlID })
    } catch (error) {
        console.log('Error in deleteUserClothingItem Saga', error)
    }
}

function* deleteUserClothingItemSaga() {
    yield takeLatest('DELETE_USER_CLOTHING_ITEM', deleteUserClothingItem)
}

export default deleteUserClothingItemSaga;