/**
 * Types
 */
export const Types = {
  ADD_REQUEST: 'repositories/ADD_REQUEST',
  ADD_SUCCESS: 'repositories/ADD_SUCCESS',
  ADD_FAILURE: 'repositories/ADD_FAILURE',
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function repositories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    default:
      return state;
  }
}

/**
 * Actions
 */
export const Creators = {
  addRepositoryRequest: repository => ({
    type: Types.ADD_REQUEST,
    payload: { repository },
  }),

  addRepositorySuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addRepositoryFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),
};
