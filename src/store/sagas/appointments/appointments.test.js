// vendors
import {
  all, put, takeLatest,
} from 'redux-saga/effects';

// locals
import {
  appointmentsWatcher,
  appointmentsSave, appointmentsSaveWatcher,
  appointmentsCheck, appointmentsCheckWatcher,
} from './index';
import { Types } from '../../ducks/appointments';

describe('SAGAS | Appointments', () => {
  test('Should all "appointmentsWatcher"', () => {
    const iterator = appointmentsWatcher();
    const expected = all([
      appointmentsSaveWatcher(),
      appointmentsCheckWatcher(),
    ]);

    expect(iterator.next().value).toEqual(expected);
    expect(iterator.next().done).toBeTruthy();
  });

  describe('appointmentsSave', () => {
    test('Should dispatch action "appointmentsSaveRequest"', () => {
      const iterator = appointmentsSaveWatcher();
      const expected = takeLatest(
        Types.APPOINTMENTS_SAVE_REQUEST,
        appointmentsSave,
      );

      expect(iterator.next({}).value).toEqual(expected);
      expect(iterator.next().done).toBeTruthy();
    });

    test('Should dispatch action "appointmentsSaveError"', () => {
      const payload = { error: 'Erro ao salvar agendamento!' };
      const iterator = appointmentsSave();
      const expected = put({ type: Types.APPOINTMENTS_SAVE_ERROR, payload });

      expect(iterator.next(payload).value).toEqual(expected);
      expect(iterator.next().done).toBeTruthy();
    });
  });

  describe('appointmentsCheck', () => {
    test('Should dispatch action "appointmentsCheckRequest"', () => {
      const iterator = appointmentsCheckWatcher();
      const expected = takeLatest(
        Types.APPOINTMENTS_CHECK_REQUEST,
        appointmentsCheck,
      );

      expect(iterator.next({}).value).toEqual(expected);
      expect(iterator.next().done).toBeTruthy();
    });

    test('Should dispatch action "appointmentsCheckError"', () => {
      const payload = { error: 'Erro ao buscar horários!' };
      const iterator = appointmentsCheck();
      const expected = put({ type: Types.APPOINTMENTS_CHECK_ERROR, payload });

      expect(iterator.next(payload).value).toEqual(expected);
      expect(iterator.next().done).toBeTruthy();
    });
  });
});
