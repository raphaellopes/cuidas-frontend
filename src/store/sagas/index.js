// vendor
import { all } from 'redux-saga/effects';

// locals
import { usersWatcher } from './users';
import { appointmentsWatcher } from './appointments';

export default function* rootSaga() {
  yield all([
    usersWatcher(),
    appointmentsWatcher(),
  ]);
}
