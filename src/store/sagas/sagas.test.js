// vendors
import { all } from 'redux-saga/effects';

// locals
import { usersWatcher } from './users';
import rootSaga from './index';

describe('SAGAS', () => {
  test('Should all "usersWatcher"', () => {
    const iterator = rootSaga();
    const expected = all([
      usersWatcher(),
    ]);

    expect(iterator.next().value).toEqual(expected);
    expect(iterator.next().done).toBeTruthy();
  });
});
