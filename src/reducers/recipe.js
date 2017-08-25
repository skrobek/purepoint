import { SEARCH, SEARCH_SUCCESS, SEARCH_FAIL, SEARCH_CLEAR } from './../actions/recipe';

const LIMIT = 20;
const initialState = {
  list: [],
  isSearching: false
};

// in case of more than one reducer we can use combineReducers from redux package
export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        isSearching: true,
        list: []
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isSearching: false,
        list: [...state.list, ...action.result].slice(0, LIMIT)
      };
    case SEARCH_CLEAR:
    case SEARCH_FAIL:
      return {
        ...state,
        isSearching: false,
        list: []
      };
    default:
      return state;
  }
}