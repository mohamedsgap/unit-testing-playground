import React from "react";
import ClickCounter from "./ClickCounter";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

test("render without errors", () => {
  const wrapper = shallow(<ClickCounter />);
  const appComponent = wrapper.find("[data-test='component-app']");
  expect(appComponent.length).toEqual(1);
});

test("renders increamet  button", () => {});

test("renders counter display", () => {});

test("renders counter  starts 0", () => {});

test("renders clicking button increaments counter display", () => {});
