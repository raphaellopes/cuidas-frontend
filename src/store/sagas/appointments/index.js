// vendor
import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

// locals
import api from '../../../services/api';
import { Creators, Types } from '../../ducks/appointments';

export function* appointmentsSave(action) {
  try {
    const { data } = yield call(api.post, 'schedule', {
      ...action.payload.data,
    });

    yield put(Creators.appointmentsSaveSucccess(data));
  } catch (err) {
    yield put(Creators.appointmentsSaveError('Erro ao salvar agendamento!'));
  }
}

export function* appointmentsCheck(action) {
  try {
    const { data } = yield call(api.get, 'schedule/available', {
      params: {
        date: action.payload.date,
      },
    });

    yield put(Creators.appointmentsCheckSucccess(data));
  } catch (err) {
    yield put(Creators.appointmentsCheckError('Erro ao buscar horários!'));
  }
}

// watchers
export function* appointmentsSaveWatcher() {
  yield takeLatest(Types.APPOINTMENTS_SAVE_REQUEST, appointmentsSave);
}

export function* appointmentsCheckWatcher() {
  yield takeLatest(Types.APPOINTMENTS_CHECK_REQUEST, appointmentsCheck);
}

export function* appointmentsWatcher() {
  yield all([
    appointmentsSaveWatcher(),
    appointmentsCheckWatcher(),
  ]);
}
