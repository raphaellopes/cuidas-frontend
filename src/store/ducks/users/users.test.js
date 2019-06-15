import reducer, { Creators, Types, initialState } from './index';

describe('Redux Users', () => {
  describe('ACTIONS', () => {
    test('Should create a request action', () => {
      const payload = { email: 'test@email' };
      const expected = {
        type: Types.USERS_CHECK_REQUEST,
        payload,
      };

      const action = Creators.usersRequest(payload.email);

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

      const action = Creators.usersSucccess(payload.data);

      expect(action).toEqual(expected);
    });

    test('Should create an error action', () => {
      const payload = {
        error: 'some error',
      };
      const expected = {
        type: Types.USERS_CHECK_ERROR,
        payload,
      };

      const action = Creators.usersError(payload.error);

      expect(action).toEqual(expected);
    });
  });

  describe('REDUCERS', () => {
    test('Should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });

    test('Should handle USERS_CHECK_REQUEST', () => {
      const payload = { email: 'test@email' };
      const action = { type: Types.USERS_CHECK_REQUEST, payload };
      const data = reducer(initialState, action);
      const expected = { ...initialState, loading: true };

      expect(data).toEqual(expected);
    });

    test('Should handle USERS_CHECK_ERROR', () => {
      const payload = { error: 'some error' };
      const action = { type: Types.USERS_CHECK_ERROR, payload };
      const data = reducer(initialState, action);
      const expected = { ...initialState, loading: false, error: payload.error };

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
