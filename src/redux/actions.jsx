
export const INSERT_USER = "INSERT_USER";
export const LOGGED_USER = "LOGGED_USER";
export const LOGGED_IN = "LOGGED_IN";
export const DELETE_USER = "DELETE_USER";




export const insertUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: INSERT_USER, payload: data });
  };
};

export const loggedUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: LOGGED_USER, payload: data });
  };
};

export const isLogged = (data) => {
  return async (dispatch) => {
    dispatch({ type: LOGGED_IN, payload: data });
  };
};
export const deleteUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_USER , payload: data });
  };
};

