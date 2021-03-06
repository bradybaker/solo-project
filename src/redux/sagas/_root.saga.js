import { all } from 'redux-saga/effects';
import addBrandSaga from './addBrand';
import addClothingItemSaga from './addClothingItem.saga';
import clothingSaga from './clothingSaga';
import deleteUserClothingItemSaga from './deleteClothingItem.saga';
import deleteUserBrandSaga from './deleteUserBrand.saga';
import editUserClothingItemSaga from './editClothingItem.saga';
import fetchBrands from './fetchBrandSaga';
import fetchUsersToFollow from './fetchPublicUsers';
import followUserSaga from './followUser.saga';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import unfollowUserSaga from './unfollowUser.saga';
import userSaga from './user.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    fetchBrands(),
    addBrandSaga(),
    clothingSaga(),
    deleteUserBrandSaga(),
    deleteUserClothingItemSaga(),
    addClothingItemSaga(),
    editUserClothingItemSaga(),
    fetchUsersToFollow(),
    followUserSaga(),
    unfollowUserSaga(),
  ]);
}
