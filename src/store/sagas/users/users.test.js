// vendors
import {
  all, put, takeLatest, call,
} from 'redux-saga/effects';

// locals
import api from '../../../services/api';
import {
  usersSave, usersCheck, usersWatcher, usersCheckWatcher, usersSaveWatcher,
} from './index';
import { Types } from '../../ducks/users';

const email = 'test@test';

describe('SAGAS | Users', () => {
  test('Should all "usersWatcher"', () => {
    const iterator = usersWatcher();
    const expected = all([
      usersCheckWatcher(),
      usersSaveWatcher(),
    ]);

    expect(iterator.next().value).toEqual(expected);
    expect(iterator.next().done).toBeTruthy();
  });

  describe('usersCheck', () => {
    test('Should dispatch action "usersCheckRequest"', () => {
      const iterator = usersCheckWatcher();
      const expected = takeLatest(Types.USERS_CHECK_REQUEST, usersCheck);

      expect(iterator.next(email).value).toEqual(expected);
      expect(iterator.next().done).toBeTruthy();
    });

    test('Should dispatch action "usersCheckError"', () => {
      const payload = { error: 'Erro ao tentar encontrar o usuário!' };
      const iterator = usersCheck();
      const expected = put({ type: Types.USERS_CHECK_ERROR, payload });

      expect(iterator.next(payload).value).toEqual(expected);
      expect(iterator.next().done).toBeTruthy();
    });

    test('Should make api call', () => {
      const action = { payload: { email } };
      const iterator = usersCheck(action);
      const expected = call(api.get, 'user/exists', { params: { email } });

      expect(iterator.next(email).value).toEqual(expected);
    });
  });

  describe('usersSave', () => {
    test('Should dispatch action "usersSaveRequest"', () => {
      const iterator = usersSaveWatcher();
      const expected = takeLatest(Types.USERS_SAVE_REQUEST, usersSave);

      expect(iterator.next({}).value).toEqual(expected);
      expect(iterator.next().done).toBeTruthy();
    });

    test('Should dispatch action "usersSaveError"', () => {
      const payload = { error: 'Erro ao salvar usuário!' };
      const iterator = usersSave();
      const expected = put({ type: Types.USERS_SAVE_ERROR, payload });

      expect(iterator.next(payload).value).toEqual(expected);
      expect(iterator.next().done).toBeTruthy();
    });

    // test('Should make api call', () => {
    // const action = { payload: { email } };
    // const iterator = usersCheck(action);
    // const expected = call(api.get, 'user/exists', { params: { email } });

    // expect(iterator.next(email).value).toEqual(expected);
    // });
  });
});
