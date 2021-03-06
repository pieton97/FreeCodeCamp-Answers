//dispatch(action) -> to reducer -> store -> triggers subscribe 

const defaultState = {
  authenticated: false
};

//Reducers are responsible for updating state in response to actions
//reducer takes state and action as arguments, and returns a new state
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {authenticated: true};
    case "LOGOUT":
      return {authenticated: false};
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

//the login/logout actions within action-creator (the function that returns an action)
const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};

//dispatching action against store, takes in action-creator containing action
store.dispatch(loginUser());

//triggers subscribe if dispatch occurs
store.subscribe( () => console.log('state was updated') );
