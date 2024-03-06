const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEDED = "FETCH_USERS_SUCCEDED";
const FETCH_USERS_FALIED = "FETCH_USERS_FALIED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEDED,
    payload: users,
  };
};

const fetchUsersFail = (error) => {
  return {
    type: FETCH_USERS_FALIED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCEDED:
      return { loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FALIED:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
  }
};

const store = createStore(reducer);
