// vendors
import moment from 'moment';

// types
const namespace = 'appointments';
export const Types = {
  APPOINTMENTS_FETCH_SUCCESS: `${namespace}/fetch/success`,
  APPOINTMENTS_SAVE_REQUEST: `${namespace}/save/request`,
  APPOINTMENTS_SAVE_SUCCESS: `${namespace}/save/success`,
  APPOINTMENTS_SAVE_ERROR: `${namespace}/save/error`,
  APPOINTMENTS_CHECK_REQUEST: `${namespace}/check/request`,
  APPOINTMENTS_CHECK_SUCCESS: `${namespace}/check/success`,
  APPOINTMENTS_CHECK_ERROR: `${namespace}/check/error`,
};

// reducers
export const initialState = {
  loading: false,
  error: null,
  hours: [],
  data: [],
};

export default function appointments(state = initialState, action) {
  switch (action.type) {
    case Types.APPOINTMENTS_SAVE_REQUEST:
    case Types.APPOINTMENTS_CHECK_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case Types.APPOINTMENTS_SAVE_ERROR:
    case Types.APPOINTMENTS_CHECK_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };

    case Types.APPOINTMENTS_SAVE_SUCCESS: {
      const { data } = action.payload;
      const hours = state.hours.filter(h => (
        h !== moment(data.date).format('HH:mm')
      ));

      return {
        ...state,
        loading: false,
        error: null,
        hours,
        data: [
          ...state.data,
          data,
        ],
      };
    }

    case Types.APPOINTMENTS_FETCH_SUCCESS: {
      const { data } = action.payload;

      return {
        ...state,
        loading: false,
        error: null,
        data,
      };
    }

    case Types.APPOINTMENTS_CHECK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        hours: action.payload.data,
      };

    default:
      return state;
  }
}

// actions
export const Creators = {
  appointmentsFetchSuccess: data => ({
    type: Types.APPOINTMENTS_FETCH_SUCCESS,
    payload: { data },
  }),
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
  appointmentsCheckRequest: date => ({
    type: Types.APPOINTMENTS_CHECK_REQUEST,
    payload: { date },
  }),
  appointmentsCheckSucccess: data => ({
    type: Types.APPOINTMENTS_CHECK_SUCCESS,
    payload: { data },
  }),
  appointmentsCheckError: error => ({
    type: Types.APPOINTMENTS_CHECK_ERROR,
    payload: { error },
  }),
};
