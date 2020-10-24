import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr, checkProps } from "../../test/testUtils";
import Congrats from "./Congrats";
Enzyme.configure({ adapter: new EnzymeAdapter() });

const defaultProps = { success: false };

/**
 * @funtion setup
 * @returns(wrapper with props)
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

test("renders witout errors", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "congrats");
  expect(component.length).toBe(1);
});

test("renders no text with `success` props is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, "congrats");
  expect(component.text()).toBe("");
});

test("renders non-empty congrats message when `success` props is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

test("does not throw wraning with expected props", () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
