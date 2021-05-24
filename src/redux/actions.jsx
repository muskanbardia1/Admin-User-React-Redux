
export const INSERT_USER = "INSERT_USER";




export const insertUser = (data) => {
  return async (dispatch) => {
    dispatch({ type: INSERT_USER, payload: data });
  };
};

