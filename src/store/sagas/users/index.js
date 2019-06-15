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

    if (data) {
      yield put(Creators.usersCheckSucccess(data));
    } else {
      yield put(Creators.usersCheckSucccess({ email }));
    }
  } catch (err) {
    yield put(Creators.usersCheckError('Erro ao tentar encontrar o usuário!'));
  }
}

export function* usersWatcher() {
  yield takeLatest(Types.USERS_CHECK_REQUEST, usersCheck);
}
