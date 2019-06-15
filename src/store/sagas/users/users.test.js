// vendors
import { put, takeLatest, call } from 'redux-saga/effects';

// locals
import api from '../../../services/api';
import { usersCheck, usersWatcher } from './index';
import { Types, Creators } from '../../ducks/users';

const email = 'test@test';

describe('SAGAS | Users', () => {
  test('Should dispatch action "usersRequest"', () => {
    const iterator = usersWatcher();
    const expected = takeLatest(Types.USERS_CHECK_REQUEST, usersCheck);

    expect(iterator.next(email).value).toEqual(expected);
    expect(iterator.next().done).toBeTruthy();
  });

  test('Should dispatch action "usersError"', () => {
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
