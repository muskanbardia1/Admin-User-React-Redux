export const FETCH_SONG_LIST = "FETCH_SONG_LIST";
export const INSERT_USER = "INSERT_USER";
export const FAV_SONG_LIST = "FAV_SONG_LIST";
export const FAV_DEL_LIST = "FAV_DEL_LIST";
export const CUR_PROFILE = "CUR_PROFILE";
export const SIGNUP = "SIGNUP";
export const LOGGEDIN = "LOGGEDIN";
export const USER_FAV_SONG_LIST = "USER_FAV_SONG_LIST";
export const USER_FAV_DEL_LIST = "USER_FAV_DEL_LIST";



export const insertUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: INSERT_USER, payload: data });
  };
};

export const favData = (data) => {
  return async (dispatch) => {
    dispatch({ type: FAV_SONG_LIST, payload: data });
  };
};
export const favDelete = (data) => {
  return async (dispatch) => {
    dispatch({ type: FAV_DEL_LIST, payload: data });
  };
};
export const userfavData = (data) => {
  return async (dispatch) => {
    dispatch({ type: USER_FAV_SONG_LIST, payload: data });
  };
};
export const userfavDelete = (data) => {
  return async (dispatch) => {
    dispatch({ type: USER_FAV_DEL_LIST, payload: data });
  };
};
export const curProfile = (data) => {
  return async (dispatch) => {
    dispatch({ type: CUR_PROFILE, payload: data });
  };
};
export const signUp = (data) => {
  return async (dispatch) => {
    dispatch({ type: SIGNUP, payload: data });
  };
};

export const loggedIn = (data) => {
  return async (dispatch) => {
    dispatch({ type: LOGGEDIN, payload: data });
  };
};