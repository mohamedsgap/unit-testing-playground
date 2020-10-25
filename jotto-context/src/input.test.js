import { shallow } from "enzyme";
import { func } from "prop-types";
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
