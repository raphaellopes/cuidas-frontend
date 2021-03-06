// vendor
import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

// locals
import api from '../../../services/api';
import { Creators, Types } from '../../ducks/users';
import { Creators as AppointmentsCreators } from '../../ducks/appointments';

export function* usersCheck(action) {
  try {
    const { email } = action.payload;
    const { data } = yield call(api.get, 'user/exists', {
      params: {
        email,
      },
    });

    if (data) {
      yield put(Creators.usersCheckSucccess(data.user));
      yield put(AppointmentsCreators.appointmentsFetchSuccess(data.schedules));
    } else {
      yield put(Creators.usersCheckSucccess({ email }));
    }
  } catch (err) {
    yield put(Creators.usersError('Erro ao tentar encontrar o usuário!'));
  }
}

export function* usersSave(action) {
  try {
    const { data } = yield call(api.post, 'user', {
      ...action.payload.data,
    });

    yield put(Creators.usersSaveSucccess(data));
  } catch (err) {
    yield put(Creators.usersError('Erro ao salvar usuário!'));
  }
}

// watchers
export function* usersCheckWatcher() {
  yield takeLatest(Types.USERS_CHECK_REQUEST, usersCheck);
}

export function* usersSaveWatcher() {
  yield takeLatest(Types.USERS_SAVE_REQUEST, usersSave);
}

export function* usersWatcher() {
  yield all([usersCheckWatcher(), usersSaveWatcher()]);
}
