// vendor
import { call, put, takeLatest } from 'redux-saga/effects';

// locals
import api from '../../../services/api';
import { Creators, Types } from '../../ducks/users';

export function* usersCheck(action) {
  try {
    const { email } = action.payload;
    const { data } = yield call(api.get, 'user/exists', {
      params: {
        email,
      },
    });

    yield put(Creators.usersSucccess(data));
  } catch (err) {
    yield put(Creators.usersError('Erro ao tentar encontrar o usuário!'));
  }
}

export function* usersWatcher() {
  yield takeLatest(Types.USERS_CHECK_REQUEST, usersCheck);
}
