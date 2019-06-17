// vendors
import moment from 'moment';

// types
const namespace = 'appointments';
export const Types = {
  APPOINTMENTS_STATUS: `${namespace}/status`,
  APPOINTMENTS_FETCH_REQUEST: `${namespace}/fetch/request`,
  APPOINTMENTS_FETCH_SUCCESS: `${namespace}/fetch/success`,
  APPOINTMENTS_SAVE_REQUEST: `${namespace}/save/request`,
  APPOINTMENTS_SAVE_SUCCESS: `${namespace}/save/success`,
  APPOINTMENTS_SAVE_ERROR: `${namespace}/save/error`,
  APPOINTMENTS_CHECK_REQUEST: `${namespace}/check/request`,
  APPOINTMENTS_CHECK_SUCCESS: `${namespace}/check/success`,
  APPOINTMENTS_CHECK_ERROR: `${namespace}/check/error`,
  APPOINTMENTS_REMOVE_REQUEST: `${namespace}/remove/request`,
  APPOINTMENTS_REMOVE_SUCCESS: `${namespace}/remove/success`,
};

// reducers
export const initialState = {
  status: 'initial',
  loading: false,
  error: null,
  hours: [],
  data: [],
};

export default function appointments(state = initialState, action) {
  switch (action.type) {
    case Types.APPOINTMENTS_SAVE_REQUEST:
    case Types.APPOINTMENTS_FETCH_REQUEST:
    case Types.APPOINTMENTS_CHECK_REQUEST:
    case Types.APPOINTMENTS_REMOVE_REQUEST:
      return {
        ...state,
        status: 'requesting',
        loading: true,
        error: null,
      };

    case Types.APPOINTMENTS_SAVE_ERROR:
    case Types.APPOINTMENTS_CHECK_ERROR:
      return {
        ...state,
        status: 'error',
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
        status: 'saved',
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
        status: 'fetched',
        loading: false,
        error: null,
        data,
      };
    }

    case Types.APPOINTMENTS_CHECK_SUCCESS:
      return {
        ...state,
        status: 'checked',
        loading: false,
        error: null,
        hours: action.payload.data,
      };

    case Types.APPOINTMENTS_REMOVE_SUCCESS: {
      const removed = action.payload.data;
      const data = state.data.filter(item => item._id !== removed);

      return {
        ...state,
        status: 'removed',
        loading: false,
        error: null,
        data,
      };
    }

    case Types.APPOINTMENTS_STATUS:
      return {
        ...state,
        status: action.payload.status,
      };

    default:
      return state;
  }
}

// actions
export const Creators = {
  appointmentsStatus: status => ({
    type: Types.APPOINTMENTS_STATUS,
    payload: { status },
  }),
  appointmentsFetchSuccess: data => ({
    type: Types.APPOINTMENTS_FETCH_SUCCESS,
    payload: { data },
  }),
  appointmentsFetchRequest: () => ({
    type: Types.APPOINTMENTS_FETCH_REQUEST,
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
  appointmentsRemoveRequest: data => ({
    type: Types.APPOINTMENTS_REMOVE_REQUEST,
    payload: { data },
  }),
  appointmentsRemoveSuccess: data => ({
    type: Types.APPOINTMENTS_REMOVE_SUCCESS,
    payload: { data },
  }),
};
