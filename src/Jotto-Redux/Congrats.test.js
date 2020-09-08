import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { findByTestAttr } from "../../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * @funtion setup
 * @returns(wrapper with props)
 */

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders witout errors", () => {});

test("renders no text with `success` props is false", () => {});

test("renders non-empty congrats message when `success` props is true", () => {});
