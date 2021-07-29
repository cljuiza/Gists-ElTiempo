// ACTIONS
import {
  GET_GISTS,
  GET_GISTS_ID,
  REMOVE_GISTS_ID,
} from "../actions/actionsGists.js";

const initialStateUsers = {
  allGists: [],
  gistsById: {},
};

const usersReducer = (state = initialStateUsers, action) => {
  switch (action.type) {
    case GET_GISTS:
      return {
        ...state,
        allGists: action.payload,
      };
    case GET_GISTS_ID:
      return {
        ...state,
        gistsById: action.payload,
      };
    case REMOVE_GISTS_ID:
      return {
        ...state,
        gistsById: {},
      };

    default:
      return state;
  }
};

export default usersReducer;
