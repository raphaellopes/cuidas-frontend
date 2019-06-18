// vendors
import {
  all, put, takeLatest,
} from 'redux-saga/effects';

// locals
import {
  appointmentsWatcher,
  appointmentsRemove, appointmentsRemoveWatcher,
  appointmentsFetch, appointmentsFetchWatcher,
  appointmentsSave, appointmentsSaveWatcher,
  appointmentsCheck, appointmentsCheckWatcher,
} from './index';
import { Types } from '../../ducks/appointments';

const testError = (error, method) => {
  const payload = { error };
  const iterator = method();
  const expected = put({ type: Types.APPOINTMENTS_ERROR, payload });

  expect(iterator.next(payload).value).toEqual(expected);
  expect(iterator.next().done).toBeTruthy();
};

describe('SAGAS | Appointments', () => {
  test('Should all "appointmentsWatcher"', () => {
    const iterator = appointmentsWatcher();
    const expected = all([
      appointmentsRemoveWatcher(),
      appointmentsFetchWatcher(),
      appointmentsSaveWatcher(),
      appointmentsCheckWatcher(),
    ]);

    expect(iterator.next().value).toEqual(expected);
    expect(iterator.next().done).toBeTruthy();
  });

  describe('appointmentsRemove', () => {
    test('Should dispatch action "appointmentsRemoveRequest"', () => {
      const iterator = appointmentsRemoveWatcher();
      const expected = takeLatest(
        Types.APPOINTMENTS_REMOVE_REQUEST,
        appointmentsRemove,
      );

      expect(iterator.next({}).value).toEqual(expected);
      expect(iterator.next().done).toBeTruthy();
    });

    test('Should dispatch action "appointmentsError"', () => {
      testError('Erro ao remover agendamento!', appointmentsRemove);
    });
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

    test('Should dispatch action "appointmentsError"', () => {
      testError('Erro ao salvar agendamento!', appointmentsSave);
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
      testError('Erro ao buscar horários!', appointmentsCheck);
    });
  });

  describe('appointmentsFetch', () => {
    test('Should dispatch action "appointmentsFetchRequest"', () => {
      const iterator = appointmentsFetchWatcher();
      const expected = takeLatest(
        Types.APPOINTMENTS_FETCH_REQUEST,
        appointmentsFetch,
      );

      expect(iterator.next({}).value).toEqual(expected);
      expect(iterator.next().done).toBeTruthy();
    });
  });
});
