const initialState = {
  admin: [],
  users: [],
}

export default function (state = initialState, action) {
  switch(action.type){
    case "INSERT_USER":
      return {
        ...state,
        users:[ ...state.users,action.payload],
      };
    default: return state;
  }
}