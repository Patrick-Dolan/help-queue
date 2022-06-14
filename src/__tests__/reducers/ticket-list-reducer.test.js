import { DateTime } from "luxon";
import ticketListReducer from "../../reducers/ticket-list-reducer";
import * as actions from "./../../actions";
import * as constants from "./../../actions/ActionTypes"

describe("ticketListReducer", () => {
  
  let action;
  const ticketData = {
    names: "Ryan & Aimen",
    location: "4b",
    issue: "Redux action is not working correctly.",
    timeOpen: 0,
    id: 1
  };

  const currentState = {
    1: {names: 'Ryan & Aimen',
    location: '4b',
    issue: 'Redux action is not working correctly.',
    id: 1 },
    2: {names: 'Jasmine and Justine',
    location: '2a',
    issue: 'Reducer has side effects.',
    id: 2 }
  }
  
  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new ticket data to mainTicketList", () => {
    const { names, location, issue, id } = ticketData;
    const ticket = {
      names: names,
      location: location,
      issue: issue,
      id: id
    };

    const action = actions.addTicket(ticket);

    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test("Should successfully delete a ticket", () => {
    action = actions.deleteTicket(1);
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {names: 'Jasmine and Justine',
        location: '2a',
        issue: 'Reducer has side effects.',
        id: 2 }
    });
  });

  test("Should add a formatted wait time to ticket entry", () => {
    const { names, location, issue, timeOpen, id } = ticketData;
    action = {
      type: constants.UPDATE_TIME,
      formattedWaitTime: "4 minutes",
      id: id
    }
    expect(ticketListReducer({ [id] : ticketData }, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '4 minutes'
      }
    });
  });

  test("Should succesfully add a ticket to the ticket list that includes luxon formatted wait times", () => {
    const { names, location, issue, timeOpen, id, formattedWaitTime } = ticketData;
    const waitTime = DateTime.now().toRelative();
    action = {
      type: constants.ADD_TICKET,
      names: names,
      location: location,
      issue: issue,
      timeOpen: timeOpen,
      id: id,
      formattedWaitTime: waitTime
    }
    expect(ticketListReducer({}, action)).toEqual({
      [id]: {
        names: names,
        location: location,
        issue: issue,
        timeOpen: timeOpen,
        id: id,
        formattedWaitTime: '0 seconds ago'
      }
    });
  });
});