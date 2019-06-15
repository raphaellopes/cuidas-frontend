import reducer, { Creators, Types, initialState } from './index';

const data = { name: 'test', email: 'test@email', phone: 123 };

describe('Redux Appointments', () => {
  describe('ACTIONS', () => {
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
