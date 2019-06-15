// vendors
import { all } from 'redux-saga/effects';

// locals
import { usersWatcher } from './users';
import { appointmentsWatcher } from './appointments';
import rootSaga from './index';

describe('SAGAS', () => {
  test('Should test rootSaga', () => {
    const iterator = rootSaga();
    const expected = all([
      usersWatcher(),
      appointmentsWatcher(),
    ]);

    expect(iterator.next().value).toEqual(expected);
    expect(iterator.next().done).toBeTruthy();
  });
});
