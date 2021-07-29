import axios from "axios";

//URLS
import { GISTS_URL, GISTS_NAME_URL } from "../../Config/constans";

// names_Actions
export const GET_GISTS = "GET_GISTS";
export const GET_GISTS_ID = "GET_GISTS_ID";
export const REMOVE_GISTS_ID = "REMOVE_GISTS_ID";

/* =============================== ACTIONS ===============================*/

export const removeGistId = (payload) => {
  return {
    type: REMOVE_GISTS_ID,
    payload,
  };
};

export const getGist = () => {
  return function (dispach) {
    return axios.get(GISTS_URL).then((res) => {
      dispach({
        type: GET_GISTS,
        payload: res.data,
      });
    });
  };
};

export const getGistId = (name) => {
  return function (dispach) {
    return axios.get(GISTS_NAME_URL + name).then((res) => {
      dispach({
        type: GET_GISTS_ID,
        payload: res.data,
      });
    });
  };
};
