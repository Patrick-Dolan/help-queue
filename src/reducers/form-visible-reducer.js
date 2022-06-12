import * as constants from "./../actions/ActionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case constants.TOGGLE_FORM:
      return !state;
    default:
      return state;
  }
}