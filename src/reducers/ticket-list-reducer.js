import * as constants from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { names, location, issue, id, formattedWaitTime, timeOpen } = action;
  switch (action.type) {
    case constants.ADD_TICKET:
      return Object.assign({}, state, {
        [id]: {
          names: names,
          location: location,
          issue: issue,
          id: id,
          timeOpen: timeOpen,
          formattedWaitTime: formattedWaitTime
        }
      });
    case constants.DELETE_TICKET:
      let newState = { ...state };
      delete newState[id];
      return newState;
    case constants.UPDATE_TIME:
      const newTicket = Object.assign({}, state[id], {formattedWaitTime});
      const updatedState = Object.assign({}, state, {
        [id]: newTicket
      });
      return updatedState;
    default:
      return state;
  }
};