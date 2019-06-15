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

// watchers
export function* appointmentsSaveWatcher() {
  yield takeLatest(Types.APPOINTMENTS_SAVE_REQUEST, appointmentsSave);
}

export function* appointmentsWatcher() {
  yield all([appointmentsSaveWatcher()]);
}
