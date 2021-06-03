import { INSERT_USER,
  LOGGED_USER,
  LOGGED_IN,
  DELETE_USER,
  UPDATE_USER
} from './actions';

const initialState = {
  admin: [{name:"Admin1",
          email: "admin@mail.com",
          pass: "@Dmin123"  
        }],
  users: [],
  loggedProfile: [],
  isLogged: false,
}

export default function (state = initialState, action) {
  switch(action.type){
    case INSERT_USER:
      return {
        ...state,
        users:[ ...state.users,action.payload],
      };
    case LOGGED_USER:
      return {
        ...state,
        loggedProfile: action.payload
      }
      case LOGGED_IN:
        return {
          ...state,
          isLogged: action.payload
        }
      case DELETE_USER:
        return {
          ...state,
          users:[...state.users.filter((user) => user.id !== action.payload)]
        }
      case UPDATE_USER:
        return {
          ...state,
          users:[...state.users.map((user, index)=>
            user.id == action.id ? action.payload : user )]
        }
    default: return state;
  }
}