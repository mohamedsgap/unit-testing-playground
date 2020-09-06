import React from "react";
import ClickCounter from "./ClickCounter";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

/**
 *
 * @param {props value of ClickCounter} props
 * @param {the state of ClickCounter} state
 */

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<ClickCounter {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};
/**
 *
 * @param {Wrapper } wrapper
 * @param {data-test attribute} val
 */

const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test("render without errors", () => {
  const wrapper = setup();
  const appComponent = findByAttr(wrapper, "component-app");
  expect(appComponent.length).toEqual(1);
});

test("renders increamet  button", () => {
  const wrapper = setup();
  const button = findByAttr(wrapper, "increment-button");
  expect(button.length).toEqual(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByAttr(wrapper, "counter-display");
  expect(counterDisplay.length).toEqual(1);
});

test("renders counter  starts 0", () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state("counter");
  expect(initialCounterState).toEqual(0);
  expect(initialCounterState).toBe(0);
});

test("renders clicking button increaments counter display", () => {
  const counter = 13;
  const wrapper = setup(null, { counter });
  // find button and click
  const button = findByAttr(wrapper, "increment-button");
  button.simulate("click");

  // find display and test value
  const counterDisplay = findByAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter + 1);
});

test("renders decreamet  button", () => {
  const wrapper = setup();
  const button = findByAttr(wrapper, "decrement-button");
  expect(button.length).toEqual(1);
});

test("renders clicking button decrement counter display", () => {
  const counter = 13;
  const wrapper = setup(null, { counter });
  // find button and click
  const button = findByAttr(wrapper, "decrement-button");
  button.simulate("click");

  // find display and test value
  const counterDisplay = findByAttr(wrapper, "counter-display");
  expect(counterDisplay.text()).toContain(counter - 1);
});

test(" render error message on page", () => {
  const wrapper = setup();
  const error = findByAttr(wrapper, "error-message");
  expect(error.length).toEqual(1);
});
