import * as actions from "./../../actions";
import * as constants from "../../actions/ActionTypes";

describe('help queue actions', () => {
  test('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: constants.DELETE_TICKET,
      id: 1
    });
  });

  test('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: constants.TOGGLE_FORM
    });
  });

  test('addTicket should create ADD_TICKET action', () => {
    expect(actions.addTicket({names: 'Jo and Jasmine', location: '3E', issue: 'Redux not working!', timeOpen: 0, formattedWaitTime: "A few seconds", id: 1})).toEqual({
      type: "ADD_TICKET",
      names: 'Jo and Jasmine',
      location: '3E',
      issue: 'Redux not working!',
      timeOpen: 0,
      formattedWaitTime: "A few seconds",
      id: 1
    });
  });

  test('updateTime should create UPDATE_TIME action', () => {
    expect(actions.updateTime(1, "0 seconds ago")).toEqual({
      type: constants.UPDATE_TIME,
      id: 1,
      formattedWaitTime: "0 seconds ago"
    });
  });
});