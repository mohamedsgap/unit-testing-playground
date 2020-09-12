import { actionTypes } from "../actions/index";
import successReducer from "./successReducer";

test("return default initial state of false when no action is passing", () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test("returns state of true upon receivign ac action type of CORRECT_GUESS", () => {
  const newState = successReducer(undefined, {
    type: actionTypes.CORRECT_GUESS,
  });
  expect(newState).toBe(true);
});
