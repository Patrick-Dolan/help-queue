import * as constants from "../../src/actions/ActionTypes"

export const deleteTicket = id => ({
  type: constants.DELETE_TICKET,
  id
});

export const toggleForm = () => ({
  type: constants.TOGGLE_FORM
});

export const addTicket = (ticket) => {
  const { names, location, issue, id, formattedWaitTime, timeOpen } = ticket;
  return {
    type: constants.ADD_TICKET,
    names: names,
    location: location,
    issue: issue,
    id: id,
    formattedWaitTime,
    timeOpen: timeOpen
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: constants.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});