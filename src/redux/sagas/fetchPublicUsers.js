import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// function* (action) {
//     try {
//         const response = yield axios.get(`/api/brand/${action.payload}`)
//         yield put({ type: 'SET_USER_BRAND', payload: response.data })
//     } catch (error) {
//         console.log('Error in fetchBrand Saga', error)
//     }
// }

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
    // yield takeLatest('FETCH_ALL_BRAND', fetchAllBrand)
}

export default fetchUsersToFollow;