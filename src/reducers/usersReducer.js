const initialState = {
  loading: true,
  users: [],
  // showUser: {},
  // currentUser: null,
  error: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
      case "LOADING":
          return { ...state, loading: true };
      case "SET_USERS":
          return { ...state, loading: false, users: action.payload };
      // case "ADD_USER":
      //     return { ...state, users: [...state.users, action.user] };
      // case "SHOW_USER":
      //     return { ...state, showUser: action.payload };
      // case "DELETE_USER":
      //     return { ...state, currentUser: null };
      // case "CURRENT_USER":
      //     return { ...state, currentUser: action.payload };
      // case "EDIT_CURRENT_USER":
      //     return { ...state, currentUser: action.payload };
      case "ERROR":
          return { ...state, error: action.payload };
      default:
          return state;
  }
};

export default usersReducer;
