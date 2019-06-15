// vendor
import { all } from 'redux-saga/effects';

// locals
import { usersWatcher } from './users';

export default function* rootSaga() {
  yield all([
    usersWatcher(),
  ]);
}
