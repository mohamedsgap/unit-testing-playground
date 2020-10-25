import { shallow } from "enzyme";
import React from "react";
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

/**
 *
 * @param {props} secretWord
 * @returns {shallow wrapper} Input
 */
function setup(secretWord = "party") {
  return shallow(<Input secretWord={secretWord} />);
}

test("Render Input compnent without error", () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, "input-component");
  expect(inputComponent.length).toBe(1);
});

test("Check Input component props type", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state contolled of Input component", () => {
  const mockSetCurrentGuess = jest.fn();
  let wrapper;
  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
    wrapper = setup();
  });
  test("state update of value upon input box", () => {
    const inputBox = findByTestAttr(wrapper, "input-box");
    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared when submit button clicked", () => {
    const submitButton = findByTestAttr(wrapper, "submit-button");
    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
