import formVisibleReducer from "../../reducers/form-visible-reducer";
import * as constants from "./../../actions/ActionTypes";

describe("formVisibleReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });
  test("Should toggle form visibility state to true", () => {
    expect(formVisibleReducer(false, { type: constants.TOGGLE_FORM })).toEqual(true);
  });
});