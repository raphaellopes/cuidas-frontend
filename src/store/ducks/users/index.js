// types
const namespace = 'users';
export const Types = {
  USERS_CHECK_REQUEST: `${namespace}/check/request`,
  USERS_CHECK_SUCCESS: `${namespace}/check/success`,
  USERS_CHECK_ERROR: `${namespace}/check/error`,
};

// reducers
export const initialState = {
  loading: false,
  error: null,
  data: {},
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.USERS_CHECK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case Types.USERS_CHECK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case Types.USERS_CHECK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload.data,
      };

    default:
      return state;
  }
}

// actions
export const Creators = {
  usersCheckRequest: email => ({
    type: Types.USERS_CHECK_REQUEST,
    payload: { email },
  }),
  usersCheckSucccess: data => ({
    type: Types.USERS_CHECK_SUCCESS,
    payload: { data },
  }),
  usersCheckError: error => ({
    type: Types.USERS_CHECK_ERROR,
    payload: { error },
  }),
};
