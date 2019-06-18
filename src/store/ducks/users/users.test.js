import reducer, { Creators, Types, initialState } from './index';

describe('Redux Users', () => {
  describe('ACTIONS', () => {
    test('Should create e clear action', () => {
      const expected = {
        type: Types.USERS_CLEAR,
      };

      const action = Creators.usersClear();

      expect(action).toEqual(expected);
    });

    test('Should create an error action', () => {
      const payload = {
        error: 'some error',
      };
      const expected = {
        type: Types.USERS_ERROR,
        payload,
      };

      const action = Creators.usersError(payload.error);

      expect(action).toEqual(expected);
    });

    describe('usersCheck', () => {
      test('Should create a request action', () => {
        const payload = { email: 'test@email' };
        const expected = {
          type: Types.USERS_CHECK_REQUEST,
          payload,
        };

        const action = Creators.usersCheckRequest(payload.email);

        expect(action).toEqual(expected);
      });

      test('Should create a success action', () => {
        const payload = {
          data: {
            id: 'U1',
            name: 'fulano',
            phone: 12345678901,
            createdAt: 'some-date',
          },
        };
        const expected = {
          type: Types.USERS_CHECK_SUCCESS,
          payload,
        };

        const action = Creators.usersCheckSucccess(payload.data);

        expect(action).toEqual(expected);
      });

      describe('usersSave', () => {
        test('Should create a request action', () => {
          const payload = { data: { name: 'test', email: 'a@a', phone: 123 } };
          const expected = {
            type: Types.USERS_SAVE_REQUEST,
            payload,
          };

          const action = Creators.usersSaveRequest(payload.data);

          expect(action).toEqual(expected);
        });

        test('Should create a success action', () => {
          const payload = {
            data: {
              id: 'U1',
              name: 'fulano',
              phone: 12345678901,
              createdAt: 'some-date',
            },
          };
          const expected = {
            type: Types.USERS_SAVE_SUCCESS,
            payload,
          };

          const action = Creators.usersSaveSucccess(payload.data);

          expect(action).toEqual(expected);
        });
      });
    });
  });

  describe('REDUCERS', () => {
    test('Should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    test('Should handle USERS_CLEAR', () => {
      const action = { type: Types.USERS_CLEAR };
      const data = reducer(initialState, action);

      expect(data).toEqual(initialState);
    });

    test('Should handle USERS_ERROR', () => {
      const payload = { error: 'some error' };
      const action = { type: Types.USERS_ERROR, payload };
      const data = reducer(initialState, action);
      const expected = { ...initialState, loading: false, error: payload.error };

      expect(data).toEqual(expected);
    });

    test('Should handle USERS_CHECK_REQUEST', () => {
      const payload = { email: 'test@email' };
      const action = { type: Types.USERS_CHECK_REQUEST, payload };
      const data = reducer(initialState, action);
      const expected = { ...initialState, loading: true };

      expect(data).toEqual(expected);
    });

    test('Should handle USERS_CHECK_SUCCESS', () => {
      const payload = { data: { id: 'U1' } };
      const action = { type: Types.USERS_CHECK_SUCCESS, payload };
      const data = reducer(initialState, action);
      const expected = {
        ...initialState,
        loading: false,
        data: payload.data,
      };

      expect(data).toEqual(expected);
    });
  });
});
