import reducer, { Creators, Types, initialState } from './index';

const data = { user: 'U1', date: '2019-06-16 09:00' };

describe('Redux Appointments', () => {
  describe('ACTIONS', () => {
    describe('appointmentsFetch', () => {
      test('Should create a success action', () => {
        const payload = {
          data: [
            data,
          ],
        };
        const expected = {
          type: Types.APPOINTMENTS_FETCH_SUCCESS,
          payload,
        };

        const action = Creators.appointmentsFetchSuccess(payload.data);

        expect(action).toEqual(expected);
      });
    });

    describe('appointmentsSave', () => {
      test('Should create a request action', () => {
        const payload = { data };
        const expected = {
          type: Types.APPOINTMENTS_SAVE_REQUEST,
          payload,
        };

        const action = Creators.appointmentsSaveRequest(payload.data);

        expect(action).toEqual(expected);
      });

      test('Should create a success action', () => {
        const payload = {
          data: {
            id: 'U1',
            createdAt: 'some-date',
            ...data,
          },
        };
        const expected = {
          type: Types.APPOINTMENTS_SAVE_SUCCESS,
          payload,
        };

        const action = Creators.appointmentsSaveSucccess(payload.data);

        expect(action).toEqual(expected);
      });

      test('Should create an error action', () => {
        const payload = {
          error: 'some error',
        };
        const expected = {
          type: Types.APPOINTMENTS_SAVE_ERROR,
          payload,
        };

        const action = Creators.appointmentsSaveError(payload.error);

        expect(action).toEqual(expected);
      });
    });

    describe('appointmentsCheck', () => {
      const date = '2019-06-15';

      test('Should create a request action', () => {
        const payload = { date };
        const expected = {
          type: Types.APPOINTMENTS_CHECK_REQUEST,
          payload,
        };

        const action = Creators.appointmentsCheckRequest(payload.date);

        expect(action).toEqual(expected);
      });

      test('Should create a success action', () => {
        const payload = {
          data: ['09:00'],
        };
        const expected = {
          type: Types.APPOINTMENTS_CHECK_SUCCESS,
          payload,
        };

        const action = Creators.appointmentsCheckSucccess(payload.data);

        expect(action).toEqual(expected);
      });

      test('Should create an error action', () => {
        const payload = {
          error: 'some error',
        };
        const expected = {
          type: Types.APPOINTMENTS_CHECK_ERROR,
          payload,
        };

        const action = Creators.appointmentsCheckError(payload.error);

        expect(action).toEqual(expected);
      });
    });
  });

  describe('REDUCERS', () => {
    test('Should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    test('Should handle APPOINTMENTS_SAVE_REQUEST', () => {
      const payload = { data };
      const action = { type: Types.APPOINTMENTS_SAVE_REQUEST, payload };
      const actual = reducer(initialState, action);
      const expected = { ...initialState, loading: true };

      expect(actual).toEqual(expected);
    });

    test('Should handle APPOINTMENTS_SAVE_ERROR', () => {
      const payload = { error: 'some error' };
      const action = { type: Types.APPOINTMENTS_SAVE_ERROR, payload };
      const actual = reducer(initialState, action);
      const expected = { ...initialState, loading: false, error: payload.error };

      expect(actual).toEqual(expected);
    });

    test('Should handle APPOINTMENTS_SAVE_SUCCESS', () => {
      const payload = { data };
      const action = { type: Types.APPOINTMENTS_SAVE_SUCCESS, payload };
      const actual = reducer({
        ...initialState,
        hours: ['09:00'],
      }, action);
      const expected = {
        ...initialState,
        loading: false,
        data: [
          ...initialState.data,
          payload.data,
        ],
      };

      expect(actual).toEqual(expected);
    });

    test('Should handle APPOINTMENTS_CHECK_SUCCESS', () => {
      const payload = { data: ['09:00'] };
      const action = { type: Types.APPOINTMENTS_CHECK_SUCCESS, payload };
      const actual = reducer(initialState, action);
      const expected = {
        ...initialState,
        loading: false,
        hours: ['09:00'],
      };

      expect(actual).toEqual(expected);
    });

    test('Should handle APPOINTMENTS_FETCH_SUCCESS', () => {
      const payload = [data];
      const action = { type: Types.APPOINTMENTS_FETCH_SUCCESS, payload };
      const actual = reducer(initialState, action);
      const expected = {
        ...initialState,
        loading: false,
        data: [
          ...initialState.data,
          payload.data,
        ],
      };

      expect(actual).toEqual(expected);
    });
  });
});
