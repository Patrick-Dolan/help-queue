import * as actions from "../actions/ActionTypes";

export const deleteTicket = id => ({
  type: actions.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: actions.TOGGLE_FORM
});

export const addTicket = ticket => {
  const { names, location, issue, id } = ticket;
  return {
    type: actions.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    id: id
  }
}