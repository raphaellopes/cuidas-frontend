// types
const namespace = 'appointments';
export const Types = {
  APPOINTMENTS_SAVE_REQUEST: `${namespace}/save/request`,
  APPOINTMENTS_SAVE_SUCCESS: `${namespace}/save/success`,
  APPOINTMENTS_SAVE_ERROR: `${namespace}/save/error`,
};

// reducers
export const initialState = {
  loading: false,
  error: null,
  data: [],
};

export default function appointments(state = initialState, action) {
  switch (action.type) {
    case Types.APPOINTMENTS_SAVE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case Types.APPOINTMENTS_SAVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case Types.APPOINTMENTS_SAVE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [
          ...state.data,
          action.payload.data,
        ],
      };

    default:
      return state;
  }
}

// actions
export const Creators = {
  appointmentsSaveRequest: data => ({
    type: Types.APPOINTMENTS_SAVE_REQUEST,
    payload: { data },
  }),
  appointmentsSaveSucccess: data => ({
    type: Types.APPOINTMENTS_SAVE_SUCCESS,
    payload: { data },
  }),
  appointmentsSaveError: error => ({
    type: Types.APPOINTMENTS_SAVE_ERROR,
    payload: { error },
  }),
};
