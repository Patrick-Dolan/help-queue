import * as constants from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
    case constants.ADD_TICKET:
      return Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id
        }
      });
    case constants.DELETE_TICKET:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};